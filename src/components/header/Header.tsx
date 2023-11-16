"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="flex-rcc w-full min-h-[64px] bg-[#D3D3D3]">
      <div className="flex-rbc w-full max-w-[1440px]">
        {/* Right div */}
        <div className="flex-rsc w-[50%]">
          <Link href={"/"}>
            <h3 className="ml-[30px] cursor-pointer">خانه</h3>
          </Link>

          <Link href={"/"}>
            <h3 className="ml-[30px] cursor-pointer">تماس با ما</h3>
          </Link>
          <Link href={"/"}>
            <h3 className="ml-[30px] cursor-pointer">درباره ما</h3>
          </Link>
        </div>

        {/* Left div */}
        <div className="flex-rec w-[50%]">
          <Link href={"/cart"}>
            <h3>سبد خرید</h3>
          </Link>
          <p className="color-[#000] mr-2">{cartCount}</p>
        </div>
      </div>
    </div>
  );
}
