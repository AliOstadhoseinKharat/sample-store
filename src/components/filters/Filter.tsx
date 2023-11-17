"use client";
import { useContext, useState } from "react";
import styles from "./filter.module.css";
import { ProductContext } from "@/api/Context/ProductContext";

export default function Filter() {
  const { activeFilter, setActiveFilter } = useContext(ProductContext);

  return (
    // Filter component container
    <div className="w-full h-full max-w-[1440px] bg-[#f3f3f3]">
      <button
        onClick={() => setActiveFilter("")}
        className={
          styles["filter-btn"] +
          " " +
          `${activeFilter == "" ? styles["active-filter"] : ""}`
        }
      >
        همه محصولات
      </button>
      <button
        onClick={() => setActiveFilter("mostSaleProducts")}
        className={
          styles["filter-btn"] +
          " " +
          `${activeFilter == "mostSaleProducts" ? styles["active-filter"] : ""}`
        }
      >
        پرفروش ترین
      </button>
      <button
        onClick={() => setActiveFilter("newestProducts")}
        className={
          styles["filter-btn"] +
          " " +
          `${activeFilter == "newestProducts" ? styles["active-filter"] : ""}`
        }
      >
        جدیدترین
      </button>
      <button
        onClick={() => setActiveFilter("mostExpensiveProducts")}
        className={
          styles["filter-btn"] +
          " " +
          `${
            activeFilter == "mostExpensiveProducts"
              ? styles["active-filter"]
              : ""
          }`
        }
      >
        گران ترین
      </button>
      <button
        onClick={() => setActiveFilter("cheapestProducts")}
        className={
          styles["filter-btn"] +
          " " +
          `${activeFilter == "cheapestProducts" ? styles["active-filter"] : ""}`
        }
      >
        ارزان ترین
      </button>
    </div>
  );
}
