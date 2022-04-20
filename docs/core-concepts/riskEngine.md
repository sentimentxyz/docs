---
sidebar_position: 5
---

# Risk Engine

The risk engine sits at the heart of the protocol and is responsible for
maintaining solvency across two fronts - at the isolated account layer where it 
ensures that every account is solvent, and at the protocol layer where it 
ensures that the protocol as whole is solvent with respect to the lenders.

Whenever a borrower tries to withdraw assets from their account to their EOA, 
or interact with an external contract using Sentiment the risk engine validates
the collaterization ratio of their account after the transaction is completed.
This prevents malicious borrowers from extracting borrowed funds outside the
system. The same checks also ensure that the account is sufficiently 
collateralised at the end of every operation the borrower undertakes.

## Liquidations

Sentiment liquidations are open-market in nature and can be performed by any 
external actor ("maintainer") who is incentivised to liquidate at-risk accounts 
and maintain protocol solvency. The liquidation process involves the maintainer
repaying debt owed by an at-risk account and receiving all assets in the account
at a discount.

The protocol has granular control over parameters surrounding liquidiation 
incentives and risk measures that can be tweaked to ensure that it is 
resiliant to violent market movements.