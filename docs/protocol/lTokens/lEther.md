---
sidebar_position: 2
---

# LEther

LEther is a special LToken that allows deposits and withdrawals in ETH, in
addition to exposing all other functionality of the base LToken contract. It is
ERC4626-compliant and WETH9 is the underlying asset for LEther.

> Note: Lending Token contract for Ether with WETH as underlying asset
>

## Functions
``` sol
function depositEth() external payable { }
```
- Wraps Eth sent by the user and deposits into the LP transfers shares to the user denoting the amount of Eth deposited
``` sol
function redeemEth(uint shares) external { }
```
- Unwraps Eth and transfers it to the caller amount of Eth transferred will be the total underlying assets that are represented by the shares
