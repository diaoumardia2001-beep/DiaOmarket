import React from "react";
import { Hero } from "../components/home/Hero";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow">
      <Hero />
    </div>
  );
};
export default Home;
