import React from "react";
import { DiscoverSection } from "./components/discover-section";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { HeroSection } from "./components/hero-section";
import { ServiceSection } from "./components/service-section";
import { ProductSection } from "./components/product-section";

const App = () => {
  return (
    <div className="my-[1.5rem] mx-[1rem]">
      <Header />
      <HeroSection />
      <DiscoverSection />
      <ProductSection />
      <ServiceSection />
      <Footer />
    </div>
  );
};

export default App;
