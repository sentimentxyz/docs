---
sidebar_position: 2
---

# Account Factory

### Overview

The account factory contract is used to deploy account contracts that are used
by borrowers to interact with the protocol. Each account contract is created as a beacon proxy.

### State Variables

`address public beacon` Address of account beacon, which is the logic implemented by each account that borrowers use to manage assets

### Functions

```solidity
function create(address accountManager)
        external
        returns (address account)
    { }
```

- This function mints (creates) a new account. This is used if the account queue is empty, meaning all previously minted accounts are currently in use. This function is only used by the [account manager](protocol/core/accountManager.md)
