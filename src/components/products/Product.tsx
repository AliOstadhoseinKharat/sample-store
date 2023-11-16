"use client";
import styles from "./product.module.css";
import ProductBox from "../product_box/ProductBox";
import { useState } from "react";

export default function Product() {
  const [products, setProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    // Product component container
    <div className={styles["products-container"]}>
      {products.map((p, i) => {
        {
          /* Product box */
        }
        return <ProductBox key={i} />;
      })}
    </div>
  );
}
