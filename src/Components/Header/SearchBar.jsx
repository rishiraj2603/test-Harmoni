import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCategory } from "../../store/store";
import { AutocompleteSearch } from "../auto-complete-search";
const SearchBar = () => {
  const [category, setCategory] = useState([]);
  async function categoryData() {
    const res = await axios.get(`https://fakestoreapi.com/products/categories`);
    const data = res.data;
    setCategory(data);
  }

  useEffect(() => {
    categoryData();
  }, []);

  const dispatch = useDispatch();
  function handleChange(value) {
    dispatch(updateCategory(value));
  }

  return (
    <div className="flex gap-2 items-center z-10">
      <AutocompleteSearch options={category} onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
