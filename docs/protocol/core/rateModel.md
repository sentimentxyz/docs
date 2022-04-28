---
sidebar_position: 6
---

# Interest Rate Model

The Interest rate is calculated based on demand and supply. Since Sentiment 
differs from existing Money-Markets by providing access to greater borrow 
capacity, we have implement a non-linear interest Rate model.

The borrowing interest rate​ $I_B(t)$ and lending rate $I_L(t)$ for an asset 
are related to its utilization rate $U(t)$ and reserve factor $r$ as follows -

$$
I_B(t) = (0.1 * U(t) + 0.1 * U^{32}(t) + 0.3 * U^{64}(t)) * 3.5
$$

$$
I_L(t) = r * I_B(t)
$$