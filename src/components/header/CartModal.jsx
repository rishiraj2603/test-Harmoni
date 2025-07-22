import React from "react";
import { useSelector } from "react-redux";
import Modal from "react-responsive-modal";

const CartModal = ({ open, onCloseModal }) => {
  const cartProduct = useSelector((state) => state.cart.products);

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      aria-labelledby="cart"
      classNames={{ modal: "cart-modal-right" }}
    >
      <h2 id="cart" className="m-auto w-max p-5 font-bold text-3xl">
        Your Cart
      </h2>
      {cartProduct ? (
        cartProduct.map((product) => {
          return (
            <div>
              <div
                key={product.id}
                className="flex gap-3 bg-white rounded-lg shadow-md p-6 relative "
              >
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-l-2xl  flex-1">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h3>

                  <div className="flex items-center mb-2">
                    {product.quantity}
                  </div>
                  <div className="flex items-center mb-2">
                    <span className=" text-xl font-bold text-gray-800">
                      ${product.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 flex-col md:flex-row">
                    <button className=" bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors w-full">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-64 h-32 flex items-center justify-center bg-gray-100 rounded-2xl shadow-lg animate-pulse">
          <span className="text-gray-500">Add Product to Cart</span>
        </div>
      )}
    </Modal>
  );
};

export default CartModal;
