import React, { useState } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import KnowYourSociety from "./KnowYourSociety";
const KnowYourSocietyStructure = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const navigate = useNavigate();

  const [KnowYourSoceity, setKnowYourSoceity] = useState({
   
    FlatsAvailable:"",
    Floor:"",
    Landmarks:"",
    property:"",
    StuctureIncludes:"",
    PropertySubtype:"",
    CommercialEntities:"",
    lift:"",
    liftType:"",
    liftCondition:"",
    liftremark:"",
    liftLobby:"",
    liftLobbyCondition:"",
    liftlobbyremark:"",
    staircaseCondition:"",
    staircaseremark:"",
    EntranceLobbyCondition:"",
    entranceLobbyremark:"",
    conditonofMeetingRoom:"",
    MeetingRoomremark:"",
    ClubHouseCondition:"",
    ClubHouseremark:"",
    PlayGroundCondition:"",
    PlayGroundtype:"",
    PlayGroundremark:"",
    SwimmingPoolType:"",
    SwimmingPoolConditiion:"",
    SwimmingPoolRemark:"",
    JoggingTrackCondition:"",
    JoggingTrackRemark:"",
    ElectricitySupplier:"",
    ReflexologyCondition:"",
    ReflexologyRemark:"",
    CycleTrackCondition:"",
    CycleTrackRemark:"",
    Greenary:"",
    PublicAreaLighting:"",
    PublicAreaLightingCondition:"",
    PublicAreaLightingRemark:"",
    otherAmenities:"",
    otherAmenitiesCondition:"",
    otherAmenitiesRemark:"",
    DailyWasteCollecion:"",
    WaterStorage:"",
    WaterStoargeFacility:"",
    FireFightingSystem:"",
    SecurityService:"",
    SatelliteTV:"",
    Agency:"",
    liftphoto:"",
    liftlobbyphoto:"",
    staircasephoto:"",
    entrancelobbyephoto:"",
    MeetingRoomphoto:"",
    ClubHousephoto:"",
    PlayGroundphoto:"",
    SwimmingPoolphoto:"",
    JoggingTrackphoto:"",
    Reflexologyphoto:"",
    Greenaryphoto:"",
    PublicAreaLightingphoto:"",
    otherAmenitiesphoto:"",
    EatingHabitsAllowed:"",
    MajorityAgeGroup:"",
    MembersAllowed:"",
    MajorityMemberType:"",
    NationalityAllowed:"",
    BatchlorsAllowed:"",
    nonMarriedAllowed:"",
    ChildrenPlayingAround:"",
    ElderPeopleActivity:"",
    Celebration:"",
    SocietyMeetings:"",
    FunctionsAllowed:"",
    Cleanliness:"",
    CleanlinessMaintained:"",
    Handymen:"",
    Ramp:"",
    OneBHK:"",
    TwoBHK:"",
    ThreeBHK:"",
    Visitor:"",
    Noise:"",
    StrayDogs:"",
    Crack:"",
    Deed:"",
    
  });

  const Questions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21,22, 23, 24, 25,16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
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
if( confirm ){
    var msg="fill complete form"
    failedNotify(msg)
}
    const body = {
      lift_photo: ,
      lift_lobby_photo:,
      staircase_photo:,
      entrance_lobby_photo:,
      society_meeting_room_photo:,
      club_house_photo:,
      play_ground_photo:,
      swimming_pool_photo:,
      jogging_track_photo:,
      reflexology_path_photo:,
      cycling_track_photo:,
      greenery_photo:,
      public_area_lighting_photo:,
      number_of_flats: FlatsAvailable,
      floor: Floor,
      nearby_landmarks: Landmarks,
      building_type:property,
      structure_includes: StuctureIncludes,
      perimeter_includes: PropertySubtype,
      commercial_entities:CommercialEntities,
      lift: lift,
      lift_type: liftType,
      lift_condition:liftCondition,
      lift_remark:  liftremark,
      lift_lobby:liftLobby,
      lift_lobby_condition: liftLobbyCondition,
      lift_lobby_remark: liftlobbyremark,
      staircase_condition:staircaseCondition,
      staircase_remark: staircaseremark,
      entrance_lobby_condition:EntranceLobbyCondition,
      entrance_lobby_remark: entranceLobbyremark,
      society_meeting_room_condition: conditonofMeetingRoom,
      society_meeting_room_remark: MeetingRoomremark ,
      club_house_condition: ClubHouseCondition,
      club_house_remark: ClubHouseremark,
      play_ground_type: PlayGroundtype,
      play_ground_condition: PlayGroundCondition,
      play_ground_remark: PlayGroundremark,
      swimming_pool_type: SwimmingPoolType,
      swimming_pool_condition: SwimmingPoolConditiion,
      swimming_pool_remark: SwimmingPoolRemark,
      jogging_track_condition: JoggingTrackCondition,
      jogging_track_remark: JoggingTrackRemark,
      electricity_supplier: ElectricitySupplier,
      reflexology_path_condition: ReflexologyCondition,
      reflexology_path_remark: ReflexologyRemark,
      cycling_track_condition: CycleTrackCondition,
      cycling_track_remark: CycleTrackRemark,
      greenery: Greenary,
      public_area_lighting_condition: PublicAreaLightingCondition,
      public_area_lighting_remark: PublicAreaLightingRemark,
      amenities: otherAmenities,
      amenities_condition: otherAmenitiesCondition,
      amenities_photo:,
      amenities_remark: otherAmenitiesRemark,
      waste_collection:,
      water_storage_type:,
      water_storage_facility:,
      common_satellite_tv:,
      facility_management_agency:,
      fire_fighting_system:,
      security_services:,
      eating_habits:,
      majority_age_group:,
      members_allowed:,
      members_type:,
      nationality_allowed:,
      bachelors_allowed_on_rent:,
      non_married_couples_allowed_on_rent:,
      many_children_playing:,
      place_for_elderly:,
      society_celebrations:,
      society_meeting:,
      family_functions_allowed:,
      cleanliness:,
      society_maintenance:,
      access_to_helpers:,
      elderly_friendly:,
      one_bhk_resale_price:,
      two_bhk_resale_price:,
      three_bhk_resale_price:,
      number_of_visitor_parking:,
      high_noise_level:,
      stray_animals:,
      leakage_or_cracks:,
      conveyance_deed:
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
            
              <KnowYourSociety
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
  );
};

export default KnowYourSocietyStructure;
