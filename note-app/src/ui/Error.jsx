import React from "react";
// import Button from "./Button";
// import { useNavigate } from "react-router-dom";

export default function Error({ message }) {
  // const navigate = useNavigate();
  return (
    <div>
      <p className="px-8 py-6 text-lg text-stone-700 ">{message}</p>
      {/* <Button type="back" onClick={navigate(-1)}>
        &larr;Back
      </Button> */}
    </div>
  );
}
