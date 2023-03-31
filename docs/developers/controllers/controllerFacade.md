---
title: Controller Facade
sidebar_position: 1
description: The common entry point for calls to any Controller
---

## Overview

The controller facade acts as the common entry point for calls to any controller
and allows easy configuration and maintainability of multiple controllers. Controllers enable [accounts](../core/account.md) to interact with external protocols and smart contracts.

## Contract Spec

### State Variables

- `mapping(address => bool) public isTokenAllowed` mapping of token address to boolean, which determines whether a token is allowed to be transacted with by accounts
- `mapping(address => IController) public controllerFor` maps external smart contract addresses to controller interfaces. Each external smart contract has a corresponding controller that sits between accounts and the external protocol. This mapping manages data of each controller and their external contract.

### Functions

```js
function canCall(
    address target,
    bool useEth,
    bytes calldata data
) external view returns (bool, address[] memory, address[] memory) { }
```

- This function is responsible for determining 2 factors:
  1. Is the account interacting with a controller that is connected to an external
     contract.
  2. Is the function signature and data being passed through to the external contract via the controller permissible
     returns the boolean along with array of addresses, one for contracts and one for tokens

```js
    function canCallBatch(
        address[] calldata target,
        bool[] calldata useEth,
        bytes[] calldata data
    ) external view returns (bool, address[] memory, address[] memory) { }
```

- has similar functionality to `canCall` but can batch many calls within one. This enhances UX from an account user perspective if they wish to perform a strategy or create a position that requires many different contract interactions.
