---
title: Risk Engine
sidebar_position: 2
description: Risk Engine is Responsible for Ensuring Protocol and Account Solvency
---

The Risk Engine sits at the heart of the protocol and is responsible for maintaining solvency
across two fronts:

1. At the account layer where it ensures that every account is solvent
2. At the protocol layer where it ensures that the protocol as whole is solvent with respect
   to the lenders.

Whenever a borrower tries to withdraw assets from their account or interact with an external
contract, the risk engine validates the collateralization ratio of their account after the transaction
is completed. This prevents malicious borrowers from extracting borrowed funds outside the
system. The same checks also ensure that the account is sufficiently collateralised at the end of
every operation the borrower undertakes.

## Liquidations

Sentiment liquidations are open-market in nature and can be performed by any external actor. In
Sentiment, liquidators are called “Maintainers”, and they are monetarily incentivised to liquidate
at-risk accounts and maintain protocol solvency. The liquidation process involves the Maintainer
repaying debt owed by an at-risk account and subsequently receiving all assets in the account
at a discount.

The protocol has granular control over parameters surrounding liquidation incentives. Risk
measures that can be tweaked to ensure that the protocol stays resiliant to violent market
movements.
