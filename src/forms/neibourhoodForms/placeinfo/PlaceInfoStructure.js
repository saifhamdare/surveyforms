import React, { useState } from "react";
import PlaceInfo from "./PlaceInfo";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const PlaceInfoStructure = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const [isVendorQuestion, setIsVendorQuestion] = useState(false);
  const [placeInfo, setPlaceInfo] = useState({
    geoCode: "",
    cookslivingNearby: "",
    surroundingArea: "",
    highwayFromSociety: "",
    localMarketName: "",
    localMarketDistance: "",
    groceryStoresName: "",
    vegetablesStoresName: [],
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
  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      geo_location: placeInfo.geoCode,
      number_of_maids: placeInfo.cookslivingNearby,
      cleanliness: placeInfo.surroundingArea,
      time_to_highway: placeInfo.highwayFromSociety,
      market_name: placeInfo.localMarketName,
      market_distance: placeInfo.localMarketDistance,
      top_grocery_stores: placeInfo.groceryStoresName,
      top_vegetable_stores: placeInfo.vegetablesStoresName,
      shops_within_society: placeInfo.commercialEstablishments,
      surrounding: placeInfo.vicinity,
      easy_access_to_road: placeInfo.accessForVehicles,
      society_maintenance: placeInfo.maintained,
      ongoing_maintenance: placeInfo.anyRepair,
      structure_quality: placeInfo.structureQuality,
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
      });
  };

  return (
    <div>
      <ToastContainer autoClose={1500} />
      <div className="p-3 text-center mt-10 bg-slate-100">
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
                isVendorQuestion={isVendorQuestion}
              />
            </div>
          </div>
          <div className="footer text-center m-5 mt-10 flex justify-around">
            <button
              className="border-2 border-sky-700 px-3 py-1 rounded-lg text-sky-700 font-medium"
              disabled={questionCount == 1}
              onClick={() => {
                setQuestionCount((currentPage) => currentPage - 1);
              }}
            >
              previous
            </button>
            {questionCount == 25 ? (
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
                  if (questionCount === 8) {
                    setIsVendorQuestion(true);
                  }
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

export default PlaceInfoStructure;
