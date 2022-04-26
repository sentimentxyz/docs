---
sidebar_position: 5
---

# Registry

### Overview

The registry contract is global storage for the Sentiment ecosystem. Storage includes

- data of addresses of all the Accounts and the Owner of these accounts.
- Active LToken addresses and Token->LToken mapping
- Address of all deployed protocol contracts

## Contract Spec

### State Variables

- `string[] public keys` holds an array of contract names as strings. All contracts names follow the convention of being capitalized, and multiple names are separated by an underscore "_". Ex (REGISTRY, RATE_MODEL)
- `address[] public accounts` list of all accounts
- `address[] public lTokens` list of all active lTokens
- `mapping(address => address) public ownerFor` a mapping of accounts to the owner, (account => owner)
- `mapping(address => address) public LTokenFor` Maps the a token address to its lToken equivalent (token => LToken)
- `mapping(string => address) public addressFor` Maps a contract's name to its address (contractName => contract)

### Custom Modifiers

- `modifier accountManagerOnly()` Only allows accountManager contract to call functions

### Functions

**Modifying Storage**

```
function setAddress(string calldata id, address _address) external adminOnly { }

```

- sets the contract address for a given `id`. It helps accounts maintain secure interactions with listed and verified addresses. This is only configurable via admin which will eventually be governed in a decentralized manner.

```
 function setLToken(address underlying, address lToken) external adminOnly { }

```

- Sets LToken address for a specified token. This helps keep storage of lTokens and underlying tokens consistent, also adds composability with external contracts that use lTokens.

```
function addAccount(address account, address owner) external accountManagerOnly { }

```

- has two main priorities, it updates the `accounts` array every time a new account is minted. It also updates the `ownerFor` mapping, which maps any newly minted accounts to the owner.

```
function updateAccount(address account, address owner) external accountManagerOnly { }

```

- primarily used when idle accounts are reassigned to new owners, or when users close their accounts. This function updates the `onwerFor` mapping to the accounts most current owner.

```
function closeAccount(address account) external accountManagerOnly { }

```

- once an account is closed, the `onwerFor` owner address is modified to reflect the owner is now `address(0)`. This design decision was made to reduce complexity and risk of malicious activity of idle accounts

**Fetching Data**

```
function getAllKeys() external view returns(string[] memory) { }

```

- Returns all contract names in registry

```
function getAllAccounts() external view returns (address[] memory) { }

```

- Returns all accounts in registry

```
function getAllLTokens() external view returns (address[] memory) { }

```

- Returns all active LTokens in registry

```
function accountsOwnedBy(address user) external view returns (address[] memory userAccounts) { }

```

- Returns all accounts owned by a specific user
