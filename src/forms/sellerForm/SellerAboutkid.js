import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const SellerAboutkid = () => {

    const [skinfoKidOne,setskinfoKidOne]=useState('');
    const [skinfoKidTwo,setskinfoKidTwo]=useState('');
    const [skinfoKidThree,setskinfoKidThree]=useState('');

    const onSubmit = () => {};
  return (
    <div className="bg-slate-200 capitalize	">
      <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
          About Kids
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Pre-school/School/College/University Name of Kid 1
            </h4>
            <p className="italic font-light text-sm">Please Enter Comma Seperated Values</p>
            <Input
              placeholder=""
              onChange={(e) => setskinfoKidOne(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Pre-school/School/College/University Name of Kid 2
            </h4>
            <p>Please Enter Comma Seperated Values</p>
            <Input
              placeholder=""
              onChange={(e) => setskinfoKidTwo(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Pre-school/School/College/University Name of Kid 3
            </h4>
            <p>Please Enter Comma Seperated Values</p>
            <Input
              placeholder=""
              onChange={(e) => setskinfoKidThree(e.target.value)}
              required
              fullWidth
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerAboutkid;
