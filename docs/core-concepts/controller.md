---
sidebar_position: 4
---
# Controller

Mitigating counterparty risk at the protocol layer is one of the core problems
that Sentiment aims to tackle. At the implementation layer, this translates to 
the protocol being aware of how the borrowed funds are deployed to decide if 
the account value is within the acceptable risk thresholds. This functionality
is implemented in the form of a Controller.

The controller acts as the decision-maker and verifies all interactions that 
borrowers delegate to their accounts. The controller analyzes the transaction
calldata for the instruction to determine if it is safe to execute. In this way,
the controller can be used to restrict certain actions from being performed to 
protect lenders' interests and enhance protocol solvency by reducing borrowers'
exposure to heavy systematic or volatility risks. In the long term, all 
controller parameters will be configurable via the governance.

Since the controller works with the transaction calldata, it has granular 
insight into the potential effect on the transaction. The controller is aware 
of not only the contract address that the borrower is trying interact with, but
also the exact function that is being called and the parameters being passed to
the same. This also allows the controller to compute the tokens that enter and 
exit the system after every transaction.
