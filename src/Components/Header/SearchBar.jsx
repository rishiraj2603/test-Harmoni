import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCategory } from "../../store/store";
const SearchBar = () => {
  const [category, setCategory] = useState([]);
  async function categoryData() {
    const res = await axios.get(`https://fakestoreapi.com/products/categories`);
    const data = res.data;
    setCategory(data);
  }
  const dispatch = useDispatch();
  function handleClick(value) {
    dispatch(updateCategory(value));
  }

  useEffect(() => {
    categoryData();
  }, []);

  return (
    <div className="flex gap-2 items-center">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleClick(e.target.firstChild.value);
        }}
      >
        <input list="category" name="" id="" className="border-black border-2 " placeholder="Search here" />
        <datalist id="category">
          {category.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </datalist>
        <button className="border-black border-2 w-[2.5rem] bg-blue-500 hover:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-700 text-white">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
