import React, { useState } from "react";
import AddToCartButton from "./AddToCart";
import ModalCard from "./ModalCard";
import { StarRating } from "./StarRating";

export const ProductCard = ({ product }) => {
  const { id, title, price, image, rating } = product;

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onOpenModal();
      }}
      className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-contain" />
      </div>
      <div className="p-4 flex-1 flex flex-col h-full">
        <h3 title={title} className="text-lg font-semibold mb-2 line-clamp-2 ">
          {title}
        </h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-orange-500 font-bold">${price}</span>
          <StarRating rating={rating?.rate} count={rating?.count} />
        </div>
        <div className="mt-auto">
          <AddToCartButton id={id} />
        </div>
      </div>
      {open && <ModalCard id={id} product={product} open={open} onCloseModal={onCloseModal}></ModalCard>}
    </div>
  );
};
