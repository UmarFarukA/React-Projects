import React from "react";

export default function Loader() {
  return (
    <div
      className=" bg-slate-100/50 absolute inset-0 
    flex items-center justify-center backdrop-blur-sm"
    >
      <div className="loader"></div>
    </div>
  );
}
