---
sidebar_position: 1
---

# Overview

The Sentiment protocol is a credit protocol that provides generalized margin 
borrowing across DeFi. At its core it allows borrowers to have access to 
increased borrowing capacity and enables borrowers to deploy borrowed assets 
in dynamic ways in a plethora of DeFi protocols. Simply put Sentiment 
facilitates cross-margin that can be deployed across DeFi. 

The two main actors in Sentiment are Lenders and Borrowers, value proposition 
of both can be understood below.

## Sentiment for Lenders

For simplicity and ease of use, Sentiment's Ltoken contracts maintain a 
simple mechanism: Lenders simply deposit any asset they wish to gain yield on,
and receive an interest bearing token corresponding with their underlying asset.

## Sentiment for Borrowers

### Accounts
Margin Accounts allow borrowers to margin their collateral and leverage greater 
than 5x, and deploy borrowed assets across DeFi. Margin Accounts are individual 
smart contracts that resemble modified ds-proxys. In order for a borrower to 
interact with the rest of the protocol they must deposit collateral into a 
Margin Account. The normal borrowing flow will resemble the following:
1. Alice, supplies 10 ETH as collateral (effectively opening a Margin Account).
2. Alice selects the type of Asset(s) they would like to borrow and the amount.
    * To borrow, Alice's Margin Account will take a loan from the Lending Pool 
3. Once Alice has the asset(s) in her Margin Account, Alice may delegate the interactions she would like to do with supported DeFi protocols. Let us assume Alice wants to 10x Long ETH.
4. Alice may now interact with any whitelisted AMM, and use the asset(s) she borrowed to exchange and purchase more ETH. 
5. Once Alice is satisfied with her position, she re-purchases the assets she borrowed, and repays her loan to the Lending Pool + any interest incurred. If the trade went in Alice's favor she is able to withdraw her collateral and profits.

### Interaction Controllers

To allow for dynamic capital allocation, Margin Accounts are equipped with the ability to delegate calls to Interaction Controllers. Interaction Controllers are smart-contracts that allow Margin Accounts to compute complex logic, such as actions that borrowers want to execute with loaned assets including; swapping on DEX, providing liquidity on DEX, earning yield on primitives such as Yearn, Deposit into Money-Markets and much more.

### Margin Manager

The Margin Manager contract is 1/2 of the risk engine of the protocol. It ensures all Margin Accounts are adequately collateralized. It permissions liquidations for Margin Accounts that are at risk of being in default, and stores the risk factor and health factor of each Margin Account.
