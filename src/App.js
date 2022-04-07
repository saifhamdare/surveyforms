import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CommunityLeader from "./forms/neibourhoodForms/CommunityLeader";
import Neighbourhood from "./forms/neibourhoodForms/Neighbourhood";
import PhotoUpload from "./forms/neibourhoodForms/PhotoUpload";
import PlaceInfo from "./forms/neibourhoodForms/PlaceInfo";
import Dashboard from "./pages/Dashboard";
import FormList from "./pages/FormList";
import Login from "./pages/Login";
import TodaysTask from "./pages/TodaysTask";
import Navbar from "./components/Navbar";
import axios from "axios";
import TaskHistory from "./history/TaskHistory";
import PendingTask from "./pendingtasks/PendingTask";
import PendingList from "./pendingtasks/PendingList";
import KnowYourSociety from "./forms/societyForm/KnowYourSociety";
import Amenities from "./forms/societyForm/Amenities";
import SecuritySystem from "./forms/societyForm/SecuritySystem";
import Demographic from "./forms/societyForm/Demographic";
import SocietySurrounding from "./forms/societyForm/SocietySurrounding";
import Parking from "./forms/societyForm/Parking";



const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isloggedIn, setIsloggedIn] = useState(false);
  const navigate = useNavigate();
  let TOKEN = "";


  //this commented code is for changing Status of a property N to P 
  const handleTodaysTask = (id) => {
    localStorage.setItem('property_id',id)
    // const status = { status: "P" };
    // axios
    //   .patch(`tasks/${localStorage.getItem("property_id")}/`, status, {
    //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    //   })
  };



  const handlePendingTask = (id) => {
    localStorage.setItem('property_id',id)
  
  };



  // list of properties  for todays tasks

const getTasks = (_token) => {
    axios
    .get("https://operations.roushik.com/api/tasks/", {
     headers: { Authorization: `Bearer ${_token}` },
    })
    .then((res) => {
      setTasks(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

 



  useEffect(() => {
    const _isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    setIsloggedIn(_isLoggedIn);
    if (!_isLoggedIn) {
      navigate("/");
    }
    TOKEN = localStorage.getItem("token");
    if(isloggedIn ===true){
    getTasks(TOKEN);
    }
  }, [isloggedIn]);




  return (
    <div className="App ">
       <Navbar isloggedIn={isloggedIn} />
      <Routes>
        <Route path="/" element={<Login setIsloggedIn={setIsloggedIn} />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="todays-task" element={<TodaysTask tasks={tasks} handleTodaysTask={handleTodaysTask} />}/>
        <Route path="pending-task" element={<PendingTask tasks={tasks}  handlePendingTask={handlePendingTask}/>}/>
        <Route path="history-task" element={<TaskHistory  tasks={tasks} />}/>
        <Route path="form-list" element={<FormList  />} />
        <Route path="neighbourhood-form" element={<Neighbourhood  />} />
        <Route path="placeinfo-form" element={<PlaceInfo  />} />
        <Route path="photoupload-form" element={<PhotoUpload  />} />
        <Route path="communityleader-form" element={<CommunityLeader   />} />
        <Route path="knowyoursociety-form" element={<KnowYourSociety   />} />
        <Route path="amenities-form" element={<Amenities  />} />
        <Route path="securitysystem-form" element={<SecuritySystem  />} />
        <Route path="demographic-form" element={<Demographic  />} />
        <Route path="societysurrounding-form" element={<SocietySurrounding  />} />
        <Route path="parking-form" element={<Parking  />} />
        <Route path="pending-list" element={<PendingList   />} />
      </Routes>
      
    </div>
  );
};

export default App;

