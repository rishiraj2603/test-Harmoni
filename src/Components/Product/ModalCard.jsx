import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import { useDispatch } from "react-redux";
import { updateCart } from "../../store/store";

const ModalCard = ({ open, onCloseModal, id }) => {
  const [OneProduct, setOnePorduct] = useState([]);
  async function getProductById(id) {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const data = res.data;
    setOnePorduct(data);
  }

  useEffect(() => {
    getProductById(id);
  }, [id]);

  const dispatch = useDispatch();
  const { title, price, description, image } = OneProduct;

  function handlingClick(e) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(updateCart());
  }

  return (
    <Modal open={open} onClose={onCloseModal} center>
      <div className="border-black border-2 w-[25rem] flex flex-wrap flex-col gap-4">
        <div className="m-auto w-auto">
          <img
            src={image}
            alt=""
            className="h-[25rem] max-w-full max-h-full p-[1.5rem]"
          />
        </div>
        <div className="m-[2rem]">
          <h1 className="">{title}</h1>
          <h1>{description} </h1>
          <div className="flex justify-between">
            <h4>$ {price}</h4>
            <button onClick={handlingClick} className="border-black border-2">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCard;
