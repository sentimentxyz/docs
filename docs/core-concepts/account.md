---
sidebar_position: 2
---

# Account

Sentiment employs the method of hypothecation, essentially allowing borrowers to borrow capital >5x the value of their collateral in a way that mitigates the risk of default for lenders. Margin Accounts are dynamic and distributed asset reserves that hold a borrower’s margin deposit and loaned assets that are transferred when a debt position is created. Each Margin Account represents a single debt position.
The core of how Sentiment's Margin Accounts operate are on the following premise:

## Delegated Ownership

The borrower never has custody of the loaned assets, i.e: loaned assets cannot be transferred out of the margin vault. This delegated ownership model allows the borrower to have control over how the funds are deployed without having custody, thus passing the first right of ownership over these assets to the protocol.

## Controlled Interaction

The protocol restricts the actions a borrower can perform with the loaned assets to mitigate credit risk and maintain solvency. The allow-list for these set of actions is configurable and can be modified through governance mechanisms over time. The protocol can control what contracts (and which tokens) the borrowed assets are allowed to interact with.

## Account Ownership

As mentioned before the Margin Account will hold both the loaned assets and the borrowers margin collateral. During the term of a loan, all assets within the Margin Account are controlled by the protocol and at no point will the borrower be able to actually obtain custody of credited funds. The only situation where a borrower would withdraw any assets from the vault is during termination or reduction of the debt position.

## Control Flow

Typical Control flow of a Margin Account would persist as follows:

1. Borrower pledges margin (collateral) to borrow assets.
2. Lending contract initiates credit transaction, sending assets to the Margin Account.
3. Borrower deploys the loaned assets in a controlled manner with the help of the Interaction Controller.
4. The Risk Engine ensures health of the borrow account during the term of the debt.

## Margin Account Functions

All Margin Accounts have the same actionable events such as (but not limited to) purchasing assets, providing liquidity etc. The Sentiment Core team aims to provide an augmentative interaction suite that scales as more opportunities become available in DeFi. 
Once a user opens a margined position, they will be able to delegate instructions to the Interaction Controller. These actions will be verified against the allowed list of possible interactions, if permissible, the action will be deployed on the loaned assets. This implementation gives the borrower the ability to determine the use of the proceeds, benefits from the increase in value or profit of the funds while also protecting the lender from any default risk.