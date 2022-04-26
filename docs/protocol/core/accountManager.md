---
sidebar_position: 3
---

# Account Manager

## **Overview**

The `AccountManager.sol` contract will be responsible for 3 main things:

1. Minting and Initializing Accounts for Users (Borrowers)
2. Managing the state of Accounts with reference to: Availability of Accounts, initiating withdrawals and transfers between the User, Account and Lending Pool
3. Managing and updating data that Margin need to operate including; [Controller](protocol/controllers/controller.md) addresses and [Risk Engine](protocol/core/riskEngine.md) address.

## Contract Spec

### Storage

- `IRiskEngine public riskEngine` [Risk Engine](protocol/core/riskEngine.md) interface state variable. Stores the Risk engine contract
- `IControllerFacade public controller`  [Controller](protocol/controllers/controller.md) interface state variable.
- `IAccountFactory public accountFactory`  [Account Factory](protocol/controllers/accountFactory.md)
- `inactiveAccounts` an array of previously minted accounts that are eligible to be initialized for borrowers
- `isCollateralAllowed` a mapping of address to a boolean, affirming if a token address is able to be used as collateral

### Functions

#### Account Management

```solidity
function openAccount(address owner) external whenNotPaused { }
```

- This function queries `inactiveAccounts` array, if there are idle accounts, it will initialize the account making the borrower `address owner`  the owner, if there are no accounts available it will mint (create) an Account on behalf of a borrower, and initialize the borrower as the owner.

```solidity
function closeAccount(address _account) public onlyOwner(_account) { }
```

- function responsible for closing a specified account. To mitigate risks accounts can only be closed if it has no debt and Accounts can not be opened and closed in the same block.

**Account Functionality**

Account owners or operators do not control Accounts directly, rather the AccountManager manages functions on the borrowers' behalf.

- `deposit` : takes *Collateral* deposit requests from user, and passes the call and funds to the Account delineated in the parameters
- `withdraw` : withdraws **ONLY** collateral or profits from the Accounts. (Note: Users will never be able to withdraw Loaned Assets from the Accounts at any time.)
- `borrow` : processes borrow requests from user. The flow can be seen below
    - AccountManager pulls the`_amount` of a certain `_token` from the `Ltoken` contract
    - `LToken` transfers the requested assets to the Account
    - AccountManager updates the the state of the Account at the `_account` address
- `repay` Transfers a specified amount of token from the account to the LP

### Interacting with Controllers

Accounts interact with contracts external to the core Sentiment architecture via  [controllers](protocol/controllers/controller.md).

```solidity
function exec(
        address account,
        address target,
        uint amt,
        bytes calldata data
    )
        external
        onlyOwner(account)
    { }
```

- An Account Owner sends a call to the interaction controller via the `execute` function which checks :
    - `target` has a `controller` address associated with it, reverting if it false
    - `bytes calldata data` data Encoded function signature and parameters of the function to transact with in the target contract, are permissible
    - If all the checks pass the `exec` is called on the Account and an interaction is performed

## Liquidations

Liquidations will occur when the `healthFactor` of an Account falls below an acceptable level. This will signal to *maintainers* that the Account is at risk of default and should be liquidated. The liquidation process is handled by 3rd parties. Due to the complexity of Accounts’ composition, i.e (Accounts can have multiple collateral types and loans from multiple pools) Liquidations will be akin to an OTC swap, whereby the *maintainer*  pays the loan(s) on the Account's behalf, and receives Margin Account's portfolio at a discount.

```solidity
function _liquidate(address _account) internal { }
```

- Liquidation function requires the caller `repay` all the debt outstanding
- Once the outstanding debt is paid on behalf of the `_account` the `sweepTo` function sends all the current assets in the `_account` to the caller.
