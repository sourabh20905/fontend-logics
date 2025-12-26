"use client";
import { RootState } from "@/src/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/src/redux/slice/counter/counter";
const ReduxApp = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  console.log(dispatch, "dispatch");
  return (
    <div>
      <h1>ReduxApp Counter</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default ReduxApp;
