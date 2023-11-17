"use client";

import { CartContext } from "../../api/Context/CartContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function Header() {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  // State for computing cart products count
  const [cartProductsCount, setCartProductsCount] = useState(0);

  // function for computing cart products count
  function cartCountEvent(): void {
    if (cartProducts.length > 0) {
      let finalCount = 0;
      cartProducts.forEach((item: any) => {
        finalCount += item.count;
      });
      setCartProductsCount(finalCount);
    } else {
      setCartProductsCount(0);
    }
  }

  // Effect on cart products
  useEffect(() => {
    cartCountEvent();
  }, [cartProducts]);

  return (
    <div className="fixed z-50 top-0 flex-rcc w-full min-h-[64px] bg-[#D3D3D3]">
      <div className="flex-rbc w-full max-w-[1440px]">
        {/* Right div */}
        <div className="flex-rsc w-[50%]">
          <Link href={"/"}>
            <h3 className="ml-[30px] cursor-pointer text-[18px]">خانه</h3>
          </Link>

          <Link href={"/"}>
            <h3 className="ml-[30px] cursor-pointer text-[18px]">تماس با ما</h3>
          </Link>
          <Link href={"/"}>
            <h3 className="ml-[30px] cursor-pointer text-[18px]">درباره ما</h3>
          </Link>
        </div>

        {/* Left div */}
        <div className="flex-rec w-[50%]">
          <Link href={"/cart"}>
            <h3 className="text-[18px]">سبد خرید</h3>
          </Link>
          <p className="color-[#000] mr-2">{cartProductsCount}</p>
        </div>
      </div>
    </div>
  );
}
