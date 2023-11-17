"use client";

import Filter from "../components/filters/Filter";
import Product from "../components/products/Product";
import { ProductContext } from "../api/Context/ProductContext";
import { useEffect, useState } from "react";
import { httpAllProducts } from "../api/requests/requests";

export default function Home() {
  // State for products and filters
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");

  // Initial load
  useEffect(() => {
    httpAllProducts({
      page: 1,
      newestProducts: activeFilter == "newestProducts" ? 1 : 0,
      mostSaleProducts: activeFilter == "mostSaleProducts" ? 1 : 0,
      cheapestProducts: activeFilter == "cheapestProducts" ? 1 : 0,
      mostExpensiveProducts: activeFilter == "mostExpensiveProducts" ? 1 : 0,
      search: "",
    }).then((res: any) => {
      setProducts(res.data);
    });
  }, []);

  // show filters
  useEffect(() => {
    httpAllProducts({
      page: 1,
      newestProducts: activeFilter == "newestProducts" ? 1 : 0,
      mostSaleProducts: activeFilter == "mostSaleProducts" ? 1 : 0,
      cheapestProducts: activeFilter == "cheapestProducts" ? 1 : 0,
      mostExpensiveProducts: activeFilter == "mostExpensiveProducts" ? 1 : 0,
      search: "",
    }).then((res: any) => {
      setProducts(res.data);
    });
  }, [activeFilter]);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, activeFilter, setActiveFilter }}
    >
      <div className="flex-csc mb-[100px] mt-[134px] min-h-[calc(100vh-564px)]">
        {/* Filters container */}
        <Filter />
        {/* Products container */}
        <Product />
      </div>
    </ProductContext.Provider>
  );
}
