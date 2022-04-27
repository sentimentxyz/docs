---
sidebar_position: 1
---

# Oracle Facade

The oracle facade acts as the common entry point for calls to any oracle
and allows easy configuration and maintainability of multiple different types
of oracles.

## Contract Spec

### State Variables
- `mapping(address => IOracle) public oracle` maps a token address to its respective oracle

### Functions
```js
function getPrice(address token) external view returns (uint) { }
```
- Assuming the response has 18 decimals, returns the price of a token

**Admin Functions**
``` js
function setOracle(address token, IOracle _oracle) external adminOnly { }
```

- allows the admin to set the address which will produce oracle prices for token
  addresses
