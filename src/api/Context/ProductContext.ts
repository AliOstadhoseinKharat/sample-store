import { Dispatch, SetStateAction, createContext } from "react";

type InitialValue = {
  products: Object[];
  setProducts: Dispatch<SetStateAction<never[]>>;
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
};

const initialValue: InitialValue = {
  products: [],
  setProducts: () => [],
  activeFilter: "",
  setActiveFilter: () => "",
};

export const ProductContext = createContext(initialValue);
