"use client";

import Filter from "../components/filters/Filter";
import Product from "../components/products/Product";

export default function Home() {
  return (
    <div className="flex-csc mb-[100px] mt-[134px] min-h-[calc(100vh-564px)]">
      {/* Filters container */}
      <Filter />
      {/* Products container */}
      <Product />
    </div>
  );
}
