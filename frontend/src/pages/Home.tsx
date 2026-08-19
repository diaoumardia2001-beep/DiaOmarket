import React from "react";
import { Container } from "../components/ui/Container";

export const Home: React.FC = () => {
  return (
    <div className="bg-bg-dark text-text-on-dark py-24 flex-grow flex items-center">
      <Container className="text-center space-y-6">
        <h1 className="text-display">
          Dia<span className="text-brand-orange">O</span>
        </h1>
        <p className="text-h3 text-text-on-dark-secondary max-w-xl mx-auto font-medium leading-relaxed">
          La marketplace tech qui rapproche acheteurs et vendeurs.
        </p>
        <div className="pt-4 flex justify-center">
          <div className="h-1 w-20 rounded bg-gradient-to-r from-brand-orange to-primary" />
        </div>
      </Container>
    </div>
  );
};
export default Home;
