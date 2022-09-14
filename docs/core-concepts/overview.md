---
sidebar_position: 1
---

# Overview

Sentiment is a permissionless undercollateralised onchain credit protocol that 
allows users to lend and borrow assets with increased capital efficiency and 
deploy them across DeFi. The two key user groups interacting with the protocol 
are are Lenders and Borrowers. We outline the value proposition for both of 
these groups below.

## Sentiment for Lenders

Lenders supply liquidity to the protocol which is then lent out to borrowers as
undercollaterised debt. The value proposition for Lenders is straightforward - 
they supply assets to the protocol with the expectation to earn a yield higher 
than that in incumbent credit markets.

Lenders interact with the protocol by supplying assets and receiving 
corresponding interest-bearing LTokens in return. These LTokens act as a receipt
of deposit and can be burned at a later point in time to redeem the initial 
principal and accrued interest on the same.

## Sentiment for Borrowers

Sentiment allows borrowers to create leveraged debt positions against their 
assets that can be used to interact with other applications across the ecosystem.
The value proposition for borrowers is access to undercollateralized lines of 
credit that help leverage their collateral in a capital-efficient manner.

Borrowers interact with the protocol using an Account. Every Sentiment account 
is a proxy contract that holds the borrower's assets while allowing them 
delegated control to deploy these assets anywhere. The borrower has complete 
control on how the assets in an account are deployed subject only to 
Sentiment's risk measures that help keep the system solvent.
