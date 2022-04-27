---
sidebar_position: 1
---

# Account

Contract that acts as a dynamic and distributed asset reserve
which holds a user’s collateral and loaned assets.

## Overview

The `Account.sol` contract is deployed by the borrower and owned by the Protocol. Accounts hold the assets (collateral) of a borrower and data about their debt to the protocol. The borrower has delegated ownership of the account, and can only interact with it via the [Account Manager](protocol/core/accountManager.md). All interactions,
while delegated, are actually performed directly through the account contract.

Each account is created by a common `Account Factory` contract and is an instance
of a Beacon Proxy that points to the logic implementation.

## Contract Spec

Accounts are responsible for the hypothecation of assets on chain. Essentially
Accounts hold an amalgamation of all the users positions, including their
collateral.

### State Variables

- `activationBlock` lock number for when the account is activated. Note: This is important since accounts are reusable. Each time a contract is initialized to a
new borrower, it will be timestamped with the corresponding block.
- `accountManager` current implementation of the [account manager](protocol/core/accountManager.md)
- `assets` list of ERC-20 assets (Collaterals + Borrows) present in the account
- `borrows` list of borrowed ERC-20 assets present in the account

### Modifiers

- `accountManagerOnly()` reverts on any function when it is called by any address that is not the `accountManager`

### Functions

### Initialization

```sol
  function init(address _accountManager) external { }

```

- Initializes the account by setting the address of the account
manager.
- Can only be called as long as the address of the accountManager is
0x0.

```sol
    function activate() external accountManagerOnly { }

```

- Activates an account by setting the activationBlock to the
current block number

### View functions

- `function getAssets()` returns `tokens` in asset array
- `function getBorrows()` returns tokens that have been borrowed within the
accounts

### Utility Functions

```sol
function exec(address target, uint amt, bytes calldata data)
    external
    payable
    accountManagerOnly
    returns (bool, bytes memory)
{  }

```

- Generalized utility function to transact with a given contract
target Address of contract to transact with. This gives modularity to
each Account within the Sentiment ecosystem. This function allows arbitrary execution of functions that allow users to interact with other protocols such as AMMs and structured products in a modular way. This function is delegated through the [account manager](protocol/core/accountManager.md) and referenced with the [controllers](protocol/controllers/controller.md) to ensure functions are permissible.

```sol
 function sweepTo(address toAddress) external accountManagerOnly { }

```

- Utility function to transfer all assets to a specified account
and delete all assets. This will *normally* be used during liquidations, but
provides flexibility to be used for global settlement of Accounts

### Asset Management

```sol
function addAsset(address token) external accountManagerOnly { }

```

- When an external transaction such as a deposit or swap interaction occurs, that includes new assets (`token`) entering the `account` this function is called, appending the new asset to the `asset` array

```sol
function addBorrow(address token) external accountManagerOnly { }

```

- Similar to the `addAsset()` function, add borrows appends a `token` to the `borrows` array. The main caveat is, these tokens are considered debt tokens, and are accounted against the value of the overall Account

```sol
function removeAsset(address token) external accountManagerOnly { }

```

- The inverse of `addAsset()` this function will be called when an asset is removed from the account.

```sol
function removeBorrow(address token) external accountManagerOnly { }

```

- The inverse of `addBorrow()` this function removes a `token` from the array. Typically this will be when debt is paid down or paid back in full. Alternatively this occurs in `sweepTo()` as well when an account is liquidated and debt is repaid
