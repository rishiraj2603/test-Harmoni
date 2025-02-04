import { useEffect, useState } from "react";

export function AutocompleteSearch({ options, onChange }) {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");
  useEffect(() => {
    onChange(selectedValue);
  }, [selectedValue]);

  const handleKeyDown = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (e.key === "Enter") {
      setSelectedValue(value);
      setShowOptions(false);
    }
  };
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setShowOptions(true);
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => setTimeout(() => setShowOptions(false), 200)}
        placeholder="Search..."
        className="w-full px-4 py-2 border rounded-md"
      />
      {showOptions && filteredOptions.length > 0 && (
        <ul className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10">
          {filteredOptions.map((option) => (
            <li
              key={option}
              onMouseDown={() => {
                setInputValue(option);
                setSelectedValue(option);
                setShowOptions(false);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 capitalize"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => {
          setSelectedValue(inputValue);
          setShowOptions(false);
        }}
      >
        <svg
          className="w-5 h-5 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}
