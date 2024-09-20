import { useContext } from "react";

import { SearchContext } from "../context/searchContext";

export default function Form() {
  const searchContext = useContext(SearchContext);

  const { searchValue, handleSearchChange } = searchContext || {};

  return (
    <form className="w-full">
      <h1 className="text-mixed-500 text-6xl">
        Search for <span className="brightness-150">beautiful images.</span>
      </h1>
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent px-10 py-3 text-2xl text-mixed-600 border-2 border-mixed-600 focus:outline-none"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <button className="w-full bg-blue-100 text-mixed-600 text-xl">
        Search
      </button>
    </form>
  );
}
