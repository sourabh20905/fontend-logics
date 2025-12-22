"use client";
import { useState, createContext } from "react";
import ChildA from "./ChildA";

//create context
export const ParentContext = createContext({
  count: 0,
  setCount: (count: number) => {
    console.log(count);
  },
});

// Wrap the children with the context

// child consume that value

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <ParentContext.Provider value={{ count, setCount }}>
        <ChildA />
      </ParentContext.Provider>
    </div>
  );
};

export default Parent;
