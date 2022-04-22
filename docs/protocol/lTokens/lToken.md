---
sidebar_position: 1
---

# LToken

The LToken forms the central interface for Sentiment's lender markets.
We deploy a separate Ltoken contracts for each market (underlying asset). Each 
contract allows users to deposit any (acceptable) asset to Sentiment in return 
for interest-bearing LTokens. Underlying assets are stored in the in the 
respective LToken contracts to isolate risk.