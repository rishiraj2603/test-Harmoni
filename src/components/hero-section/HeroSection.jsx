import React from "react";

const HeroSection = () => {
  return (
    <section id="heroSection" className="relative">
      <div className="h-full w-1/2 bg-yellow-200 right-0 absolute" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="underline">My Store</span>
          </h1>
          <h2 className="text-3xl font-bold mb-4">Your Shopping Destination</h2>
          <p className="text-gray-600 mb-8">
            Discover a wide range of products tailored just for you. Shop with
            ease and find exactly what you need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
