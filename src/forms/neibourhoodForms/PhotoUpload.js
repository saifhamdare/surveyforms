import { Input } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const PhotoUpload = () => {

  const [puentrance, setEntrance] = useState('');
  const [puapproachroad, setApproachRoad] = useState('');
  const [pumaxView, setMaxView] = useState('');
  const [puareaNear, setAreaNear] = useState('');
  const [pubroken1, setBroken1] = useState('');
  const [pubroken2, setBroken2] = useState('');

  const navigate = useNavigate();
  
  const successNotify = () => toast.success("photos uploaded Successfully",{
    position:'bottom-center'});
    
  const failedNotify = () => toast.error("something went wrong",{
    position:'bottom-center'});


  const onSubmit = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("entrance", puentrance);
    formdata.append("approach_road", puapproachroad);
    formdata.append("society_view", pumaxView);
    formdata.append("cleanliness", puareaNear);
    formdata.append("broken_1", pubroken1);
    formdata.append("broken_2", pubroken2);
    const data = {

      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios.put(
      `https://operations.roushik.com/api/tasks/${localStorage.getItem('property_id')}/photos/`,
      formdata, 
      { headers: data }
    )
    .then((res)=> {
      successNotify()
      navigate('/form-list')
    }) 
    .catch((err) => {
      failedNotify()
      console.log(err);
    });   
  };

  return (
    <div className="bg-slate-200">
      <ToastContainer autoClose={1500}/>
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
          Photo Upload
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          action=""
        >
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Upload image of entrance containing name.{" "}
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {setEntrance(e.target.files[0]); console.log(e.target.files[0])}}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Upload image of approach road.{" "}
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setApproachRoad(e.target.files[0])}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Upload image of society's maximum view from outside.{" "}
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setMaxView(e.target.files[0])}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Upload image of any visible garbage dump / clean area near the
              entrance.{" "}
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setAreaNear(e.target.files[0])}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Upload image of any broken area/ leakages in society boundary.
              (pic 1){" "}
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setBroken1(e.target.files[0])}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Upload image of any broken area/ leakages in society boundary.
              (pic 2)
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setBroken2(e.target.files[0])}
              placeholder="no."
              fullWidth
            />
          </div>
          {/* {showConfirmation ? <div className="m-5 p-2 text-center bg-green-500 rounded-xl">
              <p className=" text-white" >uploaded images Successfully</p>
            </div>
          : ''
        } */}
          <div className="border-2  border-sky-400 bg-sky-300 absolute right-5 px-6 py-2 my-4 rounded-md">
            <button className=" text-white font-bold" type="submit">
              Save
            </button>
          </div>
          <div className="border-2 border-sky-600 absolute left-5 bg-white px-6 py-2 my-4  rounded-md">
            <button onClick={()=>  {
               let result= window.confirm("you will you will loose all your data");
               if(result===true){
                 navigate("/form-list");
               }
          }} className="text-sky-600 font-bold" >
              Back
            </button>
          </div>
        </form>
      </div>


    </div>
  );
};

export default PhotoUpload;
