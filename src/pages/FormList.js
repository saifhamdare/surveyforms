import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const FormList = () => {
  let navigate = useNavigate();
  const [nhFormCount, setnhFormCount] = useState("");
  const [piFormCount, setpiFormCount] = useState("");
  const [puFormCount, setpuFormCount] = useState("");
  const [clFormCount, setclFormCount] = useState("");

  const checkSubmit = () => {
    let nhform = nhFormCount.length;
    let piform = Boolean(piFormCount.cleanliness);
    let puform = Boolean(puFormCount.entrance);
    let clform = clFormCount.length;

    if (nhform === 8 && piform === true && puform === true && clform > 0) {
      const body = { status: "C" };
      axios
        .patch(`tasks/${localStorage.getItem("task_id")}/`, body, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          successNotify();
        })
        .catch((err) => {
          failedNotify();
        });
    } else {
      failedNotify();
    }
  };

  const successNotify = () =>
    toast.success("form Submitted", {
      position: "bottom-center",
    });
  const failedNotify = () =>
    toast.error("complete all the form requirement", {
      position: "bottom-center",
    });
  const getData = () => {
    axios
      .get(
        `api/tasks/${localStorage.getItem(
          "task_id"
        )}/neighbourhood/`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setnhFormCount(res.data);
      });
    //place info length
    axios
      .get(
        `api/tasks/${localStorage.getItem(
          "task_id"
        )}/place-info/`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setpiFormCount(res.data);
      });
    //photo upload info
    axios
      .get(
        `api/tasks/${localStorage.getItem(
          "task_id"
        )}/photos/`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setpuFormCount(res.data);
      });
    //community leader info
    axios
      .get(
        `api/tasks/${localStorage.getItem(
          "task_id"
        )}/community-leader/`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setclFormCount(res.data);
      });
  };

  useEffect(() => {
    // neighbourhood length info
    const update = getData();
    return update;
  }, [localStorage.getItem("task_id")]);

  return (
    <div className=" ">
      <div className=" p-1 pt-5   ">
        <div
         
          className="border-2 border-slate-600 bg-white rounded-lg mt-2 p-2 flex justify-between"
        >
          <h6  onClick={() => {
            navigate("/neighbourhood-form", { replace: true });
          }} className="font-bold pt-1">Neighbourhood Information</h6>
          <p onClick={()=> navigate("/edit-formlist", { replace: true })} className="border-2 border-black rounded-3xl p-1">
            <span>{nhFormCount.length === null ? 0 : nhFormCount.length}</span>
            /7
          </p>
        </div>

        <div
          onClick={() => {
            navigate("/placeinfo-form", { replace: true });
          }}
          className="border-2 border-slate-600 bg-white rounded-lg mt-2 p-2 flex justify-between"
        >
          <h6 className="font-bold pt-1">Place Information</h6>
          <p className="border-2 border-black rounded-3xl p-1">
            <span>{Boolean(piFormCount.cleanliness) === true ? 1 : 0}</span>/1
          </p>
        </div>

        <div
          onClick={() => {
            navigate("/photoupload-form", { replace: true });
          }}
          className="border-2 border-slate-600 bg-white rounded-lg mt-2 p-2 flex justify-between"
        >
          <h6 className="font-bold pt-1">Add Photo</h6>
          <p className="border-2 border-black rounded-3xl p-1">
            <span>{Boolean(puFormCount.entrance) === true ? 1 : 0}</span>/1
          </p>
        </div>

        <div
          onClick={() => {
            navigate("/communityleader-form", { replace: true });
          }}
          className="border-2 border-slate-600 bg-white rounded-lg mt-2 p-2 flex justify-between"
        >
          <h6 className="font-bold pt-1">Community Leader</h6>
          <p className="border-2 border-black rounded-3xl p-1">
            <span>{clFormCount.length === null ? 0 : clFormCount.length}</span>
            /1
          </p>
        </div>

 

        <div className="border-2 absolute text-right  bottom-5 right-5  ">
          <button
            onClick={checkSubmit}
            className="text-white  bg-sky-600 hover:bg-sky-700 font-bold px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FormList;
