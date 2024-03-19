import React from "react";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";
import { PER_PAGE_SIZE } from "../utils/contants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PER_PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-between">
      <div className="text-stone-400">
        Showing{" "}
        <span>
          {(currentPage - 1) * PER_PAGE_SIZE + 1} to{" "}
          <span>
            {currentPage === pageCount ? count : currentPage * PER_PAGE_SIZE}
          </span>{" "}
          of
        </span>{" "}
        <span>{count}</span> results.
      </div>
      <div class="flex space-x-2">
        <Button type="normal" onClick={prevPage}>
          Previous
        </Button>

        <Button type="normal" onClick={nextPage}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
