import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import CommunityLeader from "./forms/neibourhoodForms/CommunityLeader";
import Neighbourhood from "./forms/neibourhoodForms/Neighbourhood";
import PhotoUpload from "./forms/neibourhoodForms/PhotoUpload";
import PlaceInfo from "./forms/neibourhoodForms/PlaceInfo";
import Dashboard from "./pages/Dashboard";
import FormList from "./pages/FormList";
import Login from "./pages/Login";
import TodaysTask from "./pages/TodaysTask";
import Navbar from "./components/Navbar";
import TaskHistory from "./history/TaskHistory";
import PendingTask from "./pendingtasks/PendingTask";
import PendingList from "./pendingtasks/PendingList";
import KnowYourSociety from "./forms/societyForm/KnowYourSociety";
import Amenities from "./forms/societyForm/Amenities";
import SecuritySystem from "./forms/societyForm/SecuritySystem";
import Demographic from "./forms/societyForm/Demographic";
import SocietySurrounding from "./forms/societyForm/SocietySurrounding";
import Parking from "./forms/societyForm/Parking";
import SellerInfo from "./forms/sellerForm/SellerInfo";
import SellerProfession from "./forms/sellerForm/SellerProfession";
import SellerLikesAndInterest from "./forms/sellerForm/SellerLikesAndInterest";
import SellerAboutkid from "./forms/sellerForm/SellerAboutkid";
import SellerEducation from "./forms/sellerForm/SellerEducation";
import SellerTravel from "./forms/sellerForm/SellerTravel";
import ConnectionWithHouse from "./forms/sellerForm/ConnectionWithHouse";
import Cuisine from "./forms/sellerForm/Cuisine";
import ImmediateNeigbour from './forms/sellerForm/ImmediateNeigbour'


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isloggedIn, setIsloggedIn] = useState(false);
  const navigate = useNavigate();
  let TOKEN = "";

  const createAxiosResponseInterceptor=()=> {
    const interceptor = axios.interceptors.response.use(
        response => response,
        async error => {
            // Reject promise if usual error
            if (error.response.status !== 401) {
                return Promise.reject(error);
            }
            
            /* 
             * When response code is 401, try to refresh the token.
             * Eject the interceptor so it doesn't loop in case
             * token refresh causes the 401 response
             */
            axios.interceptors.response.eject(interceptor);
  
            try {
            try {
              const response = await axios.post('/api/token/refresh/', {
                'refresh': localStorage.getItem('RefreshToken')
              });
              localStorage.setItem('token',response.access)
              error.response.config.headers['Authorization'] = 'Bearer ' + response.data.access_token;
              return await axios(error.response.config);
            } catch (error_1) {
              // destroyToken();
              this.router.push('/login');
              return await Promise.reject(error_1);
            }
          } finally { }
        }
    );
  }





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
    .then((response) => {
      setTasks(response.data);
    })
    .catch((err) => {
      console.log(err)
      createAxiosResponseInterceptor()
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
      <Route path="/" element={isloggedIn? <Dashboard /> : <Login setIsloggedIn={setIsloggedIn} />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="todays-task" element={<TodaysTask tasks={tasks} handleTodaysTask={handleTodaysTask} />}/>
        <Route path="pending-task" element={<PendingTask tasks={tasks}  handlePendingTask={handlePendingTask}/>}/>
        <Route path="history-task" element={<TaskHistory  tasks={tasks} />}/>
        <Route path="form-list" element={<FormList  />} />
        <Route path="neighbourhood-form" element={<Neighbourhood  />} />
        <Route path="placeinfo-form" element={<PlaceInfo  />} />
        <Route path="photoupload-form" element={<PhotoUpload  />} />
        <Route path="communityleader-form" element={<CommunityLeader   />} />
        <Route path="sellerinfo-form" element={<SellerInfo  />} />
        <Route path="knowyoursociety-form" element={<KnowYourSociety   />} />
        <Route path="pending-list" element={<PendingList   />} /> 
        {/* <Route path="amenities-form" element={<Amenities  />} />
        <Route path="securitysystem-form" element={<SecuritySystem  />} />
        <Route path="demographic-form" element={<Demographic  />} />
        <Route path="societysurrounding-form" element={<SocietySurrounding  />} />
        <Route path="parking-form" element={<Parking  />} />
        <Route path="sellerpro-form" element={<SellerProfession  />} />
        <Route path="selleredu-form" element={<SellerEducation  />} />
        <Route path="sellertravel-form" element={<SellerTravel  />} />
        <Route path="sellerlikesandinterest-form" element={<SellerLikesAndInterest  />} />
        <Route path="selleraboutkid-form" element={<SellerAboutkid  />} />
        <Route path="cuisine-form" element={<Cuisine  />} />
        <Route path="connectionwithhouse-form" element={<ConnectionWithHouse  />} />
        <Route path="immediateneigbour-form" element={<ImmediateNeigbour  />} />*/}
      </Routes>
      
    </div>
  );
};

export default App;

