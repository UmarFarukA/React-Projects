import React from "react";

export default function Spinner() {
  return (
    <div className="bg-stone-700 flex items-center justify-center w-12 h-12">
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        Loading...
      </svg>
    </div>
  );
}
