"use client";
import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const dependencies = "true";

  //

  useEffect(() => {
    if (!query) return;

    console.log("Searching for:", query);
    // fetch(`/api/search?q=${query}`);
  }, [query]); // 👈 runs when `query` changes

  // use useEffect for cleanup as well - mtlb jo bhi tumne useEffect me kiya hai usko clean krna

  //basic setup

  useEffect(() => {
    // 1️⃣ Setup (do something)

    return () => {
      // 2️⃣ Cleanup (undo it)
    };
  }, [dependencies]);

  //    cleanup execution

  //     Render → Effect runs
  // State/prop changes
  // → Cleanup runs
  // → Effect runs again
  // Unmount
  // → Cleanup runs

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}
