import { Input } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

import AddSeller from "./AddSeller";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddSellerStructure = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [errormsg, setErrormsg] = useState(false);

  const [addsellerDetail, setAddSellerDetail] = useState({
    fullname: "",
    address: "",
    gender: "",
    contactno: "",
    email: "",
    age: "",
  });

  const Questions = [
    "Seller's Full Name :",
    "Seller's Contact No :",
    "Seller's Email Id :",
    "Seller's Full Address :",
    "Seller's Gender :",
    "Seller's Age :",
  ];
 

  const navigate = useNavigate();
  const successNotify = () =>
    toast.success("Seller Added Successfully", {
      position: "bottom-center",
    });
  const failedNotify = (msg) =>
    toast.error(` ${msg}`, {
      position: "bottom-center",
    });
  const onSubmit = () => {
  
    const data = {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    if (
      addsellerDetail.fullname == "" ||
      addsellerDetail.address === "" ||
      addsellerDetail.gender == "" ||
      addsellerDetail.contactno == "" ||
      addsellerDetail.email == "" ||
      addsellerDetail.age == ""
    ) {
      setErrormsg(true);
      var msg = "Please fill all answers";
      failedNotify(msg);
    }else if(errormsg == false) {
      const body = {
        name: addsellerDetail.fullname,
        email: addsellerDetail.email,
        contact: addsellerDetail.contactno,
        gender: addsellerDetail.gender,
        age: +addsellerDetail.age,
        address: addsellerDetail.address,
      };

      axios.post(`/api/sellers/`, body, { headers: data })
      .then((res) => {
        
        successNotify();
        navigate("/dashboard", { replace: true });
      }) .catch((err) => {
        var msg = err.response.data.contact[0]
        
        failedNotify(msg)
     
      });
    }

  };

  return (
    <div className="">
      <ToastContainer autoClose={1500} />
      <div className="p-3 text-center mt-10 bg-slate-100">
        <h2 className="text-sky-600 text-2xl font-bold">Add Seller</h2>
        <div className="text-left">
          <div className="progress"></div>
          <div className="font-normal text-right pr-3 mt-10">
            Total Questions: {Questions.length}
          </div>
          <div className="form-container border-4 border-solid shadow-2xl shadow-indigo-500/40 rounded-2xl border-zinc-400   py-10 px-5 ">
            <div className="header flex font-semibold text-xl text-sky-700 ">
              <h1 className="mr-2">{questionCount + 1} .</h1>
              <h1 className="">{Questions[questionCount]}</h1>
            </div>
            <div className="main-body mt-10">
              <AddSeller
                questionCount={questionCount}
                addsellerDetail={addsellerDetail}
                setAddSellerDetail={setAddSellerDetail}
              />
        
            </div>
          </div>
          <div className="footer text-center m-5 mt-10 flex justify-around">
            <button
              className="border-2 border-sky-700 px-3 py-1 rounded-lg text-sky-700 font-medium"
              disabled={questionCount == 0}
              onClick={() => {
                setQuestionCount((currentPage) => currentPage - 1);
                setErrormsg(false);
              }}
            >
              previous
            </button>
            {questionCount == 5 ? (
              <button
                className="border-2 border-sky-600 bg-sky-700 px-5 py-2 rounded-lg text-white font-medium"
                onClick={onSubmit}
              >
                finish
              </button>
            ) : (
              <button
                className="border-2 border-sky-600 bg-sky-700 px-5 py-2 rounded-lg text-white font-medium"
                disabled={questionCount == Questions.length - 1}
                onClick={() => {
                  setQuestionCount((currentPage) => currentPage + 1);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSellerStructure;

// <div>
// <div className="quesion border-2 border-slate-500 p-3 rounded-lg" >
// <h2 className="font-semibold" >Seller's Name ?</h2>
// <Input placeholder="Enter Full Name" fullWidth />

// </div>
// </div>
