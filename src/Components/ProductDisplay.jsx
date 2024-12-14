import { useContext } from "react";
import Item from "./Item";
import { ShopContext } from "../Context/ShopContext";
const ProductDisplay = () => {
  const { all_products } = useContext(ShopContext);
  return (
    <section id="shop" className="max-padd-container py-16">
      <div className="flexBetween pb-20">
        <h4 className="text-4xl font-extrabold leading-none font-ace flex flex-col">
          <span className="medium-16">See </span>
          Products
        </h4>
      </div>
      <div className="grid grid-cols-1 xs:grid-col-2 md:grid-cols-3 lg:grid col-4 xl:grid-cols-5 gap-x-5">
        {all_products.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDisplay;
