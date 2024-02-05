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
        className="w-72 py-2 px-4"
      />
    </form>
  );
}
