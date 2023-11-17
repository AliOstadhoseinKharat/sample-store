"use client";

import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { CartContext } from "../api/Context/CartContext";

export default function App({ children }: { children: React.ReactNode }) {
  let storageCartValue: string | undefined | null = null;
  if (typeof window !== "undefined") {
    storageCartValue = localStorage.getItem("cartProducts");
  }
  const [cartProducts, setCartProducts] = useState(
    storageCartValue == undefined ? [] : JSON.parse(storageCartValue)
  );

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      <Header />

      {children}

      <Footer />
    </CartContext.Provider>
  );
}
