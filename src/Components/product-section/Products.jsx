import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

const Products = () => {
  const [productData, setProductData] = useState({ allProducts: [], categoryProducts: [], isCategory: false });

  const categoryName = useSelector((state) => state.category.selectedCategory);

  async function fetchProducts() {
    const allProductsRes = await axios.get("https://fakestoreapi.com/products");
    const allProducts = allProductsRes.data;

    if (categoryName) {
      const categoryRes = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
      const categoryProducts = categoryRes.data;
      setProductData({ allProducts, categoryProducts, isCategory: categoryProducts.length > 0 });
    } else {
      setProductData({ allProducts, categoryProducts: [], isCategory: false });
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [categoryName]);

  const data = productData.isCategory ? productData.categoryProducts : productData.allProducts;
  return data.map((item) => {
    return <ProductCard key={item.id} product={item} />;
  });
};

export default Products;
