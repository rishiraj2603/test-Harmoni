import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

const Products = () => {
  const [productData, setProductData] = useState({
    allProducts: [],
    categoryProducts: [],
    isCategory: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categoryName = useSelector((state) => state.category.selectedCategory);

  async function fetchProducts() {
    setLoading(true);
    setError(null);
    try {
      let categoryProducts = [];
      let allProducts = [];
      if (categoryName) {
        const categoryRes = await axios.get(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );
        categoryProducts = categoryRes.data;
        console.log("🚀 ~ fetchProducts ~ categoryProducts:", categoryProducts);
        let correctingImageLink = categoryProducts.map((item) => {
          let correctImage = item.image.replace(/.jpg$/, "t.png");
          console.log("🚀 ~ fetchProducts ~ correctImage:", correctImage);
          return { ...item, image: correctImage };
        });
        categoryProducts = correctingImageLink;

        if (categoryProducts.length == 0) {
          setError("Failed to load products.");
        }
      } else {
        const allProductsRes = await axios.get(
          "https://fakestoreapi.com/products"
        );
        allProducts = allProductsRes.data;
        if (allProducts.length == 0) {
          setError("Failed to load products.");
        }
      }

      setProductData({
        allProducts,
        categoryProducts,
        isCategory: categoryProducts.length > 0,
      });
    } catch (err) {
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [categoryName]);

  const data = productData.isCategory
    ? productData.categoryProducts
    : productData.allProducts;

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-700 text-xl">{error}</div>;

  return data.map((item) => {
    return <ProductCard key={item.id} product={item} />;
  });
};

export default Products;
