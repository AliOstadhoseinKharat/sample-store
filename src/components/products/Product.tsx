"use client";
import styles from "./product.module.css";
import ProductBox from "../product_box/ProductBox";
import { useContext } from "react";
import { ProductContext } from "../../api/Context/ProductContext";

export default function Product() {
  const { products } = useContext(ProductContext);

  return (
    // Product component container
    <div className={styles["products-container"]}>
      {products.length > 0 &&
        products?.map((p: Object, i: number) => {
          {
            /* Product box */
          }
          return <ProductBox productInfo={p} key={i} />;
        })}
    </div>
  );
}
