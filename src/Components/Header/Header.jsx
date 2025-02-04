import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItem = useSelector((state) => state.cart.item);
  return (
    <div className="border-black border-2 h-[5rem] w-full flex justify-between items-center">
      <div className="storeName m-[1rem] text-2xl font-serif">My Store</div>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div className="icon border-black border-2 w-max mx-[2rem] flex">
        <h4 className="">{cartItem}</h4>
        <FontAwesomeIcon icon={faCartShopping} className="text-4xl" />
      </div>
    </div>
  );
};

export default Header;
