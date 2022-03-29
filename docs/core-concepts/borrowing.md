---
sidebar_position: 3
---

# Borrowing

In order for a user to utilize a Margin Account they must deposit acceptable collateral(s). Sentiment allows cross-margining. Cross-Margining allows user to deposit multiple collateral types in order to mitigate personal risk of liquidation and for increased capital efficiency. To remain competitive Sentiment will aim to allow exotic or long-tailed collateral types such as yTokens aTokens or even ITM Call/Put option tokens.

## Opening a position

A user who wishes to open a position can do so by supplying an accepted collateral-type and requesting a loan of available asset types. The amount that the user will owe for the loaned funds will be a product of their loan and the interest rate for the period that they have borrowed for. 

## Health Factor

To ensure the safety of the protocol and protecting lender's interest, each Margin Account has a Health factor which is computed by totalCollateralInETH , liquidationThreshold and totalDebtInETH. From this computation we will get the Health Factor, and we measure the health Factor after every interaction taken by the borrower to ensure that the position is not at risk of being in default.

## Risk Factor

While the health factor calculates the solvency of the position, the risk factor represents the fraction of the collateral that must be sold at a discounted rate to cover all losses incurred by the borrower and close the position. Intuitively this is can be thought of the least amount of collateral needed to ensure the protocol can safely return the loaned assets and interest incurred during a position back to Lending. For a technical example of this please see the Whitepaper.