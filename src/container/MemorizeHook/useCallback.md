# React `useCallback` – Explanation & Comparison with Other Hooks

## What is `useCallback`?
`useCallback` is a React Hook used to **memoize a function** so that the **same function reference**
is preserved between renders unless its dependencies change.

> In short:  
> **`useCallback` prevents unnecessary function re-creation.**

---

## Why do we need `useCallback`?
In React:
- Every render creates **new function instances**
- Passing functions as props causes child components to re-render
- This is problematic for **memoized components**

`useCallback` solves this by keeping the function reference stable.

---

## Syntax
```js
const memoizedCallback = useCallback(() => {
  // logic
}, [dependencies]);
