import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const FormList = () => {
  let navigate= useNavigate()
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
        .patch(`tasks/${localStorage.getItem("property_id")}/`, body, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          successNotify()
         
        }).catch((err)=>{
          failedNotify()
        })
    }else{
      failedNotify()
    }
  };



  const successNotify = () => toast.success("form Submitted",{
    position:'bottom-center'
  });
  const failedNotify = () => toast.error("complete all the form requirement",{
    position:'bottom-center'
  });
  const getData = () => {
    axios
      .get(
        `https://operations.roushik.com/api/tasks/${localStorage.getItem(
          "property_id"
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
        `https://operations.roushik.com/api/tasks/${localStorage.getItem(
          "property_id"
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
        `https://operations.roushik.com/api/tasks/${localStorage.getItem(
          "property_id"
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
        `https://operations.roushik.com/api/tasks/${localStorage.getItem(
          "property_id"
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
  }, [localStorage.getItem("property_id")]);

  return (
    <div className="bg-slate-200">
      <div className=" m-1 mt-5  ">

          <div onClick={()=>{navigate('/neighbourhood-form',{replace: true})}} className="border-2 border-slate-600 bg-white rounded-lg mt-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Neighbourhood Information</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {nhFormCount.length === null ? 0 : nhFormCount.length}
              </span>
              /7
            </p>
          </div>
        
          <div  onClick={()=>{navigate('/placeinfo-form',{replace: true})}} className="border-2 border-slate-600 bg-white rounded-lg mt-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Place Information</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>{Boolean(piFormCount.cleanliness) === true ? 1 : 0}</span>/1
            </p>
          </div>
        
          <div  onClick={()=>{navigate('/photoupload-form',{replace: true})}} className="border-2 border-slate-600 bg-white rounded-lg mt-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Add Photo</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>{Boolean(puFormCount.entrance) === true ? 1 : 0}</span>/1
            </p>
          </div>
     
          <div  onClick={()=>{navigate('/communityleader-form',{replace: true})}} className="border-2 border-slate-600 bg-white rounded-lg mt-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Community Leader</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length}
              </span>
              /1
            </p>
          </div>
          <div onClick={()=>{navigate('/knowyoursociety-form',{replace: true})}} className="border-2 border-slate-600 bg-white rounded-lg mt-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Know Your Society</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {/* {clFormCount.length === null ? 0 : clFormCount.length} */}
              </span>
              /1
            </p>
          </div>
          <div onClick={()=>{navigate('/sellerinfo-form',{replace: true})}} className="border-2 border-slate-600 bg-white rounded-lg my-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Know Your Seller</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {/* {clFormCount.length === null ? 0 : clFormCount.length} */}
              </span>
              /1
            </p>
          </div>
       








































        {/* <Link to="/amenities-form">
          <div className="border-2 border-slate-600 bg-white rounded-lg mt-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Amenities</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length}
              </span>
              /1
            </p>
          </div>
        </Link>
        <Link to="/securitysystem-form">
          <div className="border-2 border-slate-600 bg-white rounded-lg mt-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Security System</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length}
              </span>
              /1
            </p>
          </div>
        </Link>
        <Link to="/demographic-form">
          <div className="border-2 border-slate-600 bg-white rounded-lg mt-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Demographic </h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length}
              </span>
              /1
            </p>
          </div>
        </Link>


        <Link to="/societysurrounding-form">
          <div className="border-2 border-slate-600 bg-white rounded-lg mt-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Society Surrounding</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length}
              </span>
              /1
            </p>
          </div>
        </Link>
        <Link to="/parking-form">
          <div className="border-2 border-slate-600 bg-white rounded-lg my-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Parking</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length}
              </span>
              /1
            </p>
          </div>
        </Link>
    */}
     
   
        {/* <Link to="/sellerpro-form">
          <div className="border-2 border-slate-600 bg-white rounded-lg my-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Seller Profession</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length} 
              </span>
              /1
            </p>
          </div>
        </Link>
        <Link to="/selleredu-form">
          <div className="border-2 border-slate-600 bg-white rounded-lg my-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Seller Education</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length}
              </span>
              /1
            </p>
          </div>
        </Link>

        <Link to="/sellerlikesandinterest-form">
          <div className="border-2 border-slate-600 bg-white rounded-lg my-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Seller Likes and Interest</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length}
              </span>
              /1
            </p>
          </div>
        </Link>

        <Link to="/selleraboutkid-form">
          <div className="border-2 border-slate-600 bg-white rounded-lg my-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Seller About Kids</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length}
              </span>
              /1
            </p>
          </div>
        </Link>

        <Link to="/sellertravel-form">
          <div className="border-2 border-slate-600 bg-white rounded-lg my-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Seller Travel</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length}
              </span>
              /1
            </p>
          </div>
        </Link>

        <Link to="/cuisine-form">
          <div className="border-2 border-slate-600 bg-white rounded-lg my-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Seller  Cuisine</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length}
              </span>
              /1
            </p>
          </div>
        </Link>

        <Link to="/immediateneigbour-form">
          <div className="border-2 border-slate-600 bg-white rounded-lg my-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Seller Immediate Neighbour</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length}
              </span>
              /1
            </p>
          </div>
        </Link>

        <Link to="/connectionwithhouse-form">
          <div className="border-2 border-slate-600 bg-white rounded-lg my-2 p-2 flex justify-between">
            <h6 className="font-bold pt-1">Seller Connection With House</h6>
            <p className="border-2 border-black rounded-3xl p-1">
              <span>
                {clFormCount.length === null ? 0 : clFormCount.length}
              </span>
              /1
            </p>
          </div>
        </Link> */}



        <div className="border-2 sticky text-center border-sky-600 bottom-2 right-5 bg-sky-600 px-4 py-2 rounded-md">
        <button onClick={checkSubmit} className="text-white  font-bold">
          Submit
        </button>
      </div>
      </div>
      <ToastContainer />
    
    </div>
  );
};

export default FormList;
