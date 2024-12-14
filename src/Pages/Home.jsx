import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Categories from "../Components/Categories";
import ProductDisplay from "../Components/ProductDisplay";
import { useState } from "react";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Hero />
      <Features />
      <Categories category={category} setCategory={setCategory} />
      <ProductDisplay category={category} />
    </div>
  );
};

export default Home;
