import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import AddToCartButton from "./AddToCart";
import { StarRating } from "./StarRating";

const ModalCard = ({ open, onCloseModal, id }) => {
  const [product, setProduct] = useState([]);
  async function getProductById(id) {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const data = res.data;
    setProduct(data);
  }

  useEffect(() => {
    getProductById(id);
  }, [id]);

  const { title, price, description, image, rating } = product;
  return (
    <Modal open={open} onClose={onCloseModal} center>
      <div className="flex gap-3 bg-white rounded-lg shadow-md p-6 relative ">
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-l-2xl  flex-1">
          <img src={image} alt={title} className="object-contain w-full h-full" />
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

          <div className="flex items-center mb-2">
            <StarRating rating={rating?.rate} count={rating?.count} />
          </div>
          <div className="flex items-center mb-2">
            <span className=" text-xl font-bold text-gray-800">${price}</span>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-3 capitalize">{description}</p>

          <div className="flex items-center justify-between gap-2">
            <AddToCartButton id={id} />
            <button className=" bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCard;
