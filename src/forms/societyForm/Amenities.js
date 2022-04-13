import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const Amenities = () => {

  const onSubmit = () => {};
  return (
    <div className="bg-slate-200">
      <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
          Amenities
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          action=""
        >
                 </form>
      </div>
    </div>
  );
};

export default Amenities;
