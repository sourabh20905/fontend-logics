"use client";

import { useRef, useState } from "react";

// core concept of useRef is to store the reference of the element , like pehle apn js me dom ke element ko
// change krne ke liye use krte the dom propertly getElement by id and then change krte the which
// which leads the rerender of whole dom
// useState hook responsible hota h for rerendering particular dom element

// useRef return object having only one property current

const Hook = () => {
  const [myNum, setMyNum] = useState<unknown>(0); // ye responsivle h pure dom ui ko rerender ke liye
  //if above state change dono input ki value change hogi

  // to apn reference store krte h using useRef

  const inputOneRef = useRef<HTMLInputElement>(null);
  const inputTwoRef = useRef<HTMLInputElement>(null);

  const handleChangeInputOneStyle = () => {
    if (inputOneRef.current) {
      inputOneRef.current.style.backgroundColor = "red";
    }
  };
  return (
    <div>
      <input
        ref={inputOneRef}
        type="number"
        value={myNum as number}
        onChange={(e) => setMyNum(Number(e.target.value))}
        className="w-[200px]"
      />
      <input
        ref={inputTwoRef}
        type="text"
        onChange={(e) => setMyNum(e.target.value)}
        value={myNum as string}
      />
      <button onClick={handleChangeInputOneStyle}>
        Change input one Button Style
      </button>
    </div>
  );
};

export default Hook;
