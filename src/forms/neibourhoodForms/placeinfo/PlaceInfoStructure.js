import React, { useState } from "react";
import PlaceInfo from "./PlaceInfo";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ActionButtons } from "../../../components";
const PlaceInfoStructure = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const [check, setCheck] = useState(false);
  const [loading,setLoading]=useState(false);
  const [placeInfo, setPlaceInfo] = useState({
    geoCode: "",
    cookslivingNearby: "",
    surroundingArea: "",
    highwayFromSociety: "",
    localMarketName: "",
    localMarketDistance: "",
    groceryStoresName: '',
    vegetablesStoresName: '',
    commercialEstablishments: "",
    vicinity: "",
    accessForVehicles: "",
    maintained: "",
    anyRepair: "",
    structureQuality: "",
    remark: "",
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

  const Questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const mandatory = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const body = {
      geo_location: placeInfo.geoCode,
      number_of_maids: +placeInfo.cookslivingNearby,
      cleanliness: +placeInfo.surroundingArea,
      time_to_highway: placeInfo.highwayFromSociety,
      market_name: placeInfo.localMarketName,
      market_distance: +placeInfo.localMarketDistance,
      top_grocery_stores:  placeInfo.groceryStoresName,
      top_vegetable_stores:  placeInfo.vegetablesStoresName,
      shops_within_society: placeInfo.commercialEstablishments,
      surrounding: +placeInfo.vicinity,
      easy_access_to_road: placeInfo.accessForVehicles,
      society_maintenance: +placeInfo.maintained,
      ongoing_maintenance: +placeInfo.anyRepair,
      structure_quality: +placeInfo.structureQuality,
      remarks: placeInfo.remark,
    };
    const data = {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    axios
      .put(`api/tasks/${localStorage.getItem("task_id")}/place-info/`, body, {
        headers: data,
      })
      .then((res) => {
        successNotify();
        navigate("/form-list", { replace: true });
        const status = { status: "P" };
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
  let keysArr = Object.keys(placeInfo);
 
  console.log(keysArr, "keysArr >>>>",questionCount,"ques",placeInfo[keysArr[questionCount-1]]);
  return (
    <div>
      <ToastContainer autoClose={1500} />
      <div className="p-3 text-center mt-10 ">
        <h2 className="text-sky-600 text-2xl font-bold">Place Information</h2>
        <div className="text-left">
          <div className="progress"></div>
          <div className="font-normal text-right pr-3 mt-10">
            Total Questions: {Questions.length}
          </div>
          <div className="form-container border-4 border-solid shadow-2xl shadow-indigo-500/40 rounded-2xl border-zinc-400   py-10 px-5 ">
            <div className="main-body  ">
              <PlaceInfo
                questionCount={questionCount}
                placeInfo={placeInfo}
                setPlaceInfo={setPlaceInfo}
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
            objName={placeInfo}
            finishNo={15}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceInfoStructure;
