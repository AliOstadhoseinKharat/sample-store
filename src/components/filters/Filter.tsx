"use client";
import { useState } from "react";
import styles from "./filter.module.css";

export default function Filter() {
  const [activeFilter, setActiveFilter] = useState("");

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
        onClick={() => setActiveFilter("bestSelling")}
        className={
          styles["filter-btn"] +
          " " +
          `${activeFilter == "bestSelling" ? styles["active-filter"] : ""}`
        }
      >
        پرفروش ترین
      </button>
      <button
        onClick={() => setActiveFilter("newest")}
        className={
          styles["filter-btn"] +
          " " +
          `${activeFilter == "newest" ? styles["active-filter"] : ""}`
        }
      >
        جدیدترین
      </button>
      <button
        onClick={() => setActiveFilter("mostExpensive")}
        className={
          styles["filter-btn"] +
          " " +
          `${activeFilter == "mostExpensive" ? styles["active-filter"] : ""}`
        }
      >
        گران ترین
      </button>
      <button
        onClick={() => setActiveFilter("cheapest")}
        className={
          styles["filter-btn"] +
          " " +
          `${activeFilter == "cheapest" ? styles["active-filter"] : ""}`
        }
      >
        ارزان ترین
      </button>
    </div>
  );
}
