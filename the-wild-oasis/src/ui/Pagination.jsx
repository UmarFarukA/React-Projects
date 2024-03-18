import React from "react";
import Button from "./Button";

function Pagination() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-stone-400">
        Showing <span>1</span> of <span>10</span> results.
      </div>
      <div class="flex space-x-2">
        <Button type="normal">Previous</Button>

        <Button type="normal">Next</Button>
      </div>
    </div>
  );
}

export default Pagination;
