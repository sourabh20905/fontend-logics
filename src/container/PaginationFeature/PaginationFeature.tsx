"use client";

import { useEffect, useState } from "react";
import style from ""

const PaginationFeature = () => {
  const [data, setData] = useState();
  const [start, end] = useState();

  console.log(data, "data");

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=194"
        );
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllProducts();
  }, []);

  console.log(data?.products?.length);

  const pageCount = Math.ceil(data?.products?.length / 10);
  console.log(pageCount);

  return (
    <div>
      <h1>Pagination of products</h1>
      <div>
        {data &&
          data?.products &&
          data?.products?.slice(0, 10).map((item: any) => {
            return <div key={item.id}>{item.title}</div>;
          })}
      </div>
      {/* pagingation */}
      <div>
        {pageCount &&
          [...Array(pageCount)?.keys()]?.map((n) => {
            return <span key={n}  className={style}>{n}</span>;
          })}
      </div>
    </div>
  );
};

export default PaginationFeature;
