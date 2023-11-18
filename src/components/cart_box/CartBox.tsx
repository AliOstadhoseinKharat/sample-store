"use client";
import Image from "next/image";

interface CartProps {
  key: number;
  cartInfo: {
    productGallery: string;
    product_name: string;
    product_price: number;
    product_introduction: string;
    count: number;
  };
}

export default function CartBox({ cartInfo, key }: CartProps | any) {
  return (
    <div
      key={key}
      className={"max-w-sm w-full lg:max-w-full lg:flex border-solid py-[24px]"}
    >
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="Woman holding a mug"
      >
        <Image
          width={240}
          height={180}
          className=" pt-4 pr-4"
          src={cartInfo?.productGallery ? cartInfo?.productGallery : ""}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <h3 className="text-gray-900 font-bold text-xl mb-2">
            {cartInfo.product_name}
          </h3>
          <p className="text-gray-700 text-base">
            {cartInfo.product_introduction}
          </p>
        </div>
        <div className="flex items-center">
          {/* <div className="text-sm"> */}
            <p className="text-gray-900 leading-none">
              تعداد : {cartInfo.count}
            </p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
