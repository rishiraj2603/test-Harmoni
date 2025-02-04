import React from "react";
import Products from "./Products";

export const ProductSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-1 h-6 bg-orange-500" />
          <h2 className="text-xl font-bold">Our Products</h2>
        </div>
        <h3 className="text-2xl font-bold mb-8">Explore Our Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Products />
        </div>
      </div>
    </section>
  );
};
