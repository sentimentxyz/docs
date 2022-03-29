---
sidebar_position: 5
---
# Controller

The interaction controller acts as the decision-maker and verifies every action
being performed with assets loaned to the Margin Accounts. Whenever the 
borrower delegates an instruction to the Margin Account, a call is made to 
associated Interaction Controller to check if the instruction is allowed. 
The result of this check determines if an instruction is executed or not.
The interaction controller can thus restrict certain actions from being 
performed and protect lenders' interests by mitigating the borrowers' exposure 
to heavy systematic or volatility risks. In the long term, all interaction 
controllers will be configurable via the governance.

The type of interactions permitted by the Interaction Controllers form a key indicator of the entire protocol.