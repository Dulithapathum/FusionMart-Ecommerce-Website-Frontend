import { createContext } from "react";
import { all_products } from "../assets/data";

export const ShopContext = createContext(null);

const ShopcontextProvider = (props) => {
  const contextValue = { all_products };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopcontextProvider;
