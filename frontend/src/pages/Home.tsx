import React from "react";
import { Hero } from "../components/home/Hero";
import { Categories } from "../components/home/Categories";
import { PopularProducts } from "../components/home/PopularProducts";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow">
      <Hero />
      <Categories />
      <PopularProducts />
    </div>
  );
};
export default Home;
