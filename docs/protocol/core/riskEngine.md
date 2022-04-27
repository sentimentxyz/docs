---
sidebar_position: 4
---

# Risk Engine

## Overview

The Risk Engine is the contract that computes and verifies the credit risk of
each Account at all times. It is also called when any state mutating functions
are performed on an account. It is a utility contract used by the protocol to analyze the health factor of a given account.

## Contract Spec

### State Variables

- `IRegistry public immutable registry` registry interface. The Risk Engine references the registry contract to initialize appropriate oracles
- `IOracle public oracle` Oracle facade
- `IAccountManager public accountManager` Interface for accountManager
- `uint public constant balanceToBorrowThreshold = 12 * 1e17` default threshold at which accounts are deemed “healthy” (1.2)

    >For an example an account that has collateral valued at $100, total debt is $400, and current account value is $500 ($100 + $400), the Health factor would be 500/400 or 1.25, which is considered healthy


### Functions (convert equations to KaTeX)
``` solidity
function isWithdrawAllowed( address account, address token, uint amt )
    external
    view
    returns (bool)
{ }
```
- Utility function to determine if an account can withdraw a specified amount of
a token
            isWithdrawAllowed = (currentAccountBalance - withdrawValue) /
                currentAccountBorrows > balanceToBorrowThreshold
returns isWithdrawAllowed Returns whether a withdraw is allowed or not


``` solidity
function isAccountHealthy(address account) external view returns (bool) { }
```
- Utility function to determine if an account is healthy or not
            isAccountHealthy = currentAccountBalance / currentAccountBorrows >
                balanceToBorrowThreshold
  return isAccountHealthy Returns whether an account is healthy or not

```solidity
function getBalance(address account) external view returns (uint) { }
```
- Returns total account Balance

```solidity
function getBorrows(address account) external view returns (uint) { }
```
- Returns total account Borrows
