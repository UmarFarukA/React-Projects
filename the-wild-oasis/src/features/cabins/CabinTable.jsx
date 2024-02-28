import React from "react";

export default function CabinTable({ children }) {
  return (
    <table className="w-full border-collapse ">
      <thead>
        <tr>
          <th className="text-stone-600 text-lg">Image</th>
          <th className="text-stone-600 text-lg">Cabin</th>
          <th className="text-stone-600 text-lg">Capacity</th>
          <th className="text-stone-600 text-lg">Price</th>
          <th className="text-stone-600 text-lg">Discount</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
