"use client";

import { useReducer } from "react";

const reducer = (state: number, action: string) => {
  console.log(state, action);
  if (action === "increment") {
    return state + 1;
  } else if (action === "decrement") {
    return state - 1;
  }
  return state + 1;
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Reducer</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <p>{state}</p>
    </div>
  );
};

export default Reducer;
