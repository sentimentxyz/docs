---
title: Borrowing
sidebar_position: 3
description: Borrowers Utilize Available Assets to Leverage their Strategies
---

The value proposition for Sentiment borrowers is to access increased capital efficiency via
undercollateralized lines of credit. This can be used to leverage exposure to certain asset types
across the Sentiment ecosystem.

In order for a user to borrow against their Account, they must deposit collateral asset(s) into the
Account. By default, Sentiment allows cross-margining of assets which allows the user to
deposit multiple collateral types to provide increased capital efficiency. Sentiment will aim to
allow composite collateral types such as aTokens (Aave interest bearing tokens) and yTokens
(Yearn interest bearing tokens) and eventually introduce exotic collateral types such as ITM
option tokens.

![](<../images/joeygcamp%20Borrowing%20Flow-01%20(1)%20(1).jpg>)

## Typical Borrowing Flow

1. Borrower opens an account and deposits collateral.
2. Assets are borrowed against the collateral and transferred to the account.
3. Borrower deploys the borrowed assets to various contracts in DeFi

When a borrower wants to close their position, they can either repay all borrowed assets with
the accumulated interest. Excess assets (profits) can be withdrawn to the user’s EOA. In the
case of liquidation, an external Maintainer will pay back the debt and buy the collateral assets at
a discount. See the Sentiment [Whitepaper](https://docs.sentiment.xyz/assets/files/whitepaper-6d79d366383af419382831913a0470a) for further detail on when a position breaches the risk
thresholds set by the protocol Risk Engine.

## Fees

When borrowing assets in the Account, users will have to pay a variable interest rate based on
supply and demand for that given token. The current interest rate (APY) for all borrowable
assets can be seen under the `Debt` section of the Account tab.

In addition to variable interest rates, borrowers are subject to an origination fee. The origination fee will be set at 0.1% (10 bps) initially and will be subject to change. Origination fees are a
revenue mechanism for the Sentiment protocol that result in better experience for borrowers
and lenders due to following reasons:

1. Revenue generated from the origination fees will be used to further support protocol
   development.
2. Fees can be used to subsidize interest rates earned by lenders and help reduce rates
   paid by borrowers.
3. A portion of fees accrued will go toward an insurance fund that will be the liquidity
   backstop and reduce the risk of bad debt for lenders.
