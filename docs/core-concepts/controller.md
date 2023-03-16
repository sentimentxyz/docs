---
title: Controller
sidebar_position: 1
description: Controller Contracts Help Make Undercollateralized Borrowing Possible
---

Mitigating counterparty risk at the protocol layer is one of the core problems that Sentiment aims
to tackle. At the implementation layer, this translates to the protocol being aware of how
borrowed funds are deployed. By being aware of how Account assets are being used,
Sentiment will be able to decide if the account value is within the acceptable risk thresholds.
This functionality is implemented in the form of a Controller.

The Controller acts as the decision-maker and verifies all interactions that borrowers delegate to
their accounts. The Controller analyzes the transaction calldata to determine if it is safe to
execute. For example, a Borrower could delegate instructions to deploy assets to a specific
liquidity pool. Before this is executed, the Controller analyzes the calldata to confirm that the
target contract address lies within current risk parameters.

In this way, the Controller can be used to restrict certain actions from being performed to protect
Lenders' interests. By reducing Borrowers' exposure to heavy systematic or volatility risks,
protocol solvency is enhanced. In the long term, all Controller parameters will be configurable
via governance.

Since the Controller works with the transaction calldata, it has granular insight into the potential
effect on the transaction. The Controller is aware of not only the contract address that the
Borrower is trying to interact with, but also the exact function that is being called and the
parameters being passed. This also allows the Controller to compute the tokens that enter and
exit the system after every transaction.

The controller facade acts as the common entry point for calls to any Controller and allows easy
configuration and maintainability of multiple controllers.

The takeaway is that Controllers enable [Accounts](https://github.com) to interact with external protocols and smart
contracts by monitoring transaction calldata, thereby improving protocol solvency and protecting
lenders.
