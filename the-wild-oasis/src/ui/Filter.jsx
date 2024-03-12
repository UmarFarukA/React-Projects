import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const handleFilter = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
    // console.log(searchParams);
  };

  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <button
          value={option.value}
          key={option.value}
          onClick={() => handleFilter(option.value)}
          className="rounded-md px-3 py-2 bg-stone-100 text-stone-700 hover:bg-indigo-600 hover:text-stone-100"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
