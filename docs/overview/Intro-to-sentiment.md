---
title: Intro To Sentiment
sidebar_position: 1
description: What Sentiment is and Why it Exists
slug: /
---

Sentiment is a non-custodial on-chain liquidity protocol that allows users to borrow and
lend digital assets in a permissionless manner. Borrowers can access capital up to 5x
the value of their initial collateral, which they can deploy in specific assets and
investment opportunities provided by integrations.

- [Borrowers](../using-sentiment/borrowing.md) borrow against deposited collateral
- [Lenders](../using-sentiment/lend.md) earn yield on otherwise idle assets
- Maintainers, external users, and/or bots can query the [Risk Engine](../core-concepts/risk-engine.md) to monitor [Account](../using-sentiment/account.md) health
  and maintain protocol solvency

Sentiment’s novel [Account](../using-sentiment/account.md) primitive allows for undercollateralized lending,
increasing capital efficiency for borrowers.
Borrowers using Sentiment mint a unique contract that holds custody of both deposited and
borrowed assets. After depositing initial collateral, borrowers can swap, lend, and provide
liquidity to various liquidity pools across DeFi, all within the Sentiment interface.

An example of how [Borrowers](../using-sentiment/borrowing.md) can use Sentiment: A user can come to Sentiment with $10,000 USDC as collateral, and they are able to borrow $50,000 additional
USDC and purchase wstETH. They can then proceed to provide the $50,000
Worth of wstETH and their initial $10,000 USDC ($60,000 total) as liquidity to
Balancer, to earn fees and yield in the form of BAL token.

## Why Sentiment

Current DeFi borrowing markets are limited and inefficient because they require users to
overcollateralize their borrowing. For example: On Compound, with $100 worth of WBTC a user can only borrow up to $85 worth of USDC.

Overcollateralized lending exists to mitigate the risk of a protocol accumulating bad debt–when
the value of a borrower’s collateral becomes less than the value of borrowed assets. When this
happens, account liquidators are unable to sell the collateral, buy back the borrowed asset, and
pay back lenders without incurring a loss.

While the disintermediary nature of blockchain and DeFi markets creates a transparent financial
system, it introduces new challenges to overcome. Specific to borrowing markets as outlined
above, on-chain lenders are introduced to widespread counterparty risk, which makes it difficult
to build robust undercollateralized credit markets. This creates capital inefficiency that inhibits
many participants in the space, such as sophisticated money managers, structured products
that depend on (or could benefit from) leverage, and degen traders looking to optimize long-tail
opportunities

## Intro to Account Contract

Sentiment overcomes this challenge with the aforementioned [Account](../using-sentiment/account.md) feature, which is a proxy
contract created by the user that holds custody of assets. Borrowers can borrow up to five times
their collateral, and are liquidated once their collateral falls below a certain health limit set by
Sentiment.

This design allows borrowers to control all actions of their own Account while Sentiment is able
to monitor the health of the account. Account [Controllers](../core-concepts/controller.md) and Maintainers monitor every account
interaction delegated by the borrower before they are executed, and can liquidate user accounts
before the value of their account assets goes below the value of their collateral.
