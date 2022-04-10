---
sidebar_position: 3
---

# Borrowing

In order for a user to utilize an Account to borrow debt they must deposit
collateral asset(s) into it. Sentiment allows cross-margining of assets by 
default which allows the user to deposit multiple collateral types in order to 
amortize price exposure across multiple assets and to provide increased 
capital efficiency. Sentiment will aim to allow composite collateral types 
such as aTokens and yTokens with the aim to introduce exotic collateral types 
such as ITM option tokens.

## Borrowing Flow

The typical borrowing flow for an Account can be outlined as follows -

1. Borrower opens an account and deposits collateral.
2. Assets are borrowed against the collateral and transferred to the account.
3. Borrower deploys the borrowed assets by delegating instructions to the 
account via the Account Manager.
4. A position can be closed in two situations -
    1. The borrower repays the borrowed assets (with interest) and closes the 
    position by withdrawing any excess assets (profits)
    2. The borrower's account is forcibly liqudiated by an external maintainer
    if it breaches the risk thresholds set by the protocol risk engine.
