"use client";

import { useEffect, useState } from "react";
import style from "./PaginationFeature.module.css";

const PaginationFeature = () => {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState<number>(0);

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

  const pageCount = Math.ceil(data?.products?.length / 10);

  const start = currentPage * 10;
  const end = start + 10;

  const handlePageClick = (n: number) => {
    setCurrentPage(n);
  };

  return (
    <div>
      <h1>Pagination of products</h1>
      <div>
        {data &&
          data?.products &&
          data?.products?.slice(start, end).map((item: any) => {
            return <div key={item.id}>{item.title}</div>;
          })}
      </div>
      {/* pagingation */}
      <div>
        {pageCount &&
          [...Array(pageCount)?.keys()]?.map((n) => {
            return (
              <span
                key={n}
                className={style.pagecount}
                onClick={() => handlePageClick(n)}
              >
                {n}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default PaginationFeature;
