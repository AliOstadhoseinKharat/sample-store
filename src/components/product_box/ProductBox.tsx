"use client";
import Image from "next/image";
import plusBold from "../../assets/icons/plus-bold.svg";
import minus from "../../assets/icons/minus.svg";
import { useContext } from "react";
import { CartContext } from "../../api/Context/CartContext";

interface ProductInfo {
  id: number;
  productGallery: string;
  product_name: string;
  product_price: number;
  count: number;
}

interface ProductBoxProps {
  key: number;
  productInfo: ProductInfo | any;
}

export default function ProductBox({ key, productInfo }: ProductBoxProps) {
  // cart products context
  const { cartProducts, setCartProducts } = useContext(CartContext);

  // Function for add to cart
  const addToCart = (p: ProductInfo) => {
    // found specific cart's product
    const found: Partial<ProductInfo> | undefined = cartProducts.find(
      (item: Partial<ProductInfo>) => item.id === p.id
    );
    // found specific cart's product index
    const foundIndex: number = cartProducts.findIndex(
      (item: Partial<ProductInfo>) => item.id === p.id
    );

    if (found) {
      const updatedCart: Partial<ProductInfo> = {
        ...found,
        count: found.count ? found.count + 1 : 1,
      };

      const newData: any = [
        ...cartProducts.slice(0, foundIndex),
        updatedCart,
        ...cartProducts.slice(foundIndex + 1),
      ];

      setCartProducts(newData);
      localStorage.setItem("cartProducts", JSON.stringify(newData));
    } else {
      const newData: any = cartProducts.concat({ ...p, count: 1 });

      setCartProducts(newData);
      localStorage.setItem("cartProducts", JSON.stringify(newData));
    }
  };

  // Function for remove from cart
  const removeFromCart = (p: ProductInfo) => {
    // found specific cart's product
    const found: Partial<ProductInfo> | undefined = cartProducts.find(
      (item: Partial<ProductInfo>) => item.id === p.id
    );
    // found specific cart's product index
    const foundIndex = cartProducts.findIndex(
      (item: Partial<ProductInfo>) => item.id === p.id
    );

    if (found && found.count && found.count > 1) {
      const updatedCart: Partial<ProductInfo> = {
        ...found,
        count: found.count - 1,
      };

      const newData: any = [
        ...cartProducts.slice(0, foundIndex),
        updatedCart,
        ...cartProducts.slice(foundIndex + 1),
      ];

      setCartProducts(newData);
      localStorage.setItem("cartProducts", JSON.stringify(newData));
    } else {
      const newData: any = cartProducts.filter(
        (item: Partial<ProductInfo>) => item.id !== p.id
      );

      setCartProducts(newData);
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
        src={productInfo.productGallery}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {productInfo.product_name.slice(0, 30)}
        </div>
        <p className="text-gray-700 text-base">
          {productInfo.product_name.slice(0, 50)}
        </p>

        <h3 className="text-left font-bold text-xl my-[24px]">
          تومان {Number(productInfo.product_price)?.toLocaleString("en-us")}
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
