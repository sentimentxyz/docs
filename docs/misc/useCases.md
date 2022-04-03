---
sidebar_position: 1
---

# Use Cases

Sentiment main proposition is to allow efficient capital allocation throughout
DeFi by allowing users to take advantage of opportunities with access to larger
capital than previously possible. While we are agnostic to the use of
Accounts, we have some potential use-case scenarios that may be feasible for
the average user.

## Sentiment for Strategists

### Vanilla Short-Cake with a Cherry on Top

Leverage short positions can currently be done in 2 ways: Short Perps on DyDx,
Perp etc. Or, Borrow an Asset from a money market (Aave, Compound), sell the
asset for a stablecoin, and repeat this cycle. Main caveat for both scenarios
is the proceeds of the short are unable to be utilized further, Sentiment can
provide a layer of utility to short positions. Consider the following:

* Bill has divested from all crypto assets and thinks the market will see a
considerable downturn in the near future. Lets assume Ethereum is $4000
currently
* Bill uses 100,000 $USDC as collateral and borrows 145 Ethereum ($500k)
* He proceeds to sell the 125 Ethereum for 500,000 $USDC. Normally short
positions stop here.
* Bill is savvy and knows Stablecoin trading volume increases with volatility.
Bill supplies 250,000 $USDC to Curve to earn $CRV and trading fees
* Bill also decides to use 100,000 $USDC and $Dai to earn trading fees on
Uniswap v3
* Bill currently has 150,000 $USDC left over, which he supplies to DyDx to
earn yield which effectively offsets his borrowing costs on Sentiment.
* This trade goes in Bill's favor; Ethereum decreases in value by 50%(no
$2000/ETH), Bill earns 2% from Curve ($5000), 1.5% from Uni v3($1500), and 3%
from lending to DyDx($4500)
* Bill is able to purchase back the 125 ETH for , payback his debt + interest
and pocket the >250% (250,000 $USDC + yield)
* In all The yield Bill gained off-set his borrowing costs. This is a new
paradigm in DeFi capital efficiency that can't be explored with existing primitives.

### JIT Liquidity without Flashloans

Decentralized Exchanges are the crux of DeFi. AMM's are arguably the most
successful invariant in production on blockchains to date. They have
facilitated the creation and exchange of billions worth of value in tokens.
They have shortcomings compared to CEX, namely liquidity and execution price
for large trades. A novel approach to this solution using Sentiment
Accounts can be extrapolated below:

* Dan has a successful year trading, and would like to realize some gains.
Dan holds 2000 ETH and wants to sell 1000 ETH ($4000/ETH) on Uniswap.
* Dan realizes that in order to do that he would incur >8% slippage and also
decrease his execution price in terms of $USDC.
* Dan can mitigate this by providing more liquidity, to tighten the spread.
* Dan puts 200 ETH ($800,000) as collateral and borrows 1000 ETH($4,000,000)
and 4,000,000 $USDC.
* Dan Provides liquidity on uniswap v3 at the ranges that are beneficial for
him to execute the trade
* Dan Sells the 1000 ETH, minimizing slippage to <3% and getting a 2% better
execution price
* Dan's Account also reaps the benefits of making a portion of the fees
on this trade
* Dan has effectively increased his trades efficiency by ~5% (less fees)

Just in time liquidity could be a new primitive that Market Maker protocols
such as Charm use to increase the efficiency of their operations and make fees
from larger traders, etc.

## Sentiment for Builders

### Generalized Leverage

With Sentiment any protocol has the ability to over leveraged exposure on any
of their assets to their users by using a Account. Uniswap can allow
for whitelisted pools to be traded with Margin. For example consider an AMM
like Uniswap:

* Consider Uniswap allowing ETH/USDC pair to be traded up to 8x leverage using
Sentiment Accounts.
* A user can supply USDC, ETH or even the ETH/USDC LP as collateral and long
or short ETH with leverage.
* Users are then able to use the tokens that have leveraged exposure and gain
yield with a yield aggregator or even provide leveraged liquidity
* Uniswap will be able to have increased volume.
* LP's will make more on fees for swaps and user's are able to increase their
exposure, or mitigate risks natively from Uniswap.

### Protocol-specific Leverage

Sentiment unlocks potential for existing protocols by offering a unique
proposition for users. Sentiment increases the users' capacity to deploy
assets into the protocol, consider the following:

* Ribbon currently offers structured yield products, that get yield from
selling volatility (options). Users deposit USDC or ETH and Ribbon sells
covered puts or calls (respectively) and produces yield via premium from the
options.
* There is risk associated with Ribbon, namely unlimited downside risk on USDC
since ETH's price can theoretically increase infinitely.
* Ribbon can offer a user the ability to decrease their exposure to risk using
Sentiment's liquidity and Margin Pool.
* Ribbon can create put-spread pools on behalf of their user, and allow users
to use their rTokens as collateral and mitigate downside risk
* Using Margin Pools, Ribbon is able to sell covered Puts. Borrow from
Sentiment using rTokens as collateral and purchase puts at a lower strike
* Ribbon could increase their TVL (increasing protocol revenue) also increase
the price efficiency of option premiums
