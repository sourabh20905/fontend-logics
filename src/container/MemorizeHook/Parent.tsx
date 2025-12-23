"use client";

import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  //function ka reference hr rerender pe alg hota h iske karan jbhi bhi state change hogi rerender hoga to ky
  //to funcation ka reference change hone ke karan child component rerender hoga
  // reference ko freeze krdenge to reference change nahi hoga to child component rerender nahi hoga
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <Child handleIncrement={handleIncrement} />
    </div>
  );
};

export default Parent;
