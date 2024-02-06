import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-60 py-2 px-4 rounded-full bg-yellow-100 
        placeholder:text-stone-400 focus:outline-none 
        focus:ring focus:ring-yellow-200 border-none sm:focus:w-72 
        sm:transition-all sm:duration-300"
      />
    </form>
  );
}
