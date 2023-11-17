import { Dispatch, SetStateAction, createContext } from "react";

type InitialValue = {
  cartProducts: Object[];
  setCartProducts: Dispatch<SetStateAction<never[]>>;
};



const initialValue: InitialValue = {
  cartProducts: [],
  setCartProducts: () => [],
};

export const CartContext = createContext(initialValue);
