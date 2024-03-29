import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import HomeInfo from "./HomeInfo";
import { ActionButtons } from "../../components";
const HomeInfoStructure = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const [check, setCheck] = useState(false);
  const [loading,setLoading]=useState(false)
  const [homeInfo, sethomeInfo] = useState({
  
    address : "",
    location : "",
    PropertyAge : "",
    configuration : "",
    carpetArea : "",
    quotedPrice : "",
    floorNumber : "",
    ownerType : "",
    washrooms : "",
    washingAreaAttachedTo :"",
    applianceIncludedKitchen :"",
    applianceIncludedLivingRoom :"",
    applianceIncludedBedroom1 :"",
    applianceIncludedBedroom2 :"",
    applianceIncludedWashroom :"",
    fixedSystems :"",
    fireFightingSystem :"",
    viewFromWindowRating : "",
    viewFromWindow :"",
    mainDoorDirection : "",
    kitchenDirection : "",
    kitchenSinkDirection : "",
    mandirDirection : "",
    bedroom1Direction : "",
    bedroom2Direction : "",
    washroom1Direction : "",
    washroom2Direction : "",
    washroom3Direction : "",
    mainDoorLarger : "",
    wellLitEntrance : "",
    washroomNearMainEntrance : "",
    hobNextToSink : "",
    poojaRoomWallNotWithWashroom : "",
    numberOfFourWheelerParking : "",
    numberOfTwoWheelerParking : "",
    ParkingType : "",
    parkingEasyToAccess : "",
    highNoiseLevel : "",
    peopleProfession : "",
    frequentElderlyActivities : "",
    frequentChildrenActivities : "",
    
  });
  const successNotify = () =>
    toast.success("form filled Successfully", {
      position: "bottom-center",
    });
  const failedNotify = () =>
    toast.error("something went wrong", {
      position: "bottom-center",
    });
  const navigate = useNavigate();

  const Questions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15,16, 17, 18, 19, 20,
    21 ,22, 23, 24, 25, 26, 27, 28, 29, 30,
     31, 32, 33, 34, 35, 36, 37, 38, 39, 40,41
    
    //  42, 43, 44, 45, 46, 47, 48,
  ];

  const mandatory = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15,16, 17, 18, 19, 20,
    21 ,22, 23, 24, 25, 26, 27, 28, 29, 30,
     31, 32, 33, 34, 35, 36, 37, 38, 39, 40,41
  ];
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const body = {
        address : homeInfo.address, 
        location : homeInfo.location ,
        age : +homeInfo.PropertyAge ,
        configuration : homeInfo.configuration ,
        carpet_area : +homeInfo.carpetArea ,
        quoted_price : +homeInfo.quotedPrice ,
        floor_number : +homeInfo.floorNumber ,
        owner_type : +homeInfo.ownerType ,
        washrooms :homeInfo.washrooms ,
        washing_area_attached_to :homeInfo.washingAreaAttachedTo ,
        appliance_included_kitchen :homeInfo.applianceIncludedKitchen ,
        appliance_included_living_room :homeInfo.applianceIncludedLivingRoom ,
        appliance_included_bedroom_1 :homeInfo.applianceIncludedBedroom1 ,
        appliance_included_bedroom_2 :homeInfo.applianceIncludedBedroom2 ,
        appliance_included_washroom :homeInfo.applianceIncludedWashroom ,
        fixed_systems :homeInfo.fixedSystems ,
        fire_fighting_system :homeInfo.fireFightingSystem ,
        // living_room_flooring : +homeInfo.livingRoomFlooring ,
        // kitchen_flooring : +homeInfo.kitchenFlooring ,
        // bedroom_1_flooring : +homeInfo.bedroom1Flooring ,
        // bedroom_2_flooring : +homeInfo.bedroom2Flooring ,
        // washroom_flooring : +homeInfo.washroomFlooring , 
        // lobby_flooring : +homeInfo.lobbyFlooring ,
        // balcony_flooring : +homeInfo.balconyFlooring ,
        view_from_window_rating : +homeInfo.viewFromWindowRating ,
        view_from_window :homeInfo.viewFromWindow ,
        main_door_direction : +homeInfo.mainDoorDirection ,
        kitchen_direction : +homeInfo.kitchenDirection ,
        kitchen_sink_direction : +homeInfo.kitchenSinkDirection ,
        mandir_direction : +homeInfo.mandirDirection ,
        bedroom_1_direction : +homeInfo.bedroom1Direction ,
        bedroom_2_direction : +homeInfo.bedroom2Direction ,
        washroom_1_direction : +homeInfo.washroom1Direction ,
        washroom_2_direction : +homeInfo.washroom2Direction ,
        washroom_3_direction : +homeInfo.washroom3Direction ,
        main_door_larger : homeInfo.mainDoorLarger ,
        well_lit_entrance : homeInfo.wellLitEntrance ,
        washroom_near_main_entrance : homeInfo.washroomNearMainEntrance ,
        hob_next_to_sink : homeInfo.hobNextToSink ,
        pooja_room_wall_not_with_washroom : homeInfo.poojaRoomWallNotWithWashroom ,
        number_of_four_wheeler_parking : +homeInfo.numberOfFourWheelerParking ,
        number_of_two_wheeler_parking : +homeInfo.numberOfTwoWheelerParking ,
        parking_type : homeInfo.ParkingType ,
        parking_easy_to_access : homeInfo.parkingEasyToAccess ,
        high_noise_level : homeInfo.highNoiseLevel ,
        people_profession : +homeInfo.peopleProfession ,
        frequent_elderly_activities : homeInfo.frequentElderlyActivities ,
        frequent_children_activities : homeInfo.frequentChildrenActivities ,
    };
    const data = {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    axios
      .put(`api/tasks/${localStorage.getItem("task_id")}/home-info/`, body, {
        headers: data,
      })
      .then((res) => {
        successNotify();
        navigate("/dashboard", { replace: true });
        const status = { status: "C" };
        axios.patch(`api/tasks/${localStorage.getItem("task_id")}/`, status, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      })
      .catch((err) => {
        failedNotify();
        setLoading(false)
      });
  };

  let keysArr = Object.keys(homeInfo);
 
  console.log(keysArr, "keysArr >>>>",questionCount,"ques",homeInfo[keysArr[questionCount-1]]);

  return (
    <div>
      <ToastContainer autoClose={1500} />
      <div className="p-3 text-center mt-10 ">
        <h2 className="text-sky-600 text-2xl font-bold">Know Your Home</h2>
        <div className="text-left">
          <div className="progress"></div>
          <div className="font-normal text-right pr-3 mt-10">
            Total Questions: {Questions.length}
          </div>
          <div className="form-container border-4 border-solid shadow-2xl shadow-indigo-500/40 rounded-2xl border-zinc-400   py-10 px-5 ">
            <div className="main-body  ">
              <HomeInfo
                questionCount={questionCount}
                homeInfo={homeInfo}
                sethomeInfo={sethomeInfo}
                check={check}
              />
            </div>
          </div>
          <ActionButtons
            setCheck={setCheck}
            setQuestionCount={setQuestionCount}
            onSubmit={onSubmit}
            mandatory={mandatory}
            questionCount={questionCount}
            loading={loading}
            objName={homeInfo}
            finishNo={41}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeInfoStructure;
