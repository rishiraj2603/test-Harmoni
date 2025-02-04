import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../store/store";

const AddToCartButton = ({ id }) => {
  const count = useSelector((state) => state.cart.products[id]);
  const dispatch = useDispatch();
  const handleIncrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(updateCart({ id, change: +1 }));
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(updateCart({ id, change: -1 }));
  };

  return (
    <div className="flex items-center border border-gray-300 rounded w-full">
      {count ? (
        <>
          <button onClick={handleDecrement} className="px-3 py-2 flex-1 hover:bg-gray-100 focus:outline-none">
            -
          </button>
          <span className="px-4 py-2 border-l border-r border-gray-300">{count}</span>
          <button onClick={handleIncrement} className="px-3 py-2 flex-1 hover:bg-yellow-100 focus:outline-none bg-yellow-200">
            +
          </button>
        </>
      ) : (
        <button className=" bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors w-full" onClick={handleIncrement}>
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
