---
sidebar_position: 4
---

# Lending

Depositors that wish to lend assets with Sentiment will interact directly with 
Ltoken contracts. When a borrower triggers a borrow operation, the 
AccountManager interacts with the respective Ltoken contract which stores the 
exchange rate (principle + interest of underlying asset) and balances of 
address that have deposited. To mitigate systematic risk all deposited assets 
are stored separately in their respective LToken contract. Accounts will 
borrow directly from the Ltoken contracts as well.