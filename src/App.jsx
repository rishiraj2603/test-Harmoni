import React from "react";
import Header from "./Components/Header/Header";
import ProductCard from "./Components/Product/ProductCard";

const App = () => {
  return (
    <div className="my-[1.5rem] mx-[1rem]">
      <Header></Header>
      <ProductCard />
    </div>
  );
};

export default App;
