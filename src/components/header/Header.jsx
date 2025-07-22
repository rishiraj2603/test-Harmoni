import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import CartModal from "./CartModal";
const Header = () => {
  const cartCount = useSelector((state) => state.cart.count);

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <header className="bg-yellow-400 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Harmoni</h1>
            <nav className="hidden md:flex ml-10 space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home Page
              </a>
              <a
                href="#productSection"
                className="text-gray-700 hover:text-gray-900"
              >
                Categories
              </a>
              <a href="#footer" className="text-gray-700 hover:text-gray-900">
                Contact Us
              </a>
              <a
                href="#heroSection"
                className="text-gray-700 hover:text-gray-900"
              >
                More Options
              </a>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <SearchBar />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onOpenModal();
              }}
              className="relative"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
              {open && (
                <CartModal open={open} onCloseModal={onCloseModal}></CartModal>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
