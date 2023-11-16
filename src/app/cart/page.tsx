"use client";
import { useState } from "react";
import CartBox from "../../components/cart_box/CartBox";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <div className="flex-rcs min-h-[calc(100vh-364px)]">
      {/* Carts container */}
      <div className="w-full h-full max-h-[700px] overflow-scroll max-w-[1440px] mb-[100px] mt-[134px] border-solid border-[1px] border-[#b8b8b8] rounded-[5px]">
        {/* Cart box */}
        {cartProducts.map((c, i) => {
          return (
            <div
              className={`${
                cartProducts.length !== i + 1 &&
                "border-solid border-b-[1px] border-[#b8b8b8]"
              }`}
            >
              <CartBox key={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
