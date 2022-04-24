---
sidebar_position: 1
---

# Use Cases

- Short a Major (ETH, BTC, etc.) against a stablecoin, and get yield on the 
    stablecoin via Curve
    - This strategy expounds on the premise of a carry trade in that, you are 
    effectively borrowing (going short) an asset with a negative expected rate 
    of return against a stablecoin, and using the proceeds (stablecoin) to earn 
    a higher rate of return which in this case is the yield Curve gives. This 
    strategy can be assembled in many different ways with each leg of the 
    strategy being interchangeable for any asset or yield from multiple sources.
- Short an asset against another asset i.e USDC as collateral > Borrow ETH > 
    sell ETH for DPX, essentially shorting ETH against DPX
    - This is a simple example of a spread trade, which prior to Sentiment was 
    effectively infeasible to do on chain, and quite difficult and inefficient 
    to do on a centralized exchange. This allows a user to profit from the 
    divergence of 2 assets, as both assets trend in the opposite direction the 
    user increases their return. This could also be used to partially hedge LP 
    positions on UNI v2-like AMMs, with increased capital efficiency.
- The former point is the basis of a spread trade, so we support many spread 
    trades, essentially you can trade the spread on any asset that's in the 
    lending pool, and what we allow on DEXs
- Leverage short Vol (providing liquidity to AMM is technically similar to 
    being short volatility without selling options)
    - Providing liquidity on existing AMMs is essentially expressing an adverse 
    opinion on volatility. A liquidity provider makes the most return when 
    trading volume is high, and volatility is low. Given this assumption, users 
    can be leveraged short volatility, by providing Liquidity to a pair. This 
    strategy coupled with some of the former strategies could provide a low-beta 
    source of yield in any market environment.
- if we allow LP tokens in the lending pool, we could allow for the reverse of 
    the former, Ex:
    - Let us say we allow ETH/WBTC univ2 lp tokens to be lent out. A user can 
    put USDC as collateral > Borrow the ETH/WBTC LP tokens > Unwrap the 
    liquidity (The trade assumption is that there will be volatility and the 
    spread between ETH-BTC will increase during the trade) > If the spread 
    widens, the user can from profit the difference.