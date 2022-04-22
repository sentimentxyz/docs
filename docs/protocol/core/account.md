---
sidebar_position: 1
---

# Account

The account contract is owned by a borrower and holds their assets and data 
about their debt to the protocol. The borrower has delegated ownership to the 
account, and can only interact with it via the account manager. All interactions
while delegated are actually performed directly through the account contract.

Each account is created by a common Account Factory contract and is an instance
of a Beacon Proxy that points to the logic implementation.