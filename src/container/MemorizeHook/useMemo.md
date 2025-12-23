# React `useMemo` – Complete Explanation & Comparison with Other Hooks

## What is `useMemo`?

`useMemo` is a React Hook used for **performance optimization**.  
It **memoizes (caches) the result of a calculation** and recomputes it **only when its dependencies change**.

> In simple words:  
> **`useMemo` avoids unnecessary recalculations during re-renders.**

---

## Why do we need `useMemo`?

In React, **every render re-executes the component function**.

This means:

- Heavy calculations
- Expensive array operations (`filter`, `map`, `sort`)
- Derived values

👉 All of them run again even if inputs haven’t changed.

`useMemo` solves this by **caching the computed value**.

---

## Syntax

```js
const memoizedValue = useMemo(() => {
  return expensiveCalculation();
}, [dependencies]);
```
