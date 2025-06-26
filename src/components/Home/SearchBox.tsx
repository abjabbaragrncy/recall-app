"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestions = [
    { name: "Enchanted mushroom crips", reports: 24 },
    { name: "Hurley’s pretzel snacks", reports: 0 },
    { name: "Tadku crispy chanachure", reports: 12 },
    { name: "Veg mayonnaise eggless", reports: 5 },
    { name: "Lays potato chips", reports: 2 },
    { name: "Banoful toast biscuit", reports: 9 },
    { name: "Bisk Club dry cake", reports: 3 },
    { name: "Milk Vita chocolate", reports: 7 },
    { name: "Pran mango juice", reports: 11 },
    { name: "Ruchi chanachur", reports: 1 },
  ];

  const getRandomSuggestions = () => {
    const shuffled = [...suggestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  const filteredSuggestions = query
    ? suggestions.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : getRandomSuggestions();

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-[540px] mx-auto flex flex-col gap-2 px-4 relative font-poppins z-40">
      {/* Search Box */}
      <div className="w-full bg-white rounded-full flex items-center pl-4 pr-2 py-[6px] gap-2  outline-offset-[-2px]  focus-within:outline-BlackBg">
        {/* Left Typing Label */}
        {(query || showSuggestions) && (
          <p className="text-sm text-BlackBg font-manrope whitespace-nowrap">
            Typing <span className="text-[#415ad7]">|</span>
          </p>
        )}

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder="Search by product name or UPC"
          className="flex-1 text-sm text-BlackBg font-manrope focus:outline-none bg-transparent ml-2"
        />

        {/* Clear (X) icon */}
        {query && (
          <Image
            src="/assets/SVG/X.svg"
            width={18}
            height={18}
            alt="Clear"
            className="cursor-pointer"
            onClick={handleClear}
          />
        )}

        {/* Search Button */}
        <button className="flex items-center gap-1.5 bg-[#415ad7] text-white text-[13px] font-normal rounded-full pl-[13px] pr-[15px] py-[7px]">
          <Image
            src="/assets/SVG/MagnifyingGlass.svg"
            width={18}
            height={18}
            alt="Search"
          />
          Search
        </button>
      </div>

      {/* Suggestion Dropdown */}
      {showSuggestions && (
        <div className="absolute top-[50px] w-full max-sm:max-w-[425px] max-w-lg mx-auto bg-white rounded-lg shadow-[0px_4px_24px_rgba(0,0,0,0.15)] p-2 space-y-1 z-50">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-3 py-2 hover:bg-[#f9fafb] rounded-md cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="40"
                  viewBox="0 0 44 40"
                >
                  <rect width="100%" height="100%" fill="#DDDDDD" />
                  <path
                    fill="#999999"
                    d="M9.625 20.715h1.76v-1.89q0-.27.04-.59zm2.62 0h.73v.57q0 .08-.05.14t-.15.06h-.53v1.41h-.86v-1.41h-2.44q-.1 0-.17-.06-.08-.07-.1-.16l-.1-.5 2.74-3.66h.93zm2.02 0h1.76v-1.89q0-.27.04-.59zm2.62 0h.73v.57q0 .08-.05.14t-.15.06h-.53v1.41h-.86v-1.41h-2.44q-.1 0-.17-.06-.08-.07-.1-.16l-.1-.5 2.74-3.66h.93zm7.09.86-.53.51-1.35-1.35-1.37 1.36-.52-.52 1.36-1.37-1.3-1.3.52-.52 1.3 1.3 1.3-1.29.53.52-1.3 1.3zm3.46-.86h1.76v-1.89q0-.27.04-.59zm2.62 0h.73v.57q0 .08-.05.14t-.15.06h-.53v1.41h-.86v-1.41h-2.44q-.1 0-.17-.06-.08-.07-.1-.16l-.1-.5 2.74-3.66h.93zm5.37-.71q0 .75-.16 1.31t-.45.92q-.28.37-.67.55-.39.17-.84.17-.46 0-.84-.17-.39-.18-.67-.55-.29-.36-.45-.92t-.16-1.31q0-.76.16-1.32.16-.55.45-.92.28-.36.67-.54.38-.18.84-.18.45 0 .84.18t.67.54q.29.37.45.92.16.56.16 1.32m-1.02 0q0-.63-.09-1.04t-.24-.66q-.16-.24-.36-.34t-.41-.1q-.22 0-.41.1-.2.1-.35.34-.16.25-.25.66t-.09 1.04.09 1.04.25.65q.15.25.35.35.19.09.41.09.21 0 .41-.09.2-.1.36-.35.15-.24.24-.65t.09-1.04"
                  />
                </svg>
                <div className="flex flex-col text-sm">
                  <span className="text-BlackBg">{item.name}</span>
                  <span className="text-[#595e70] text-[13px]">
                    {item.reports > 0
                      ? `${item.reports} reports`
                      : "No reports"}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-sm text-center py-2 text-[#595e70]">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
