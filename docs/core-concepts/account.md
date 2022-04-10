---
sidebar_position: 2
---

# Account

Sentiment uses the Account primitive to implement onchain hypothecation of 
assets, essentially allowing borrowers to create leveraged debt positions 
against their collateral while mitigating counterparty for the lenders. 
Accounts are dynamic and distributed asset reserves that hold a borrower’s 
collateral and loaned assets. Each Account can be viewed as a composite
cross-margin debt position. This section expands on the key characteristics of
an Account.

## Delegated Ownership

Since the account is a proxy contract which is separate from the borrower's EOA,
the borrower never has custody of the loaned assets i.e. neither the deposited 
collateral nor the borrowed assets can be transferred out of the account. This 
delegated ownership model allows the borrower to have complete control over how 
the assets are deployed without actually having custody, which allows the 
protocol to maintain first right of ownership throughout the tenure of the 
position. The first right of ownership is a crucial to allow the protocol to 
keep the position risk in check at all times and facilitate liquidations, if 
needed. The only situation where a borrower would withdraw any assets from the 
vault is to withdraw profits, reduce the position or close out the entire 
position.

## Controlled Interactions

All interactions delegated by the borrower pass through the controller. The 
controller analyzes the calldata for the interaction to determine the type of 
operation and it's affect on the account value. This allows the protocol to 
restrict the actions a borrower can perform with the borrowed assets to 
mitigate credit risk and maintain solvency in the system. Sentiment aims to 
provide an interaction suite that continues to scale as more opportunities 
become available in DeFi.