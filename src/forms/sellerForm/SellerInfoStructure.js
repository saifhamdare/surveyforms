
import React, { useState } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SellerInfoStructure = () => {
    const [questionCount, setQuestionCount] = useState(1);
    const navigate = useNavigate();
    const [neighbourhoodInfo, setNeighbourhoodInfo] = useState({
      fullName: "",
      mobileNo: "",
      gender: "",
      profession: "",
      redevelopment: "",
      reputation: "",
      societyManagement: "",
      peopleInSociety: "",
      complaint: "",
      socialEvents: "",
      deliveringEssential: "",
      deliveryServices: "",
      policeComplaints: "",
      sellingProperty: "",
      traffic: "",
      waterSupply: "",
      electricityBreakDown: "",
      older: "",
      children: "",
      oneBHK: "",
      twoBHK: "",
      threeBHK: "",
      strayDogs: "",
      kindOfProfessions: "",
      easyToGet: "",
    });
  
    const Questions = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ];
    
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
    if(
      neighbourhoodInfo.fullName =="" ||
      neighbourhoodInfo.mobileNo =="" ||
      neighbourhoodInfo.gender =="" ||
      neighbourhoodInfo.profession =="" ||
      neighbourhoodInfo.redevelopment =="" ||
      neighbourhoodInfo.reputation =="" ||
      neighbourhoodInfo.complaint =="" ||
      neighbourhoodInfo.peopleInSociety =="" ||
      neighbourhoodInfo.societyManagement =="" ||
      neighbourhoodInfo.deliveryServices =="" ||
      neighbourhoodInfo.deliveringEssential =="" ||
      neighbourhoodInfo.socialEvents =="" ||
      neighbourhoodInfo.children =="" ||
      neighbourhoodInfo.older =="" ||
      neighbourhoodInfo.electricityBreakDown =="" ||
      neighbourhoodInfo.waterSupply =="" ||
      neighbourhoodInfo.traffic =="" ||
      neighbourhoodInfo.sellingProperty =="" ||
      neighbourhoodInfo.policeComplaints =="" ||
      neighbourhoodInfo.easyToGet =="" ||
      neighbourhoodInfo.kindOfProfessions =="" ||
      neighbourhoodInfo.strayDogs =="" ||
      neighbourhoodInfo.oneBHK =="" ||
      neighbourhoodInfo.twoBHK =="" ||
      neighbourhoodInfo.threeBHK =="" ){
        var msg="fill complete form"
        failedNotify(msg)
    }
        const body = {
            full_name: neighbourhoodInfo.fullName,
            mobile_number: neighbourhoodInfo.mobileNo,
            gender: neighbourhoodInfo.gender,
            profession: +neighbourhoodInfo.profession,
            redevelopment_planned: +neighbourhoodInfo.redevelopment,
            reputation: +neighbourhoodInfo.reputation,
            complaint: +neighbourhoodInfo.complaint,
            people_type: +neighbourhoodInfo.peopleInSociety,
            society_management_friendly: +neighbourhoodInfo.societyManagement,
            provide_delivery: +neighbourhoodInfo.deliveryServices,
            essential_shops: +neighbourhoodInfo.deliveringEssential,
            social_events: +neighbourhoodInfo.socialEvents,
            playful_children: +neighbourhoodInfo.children,
            old_people: +neighbourhoodInfo.older,
            uninterrupted_electricity: +neighbourhoodInfo.electricityBreakDown,
            uninterrupted_water: +neighbourhoodInfo.waterSupply,
            traffic: +neighbourhoodInfo.traffic,
            people_selling_property: +neighbourhoodInfo.sellingProperty,
            police_complaints: neighbourhoodInfo.policeComplaints,
            access_to_helpers: +neighbourhoodInfo.easyToGet,
            people_profession: +neighbourhoodInfo.kindOfProfessions,
            stray_animals: +neighbourhoodInfo.strayDogs,
            approx_1_bhk_price: +neighbourhoodInfo.oneBHK,
            approx_2_bhk_price: +neighbourhoodInfo.twoBHK,
            approx_3_bhk_price: +neighbourhoodInfo.threeBHK,
          };
        const data = {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
        axios
          .post(
            `api/tasks/${localStorage.getItem("task_id")}/neighbourhood/`,
            body,
            { headers: data })
          .then((res) => {
            successNotify();
            navigate("/form-list", { replace: true });
            const status = { status: "P" };
            axios.patch(`api/tasks/${localStorage.getItem("task_id")}/`, status, {
              headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
          })
          // .catch((err) => failedNotify());
      };
  return (
        <div className="">
          <ToastContainer autoClose={1500} />
          <div className="p-3 text-center mt-10 bg-slate-100">
            <h2 className="text-sky-600 text-2xl font-bold">
              Neighbourhood Information
            </h2>
            <div className="text-left">
              <div className="progress"></div>
              <div className="font-normal text-right pr-3 mt-10">
                Total Questions: {Questions.length}
              </div>
              <div className="form-container border-4 border-solid shadow-2xl shadow-indigo-500/40 rounded-2xl border-zinc-400   py-10 px-5 ">
             
                <div className="main-body  ">
                
                  <Neighbourhood
                    questionCount={questionCount}
                    setQuestionCount={setQuestionCount}
                    neighbourhoodInfo={neighbourhoodInfo}
                    setNeighbourhoodInfo={setNeighbourhoodInfo}
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
                    disabled={questionCount == Questions.length }
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
 
    
  )
}

export default SellerInfoStructure