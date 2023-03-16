---
title: FAQ
sidebar_position: 3
description: Common Questions with Answers
---

<details>
  <summary>Is the Sentiment Protocol Audited ?</summary>
    <div>Yes we have Audits from Arbitrary Execution and Sherlock</div>
</details>

<details>
  <summary>How does sentiment allow borrowers to get access to leverage?</summary>
    <div>Borrowers are able to open “Accounts” that allow them to post collateral and get access to
capital via Sentiment’s lending pools. Borrowers have increased borrowing capacity and can
borrow 5x the value of their collateral.</div>
</details>

<details>
  <summary>What is an “Account”?</summary>
    <div>An “Account” is a proxy smart contract in which a borrower can maintain their collateral and
debt. Account’s enable borrowers to get access to greater leverage, which they can deploy in
any asset or protocol that we have integrated.</div>
</details>

<details>
  <summary>How do Integrations work?</summary>
    <div>Integrations are how Sentiment “Accounts” are able to interact with other protocols. They are
governed by “Controllers”, which are protocol adapters. More can be learned [here](../core-concepts/controller.md).</div>
</details>

<details>
  <summary>How does Sentiment deal with risk?</summary>
    <div>The Sentiment architecture is built to increase borrowers' capital efficiency while mitigating
counterparty and solvency risk for lenders. To minimize risk for lenders, the Risk Engine and
Account Manager work together to ensure all accounts have sufficient liquidity to meet their debt
obligations. The Sentiment team also has a process for onboarding protocols and collateral
types to mitigate exogenous risks.</div>
</details>

<details>
  <summary>How do liquidations work?</summary>
    <div>All liquidations are performed by an external actor. In such a scenario, the debt of an account
will be paid by a liquidator on behalf of the account, in return the liquidator receives the assets in
the account with a liquidation incentive for their services (currently it will be 15%, i.e if the
margin account owes 100 DAI, and has 115 DAI worth of Assets, the liquidator will pay 100 DAI
to Sentiment Lending pool and receive the account assets worth 105 DAI)</div>
</details>

<details>
  <summary>What will the process look like for onboarding new collateral types?</summary>
    <div>The team will be responsible for onboarding collateral. We view collateral in 2 lenses, on chain
liquidity and holder distribution. We plan to make protocol more permissionless, so there may be
unique ways to allow more collateral types in the future.</div>
</details>
