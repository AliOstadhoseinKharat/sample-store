"use client";
import { useContext, useState } from "react";
import CartBox from "../../components/cart_box/CartBox";
import { CartContext } from "../../api/Context/CartContext";

export default function Cart() {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  return (
    <div className="flex-rcs min-h-[calc(100vh-364px)]">
      {/* Carts container */}
      <div className="w-full h-full max-h-[700px] overflow-scroll max-w-[1440px] mb-[100px] mt-[134px] border-solid border-[1px] border-[#b8b8b8] rounded-[5px]">
        {/* Cart box */}
        {cartProducts.length > 0 &&
          cartProducts.map((c: Object, i: number) => {
            return (
              <div
                key={i}
                className={`${
                  cartProducts.length !== i + 1 &&
                  "border-solid border-b-[1px] border-[#b8b8b8]"
                }`}
              >
                <CartBox cartInfo={c} key={i} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
