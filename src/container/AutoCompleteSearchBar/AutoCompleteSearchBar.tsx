"use client";

import { useEffect, useState } from "react";
import style from "./AutoCompleteSearchBar.module.css";

const AutoCompleteSearchBar = () => {
  const [input, setInput] = useState("");
  const fetchProducts = async (input: string) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${input}`
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchProducts(input), 300);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className={style.root}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
      />
    </div>
  );
};

export default AutoCompleteSearchBar;
