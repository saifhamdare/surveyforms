import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CommunityLeader from "./CommunityLeader";
const CommunityLeaderStructure = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const navigate = useNavigate();
  const [errormsg, setErrormsg] = useState(false);
  const [communityLeaderInfo, setCommunityLeaderInfo] = useState({
    fullName: "",
    mobileNo: "",
    gender: "",
    emailId: "",
    reraNumber: "",
    address: "",

  });
  const Questions = [1, 2, 3, 4, 5, 6, ];
  const successNotify = () =>
    toast.success("form filled Successfully", {
      position: "bottom-center",
    });
  const failedNotify = (msg) =>
    toast.error(`${msg}`, {
      position: "bottom-center",
    });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      communityLeaderInfo.fullName == "" ||
      communityLeaderInfo.mobileNo == "" ||
      communityLeaderInfo.gender == "" ||
      communityLeaderInfo.emailId == "" ||
      communityLeaderInfo.address == "" ||
      communityLeaderInfo.reraNumber == "" 
    ) {
      var msg = "fill complete form";
      failedNotify(msg);
    }
    const body = {
      name: communityLeaderInfo.fullName,
      contact: communityLeaderInfo.mobileNo,
      gender: communityLeaderInfo.gender,
      email: communityLeaderInfo.emailId,
      rera_number: communityLeaderInfo.reraNumber,
      address: communityLeaderInfo.address,
    };
    const data = {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    axios
      .post(
        `api/channel-partners/`,
        body,
        { headers: data }
      )
      .then((res) => {
        successNotify();
        navigate("/dashboard", { replace: true });
        const status = { status: "P" };
        // axios.patch(`api/tasks/${localStorage.getItem("task_id")}/`, status, {
        //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` 
        // }
        // ,
        // });
      });
    //   .catch((err) => failedNotify(err));
  };
  return (
    <div className="">
      <ToastContainer autoClose={1500} />
      <div className="p-3 text-center mt-10 ">
        <h2 className="text-sky-600 text-2xl font-bold">Channel Partner</h2>
        <div className="text-left">
          <div className="progress"></div>
          <div className="font-normal text-right pr-3 mt-10">
            Total Questions: {Questions.length}
          </div>
          <div className="form-container border-4 border-solid shadow-2xl shadow-indigo-500/40 rounded-2xl border-zinc-400   py-10 px-5 ">
            <div className="main-body  ">
              <CommunityLeader
                questionCount={questionCount}
                communityLeaderInfo={communityLeaderInfo}
                setCommunityLeaderInfo={setCommunityLeaderInfo}
              />
            </div>
          </div>
          <div className="footer text-center m-5 mt-10 flex justify-around">
            <button
              className="border-2 border-sky-700 px-3 py-1 rounded-lg text-sky-700 font-medium"
              disabled={questionCount == 1}
              onClick={() => {
                setQuestionCount((currentPage) => currentPage - 1);
                setErrormsg(false);
              }}
            >
              previous
            </button>
            {questionCount == 6 ? (
              <button
                className="border-2 border-sky-600 bg-sky-700 px-5 py-2 rounded-lg text-white font-medium"
                onClick={onSubmit}
              >
                finish
              </button>
            ) : (
              <button
                className="border-2 border-sky-600 bg-sky-700 px-5 py-2 rounded-lg text-white font-medium"
                disabled={questionCount == Questions.length}
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

export default CommunityLeaderStructure;