"use client";
import Image from "next/image";
import plusBold from "../../assets/icons/plus-bold.svg";
import minus from "../../assets/icons/minus.svg";
import { useContext } from "react";
import { CartContext } from "../../api/Context/CartContext";
import update from "immutability-helper";

interface ProductProp {
  key: number;
  productInfo: {
    productGallery: string;
    product_name: string;
    product_price: number;
    count?: number | undefined;
  };
}

export default function ProductBox({ key, productInfo }: ProductProp | any) {
  // cart products context
  const { cartProducts, setCartProducts } = useContext(CartContext);

  // Function for add to cart
  const addToCart = (p: any) => {
    const found: any = cartProducts.find((item: any) => item?.id == p?.id);
    const foundIndex: number = cartProducts.findIndex(
      (item: any) => item?.id == p?.id
    );

    // check product exist or not
    if (found) {
      let updatedCart = update(cartProducts[foundIndex], {
        count: { $set: found.count + 1 },
      });

      let newData: any = update(cartProducts, {
        $splice: [[foundIndex, 1, updatedCart]],
      });
      setCartProducts(newData);
      localStorage.setItem("cartProducts", JSON.stringify(newData));
    } else {
      const newData: any = update(cartProducts, {
        $push: [{ ...p, count: 1 }],
      });
      setCartProducts(newData);
      localStorage.setItem("cartProducts", JSON.stringify(newData));
    }
  };

  // Function for remove from cart
  const removeFromCart = (p: any) => {
    const found: any = cartProducts.find((item: any) => item?.id == p?.id);
    const foundIndex: number = cartProducts.findIndex(
      (item: any) => item?.id == p?.id
    );

    // check product exist or not
    if (found && found.count > 1) {
      let updatedCart: any = update(cartProducts[foundIndex], {
        count: { $set: found.count - 1 },
      });

      let newData: any = update(cartProducts, {
        $splice: [[foundIndex, 1, updatedCart]],
      });
      setCartProducts(newData);
      // Store cart data into localstorage
      localStorage.setItem("cartProducts", JSON.stringify(newData));
    } else {
      let newData: any = cartProducts.filter((item: any) => item.id != p.id);
      setCartProducts(newData);
      // Store cart data into localstorage
      localStorage.setItem("cartProducts", JSON.stringify(newData));
    }
  };

  return (
    // Product box container
    <div
      key={key}
      className="w-[25%] hover:scale-y-[1.01] max-w-sm rounded overflow-hidden shadow-lg border-solid border-[1px] border-[#d9d9d9] min-h-[534px]"
    >
      <Image
        width={240}
        height={180}
        className="mx-auto pt-4"
        src={productInfo?.productGallery}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {productInfo?.product_name.slice(0, 30)}
        </div>
        <p className="text-gray-700 text-base">
          {productInfo?.product_name.slice(0, 50)}
        </p>

        <h3 className="text-left font-bold text-xl my-[24px]">
          تومان {Number(productInfo?.product_price)?.toLocaleString("en-us")}
        </h3>
      </div>
      <div className="flex-rec px-6 pb-[24px]">
        <button
          onClick={() => addToCart(productInfo)}
          className="bg-gray-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          <Image width={16} height={16} src={plusBold} alt="plus icon" />
        </button>
        <button
          onClick={() => removeFromCart(productInfo)}
          className="bg-gray-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          <Image width={16} height={16} src={minus} alt="plus icon" />
        </button>
      </div>
    </div>
  );
}
