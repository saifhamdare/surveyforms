import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import CommunityLeader from "./forms/neibourhoodForms/comunityleader/CommunityLeader";
import Neighbourhood from "./forms/neibourhoodForms/neighbourhood/Neighbourhood";
import PhotoUpload from "./forms/neibourhoodForms/photoupload/PhotoUpload";
import PlaceInfo from "./forms/neibourhoodForms/placeinfo/PlaceInfo";
import Dashboard from "./pages/Dashboard";
import FormList from "./pages/FormList";
import Login from "./pages/Login";
import TodaysTask from "./pages/TodaysTask";
import Navbar from "./components/Navbar";
import AddSellerStructure from "./forms/addseller/AddSellerStructure";
import TaskHistory from "./history/TaskHistory";
import PendingTask from "./pendingtasks/PendingTask";
import PendingList from "./pendingtasks/PendingList";
import KnowYourSociety from "./forms/societyForm/KnowYourSociety";
import SellerInfo from "./forms/sellerForm/SellerInfo";
import EditNeighbourhood from "./forms/editforms/EditNeighbourhood";
import EditFormList from "./forms/editforms/EditFormList";
import SearchProperty from "./pages/SearchProperty";
import SearchSeller from "./pages/SearchSeller";

import NeighbourhoodStructure from "./forms/neibourhoodForms/neighbourhood/NeighbourhoodStructure";
import CommunityLeaderStructure from "./forms/neibourhoodForms/comunityleader/CommunityLeaderStructure";
import PhotoUploadStructure from "./forms/neibourhoodForms/photoupload/PhotoUploadStructure";
import PlaceInfoStructure from "./forms/neibourhoodForms/placeinfo/PlaceInfoStructure";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isloggedIn, setIsloggedIn] = useState(false);
  const navigate = useNavigate();
  let TOKEN = "";

  const handleTodaysTask = (id) => {
    localStorage.setItem("task_id", id);
  };
  const handlePendingTask = (id) => {
    localStorage.setItem("task_id", id);
  };

  // list of properties  for todays tasks
  const getTasks = (_token) => {
    axios
      .get("api/tasks/", {
        headers: { Authorization: `Bearer ${_token}` },
      })
      .then((response) => {
        setTasks(response.data);
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
    if (isloggedIn === true) {
      getTasks(TOKEN);
    }
  }, [isloggedIn]);

  return (
    <div className="App  ">
      <Navbar isloggedIn={isloggedIn} />
      <div className="xl:px-80 2xl:px-96 lg:px-52">
        <Routes>
          <Route
            path="/"
            element={
              isloggedIn ? (
                <Dashboard />
              ) : (
                <Login setIsloggedIn={setIsloggedIn} />
              )
            }
          />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="todays-task"
            element={
              <TodaysTask tasks={tasks} handleTodaysTask={handleTodaysTask} />
            }
          />
          <Route
            path="pending-task"
            element={
              <PendingTask
                tasks={tasks}
                handlePendingTask={handlePendingTask}
              />
            }
          />
          <Route path="history-task" element={<TaskHistory tasks={tasks} />} />
          <Route path="form-list" element={<FormList />} />
          
          <Route path="addseller" element={<AddSellerStructure />} />
          {/* <Route path="addseller" element={<AddSeller />} /> */}
          <Route path="searchproperty" element={<SearchProperty />} />
          <Route path="searchseller" element={<SearchSeller />} />

          {/* <Route path="neighbourhood-form" element={<Neighbourhood />} /> */}
          <Route path="neighbourhood-form" element={<NeighbourhoodStructure />} />
          <Route path="communityleader-form" element={<CommunityLeaderStructure />} />
          
          {/* <Route path="placeinfo-form" element={<PlaceInfo />} /> */}
          <Route path="placeinfo-form" element={<PlaceInfoStructure />} />
          {/* <Route path="photoupload-form" element={<PhotoUpload />} /> */}
          <Route path="photoupload-form" element={<PhotoUploadStructure />} />

          <Route path="edit-formlist" element={<EditFormList />} />
          <Route path="editneighbourhood-form" element={<EditNeighbourhood />} />
          <Route path="sellerinfo-form" element={<SellerInfo />} />
          <Route path="knowyoursociety-form" element={<KnowYourSociety />} />
          <Route path="pending-list" element={<PendingList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
