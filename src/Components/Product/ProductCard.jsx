import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalCard from "./ModalCard";
import { useSelector } from "react-redux";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [iscategory, setIsCategory] = useState(false);
  console.log("🚀 ~ ProductCard ~ iscategory:", iscategory);
  const [categoryData, setCategoryData] = useState([]);
  console.log("🚀 ~ ProductCard ~ categoryData:", categoryData);

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
    const res = await axios.get(
      `https://fakestoreapi.com/products/category/${name}`
    );
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

  return (
    <div>
      {iscategory ? (
        <div className="flex flex-wrap justify-between size-full gap-10 my-[3rem]">
          {categoryData.map((item) => {
            return <Products product={item} />;
          })}
        </div>
      ) : (
        <div className="flex flex-wrap justify-between size-full gap-10 my-[3rem]">
          {products.map((item) => {
            return <Products product={item} />;
          })}
        </div>
      )}
    </div>
  );
};

const Products = ({ product }) => {
  const { id, title, price, image } = product;

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
    console.log("he");
  };
  return (
    <div
      className="border-black border-2 w-[25rem] flex flex-wrap flex-col gap-4"
      onClick={() => {
        onOpenModal();
      }}
    >
      <div className="m-auto w-auto">
        <img
          src={image}
          alt=""
          className="h-[25rem] max-w-full max-h-full p-[1.5rem]"
        />
      </div>
      <div className="m-[2rem]">
        <h1 className="truncate h-[1.3rem] w-[20rem]">{title}</h1>
        <h4>$ {price}</h4>
      </div>
      {open && (
        <ModalCard
          id={id}
          product={product}
          open={open}
          onCloseModal={onCloseModal}
        ></ModalCard>
      )}
    </div>
  );
};

export default ProductCard;
