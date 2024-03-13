import React from "react";
import Filter from "./Filter";
import Sort from "./Sort";

function TableOperations() {
  return (
    <div className="grid grid-cols-[1fr_30rem]">
      <Filter
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With discount" },
          { value: "no-discount", label: "No discount" },
        ]}
        filterField="discount"
      />
      <Sort
        options={[
          { value: "name", label: "Sort by name" },
          { value: "maxCapacity-asc", label: "Sort by capacity (A-Z)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (A-Z)" },
          { value: "regularPrice-desc", label: "Sort by price (Z-A)" },
          { value: "discount", label: "Sort by discount (A-Z)" },
        ]}
      />
    </div>
  );
}

export default TableOperations;
