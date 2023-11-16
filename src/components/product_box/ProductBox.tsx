"use client";
import Image from "next/image";
import sampleImage from "../../assets/images/product-sample.jpg";
import plusBold from "../../assets/icons/plus-bold.svg";
import minus from "../../assets/icons/minus.svg";

interface ProductProp {
  key: number;
}

export default function ProductBox({ key }: ProductProp) {
  return (
    // Product box container
    <div
      key={key}
      className="w-[25%] hover:scale-y-[1.01] max-w-sm rounded overflow-hidden shadow-lg border-solid border-[1px] border-[#d9d9d9]"
    >
      <Image
        className="w-full"
        src={sampleImage}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>

        <h3 className="text-left font-bold text-xl my-[24px]">
          تومان {100000}
        </h3>
      </div>
      <div className="flex-rec px-6 pb-[24px]">
        <button className="bg-gray-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          <Image width={16} height={16} src={plusBold} alt="plus icon" />
        </button>
        <button className="bg-gray-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          <Image width={16} height={16} src={minus} alt="plus icon" />
        </button>
      </div>
    </div>
  );
}
