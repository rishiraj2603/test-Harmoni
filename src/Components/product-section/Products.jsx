import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

const Products = () => {
  const [productData, setProductData] = useState({ allProducts: [], categoryProducts: [], isCategory: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categoryName = useSelector((state) => state.category.selectedCategory);

  async function fetchProducts() {
    setLoading(true);
    setError(null);
    try {
      const allProductsRes = await axios.get("https://fakestoreapi.com/products");
      const allProducts = allProductsRes.data;

      let categoryProducts = [];
      if (categoryName) {
        const categoryRes = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
        categoryProducts = categoryRes.data;
      }

      if (categoryProducts.length == 0) {
        setError("Failed to load products.");
      }

      setProductData({ allProducts, categoryProducts, isCategory: categoryProducts.length > 0 });
    } catch (err) {
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [categoryName]);

  const data = productData.isCategory ? productData.categoryProducts : productData.allProducts;

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-700 text-xl">{error}</div>;

  return data.map((item) => {
    return <ProductCard key={item.id} product={item} />;
  });
};

export default Products;
