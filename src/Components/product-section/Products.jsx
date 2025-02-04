import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [iscategory, setIsCategory] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  async function getProduct() {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = res.data;
    setProducts(data);
  }
  useEffect(() => {
    getProduct();
  }, []);

  const categoryName = useSelector((state) => state.category.selectedCategory);
  async function getCategoryProduct(name) {
    const res = await axios.get(`https://fakestoreapi.com/products/category/${name}`);
    const data = res.data;
    console.log("🚀 ~ getCategoryProduct ~ data:", data.length);
    if (data == "") {
      setIsCategory(false);
    }
    if (data.length > 0) {
      setIsCategory(true);
    }
    setCategoryData(data);
  }
  useEffect(() => {
    getCategoryProduct(categoryName);
  }, [categoryName]);

  const data = iscategory ? categoryData : products;
  return data.map((item) => {
    return <ProductCard key={item.id} product={item} />;
  });
};

export default Products;
