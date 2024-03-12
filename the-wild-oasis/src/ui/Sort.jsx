import React from "react";
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function Sort({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  const handleSort = (e) => {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  };
  return (
    <Select
      options={options}
      value={sortBy}
      onChange={handleSort}
      styles="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-full p-2.5 "
    />
  );
}

export default Sort;
