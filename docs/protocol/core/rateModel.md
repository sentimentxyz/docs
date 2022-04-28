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

## Contract Spec
> Interest Rate contract has a minimal implementation. Initially the rate model will be homogenous among different lending markets, but we intend to add a more dynamic model which may evolve over different markets
>

### State Variable
**Immutables**
- These coefficient are optimized to increase rates nonlinaerly after a certain utilization of liquidity.
  - `uint immutable c1` constant coefficient, default value = 1 * 1e17
  - `uint immutable c2` constant coefficient, default value = 3 * 1e17
  - `uint immutable c3` constant coefficient, default value = 35 * 1e17
  - `uint immutable blocksPerYear` blocks in a year, default value = 2102400 * 1e18

### Functions
```sol
function getBorrowRatePerBlock(
    uint liquidity,
    uint borrows,
    uint reserves
)
    external
    view
    returns (uint)
{ }
```
- Calculates Borrow rate per block
$$
Borrow Rate Per Block =
c3 * (util * c1 + util^{32} * c1 + util^{64} * c2) / blocksPerYear
$$
where,  $util = borrows / (liquidity - reserves + borrows)$

  - `liquidity` is the total balance of the underlying asset in the pool
  - `borrows` is the balance of underlying assets borrowed from the pool
  - `reserves` is the balance of underlying assets reserved for the protocol
  -  function returns `uint` which is the borrow rate per block

  ```sol
function _utilization(
     uint liquidity,
     uint borrows,
     uint reserves
 )
     internal
     pure
     returns (uint)
 { }
  ```
  - Calculates the utilization of the lending pool, by dividing the total assets
  by outstanding debt issued (borrowed assets/ total assets)  
