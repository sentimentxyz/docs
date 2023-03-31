---
sidebar_position: 1
---

# LToken

## Overview

The LToken forms the central interface for Sentiment's lending markets.
We deploy a separate Ltoken contracts for each market (underlying asset). Each
contract allows users to deposit any (acceptable) asset to Sentiment in return
for interest-bearing LTokens. Underlying assets are stored in the in the
respective LToken contracts to isolate risk. Each LToken is implemented using the [ERC4626](https://eips.ethereum.org/EIPS/eip-4626) standard.

## Contract Spec

### State Variables

- `IRegistry public registry` storage of registry
- `IRateModel public rateModel` storage of [Interest Rate rateModel](../core/rateModel.md)
- `address public accountManager` account Manager
- `uint public reserves` total amount of deposited asset reserves
- `uint public borrows` total amount of borrows
- `uint public reserveFactor` the reserve factor is the spread between the lending rate that lenders receive and the borrowing rate that borrowers pay. This spread is kept within the Ltoken reserves to reduce insolvency and can be used to compensate the protocol or as a liquidity backstop.
- `uint public lastUpdated` Block number of when the state of the LToken was last updated
- `mapping (address => uint) public borrowsOf` Mapping of an account to the amount of borrows it has

### Functions

**Account Actions**
These actions are specified by accounts but conducted by the Account Manager
contract

```sol
function lendTo(address account, uint amt)
    external
    whenNotPaused
    accountManagerOnly
    returns (bool isFirstBorrow)
    { }
```

- Lends a specified amount of underlying asset to an account, `isFirstBorrow` returns if the account is borrowing the asset for the first time. Everytime function is called the state of the Ltoken pool gets updated

```sol
function collectFrom(address account, uint amt)
  external
  accountManagerOnly
  returns (bool)
{ }
```

- Collects a specified amount of underlying asset from an account. `isNotInDebt` returns if the account has pending borrows or not

```sol
   function getBorrowBalance(address account) external view returns (uint) { }
```

- fetches the debt balance of a given account, returns the amount of the underlying tokens borrowed

**Public Functions**

```sol
    function totalAssets() public view override returns (uint) { }
```

- Returns total amount of underlying assets
  totalAssets = underlying balance + totalBorrows - totalReservers + delta
  delta = totalBorrows _ RateFactor _ (1e18 - reserveFactor)

```sol
function updateState() public { }
```

- updates the state of the Ltoken contract, callable by anyone, to ensure data freshness

**Helper Functions**

```sol
function _getRateFactor() internal view returns (uint) { }
```

- Rate Factor = Block Delta \* Interest Rate Per Block
  Block Delta = Number of blocks since last update
  **Admin Functions**

```sol
function redeemReserves(address to, uint amt) external adminOnly { }
```

- Transfers reserves from the LP to the specified address, this will be used sparsely, when assets accrued via the reserve factor are necessary for utilization. This could be used for a liquidity backstop or fee disbursement.
