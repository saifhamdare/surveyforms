import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const KnowYourSociety = () => {
  const [SocietyName, setSocietyName] = useState("");
  const [FlatsAvailable, setFlatsAvailable] = useState("");
  const [Floor, setFloor] = useState("");
  const [Landmarks, setLandmarks] = useState("");
  const [property, setproperty] = useState("");
  const [StuctureIncludes, setStuctureIncludes] = useState("");
  const [PropertySubtype, setPropertySubtype] = useState("");
  const [CommercialEntities, setCommercialEntities] = useState("");

  /////////////////////////////////Amenities///////////////////////////////////////////////////
  const [lift, setlift] = useState("");
  const [liftType, setliftType] = useState("");
  const [liftCondition, setliftCondition] = useState("");
  const [liftremark, setliftremark] = useState("");

  const [liftLobby, setliftLobby] = useState("");
  const [liftLobbyCondition, setliftLobbyCondition] = useState("");
  const [liftlobbyremark, setliftlobbyremark] = useState("");

  const [staircaseCondition, setstaircaseCondition] = useState("");
  const [staircaseremark, setstaircaseremark] = useState("");

  const [EntranceLobbyCondition, setEntranceLobbyCondition] = useState("");
  const [entranceLobbyremark, setentranceLobbyremark] = useState("");

  const [conditonofMeetingRoom, setConditonofMeetingRoom] = useState("");
  const [MeetingRoomremark, setMeetingRoomremark] = useState("");

  const [ClubHouseCondition, setClubHouseCondition] = useState("");
  const [ClubHouseremark, setClubHouseremark] = useState("");

  const [PlayGroundCondition, setPlayGroundCondition] = useState("");
  const [PlayGroundSubtype, setPlayGroundSubtype] = useState("");
  const [PlayGroundremark, setPlayGroundremark] = useState("");

  const [SwimmingPoolType, setSwimmingPoolType] = useState("");
  const [SwimmingPoolConditiion, setSwimmingPoolCondition] = useState("");
  const [SwimmingPoolRemark, setSwimmingPoolRemark] = useState("");

  const [JoggingTrackCondition, setJoggingTrackCondition] = useState("");
  const [JoggingTrackRemark, setJoggingTrackRemark] = useState("");

  const [ElectricitySupplier, setElectricitySupplier] = useState("");

  const [ReflexologyCondition, setReflexologyCondition] = useState("");
  const [ReflexologyRemark, setReflexologyRemark] = useState("");

  const [CycleTrackCondition, setCycleTrackCondition] = useState("");
  const [CycleTrackRemark, setCycleTrackRemark] = useState("");

  const [Greenary, setGreenary] = useState("");

  const [PublicAreaLighting, setPublicAreaLighting] = useState("");
  const [PublicAreaLightingCondition, setPublicAreaLightingCondition] =
    useState("");
  const [PublicAreaLightingRemark, setPublicAreaLightingRemark] =
    useState("");

  const [otherAmenities, setotherAmenities] = useState("");
  const [otherAmenitiesCondition, setotherAmenitiesCondition] = useState("");
  const [otherAmenitiesRemark, setotherAmenitiesRemark] = useState("");

  const [DailyWasteCollecion, setDailyWasteCollecion] = useState("");
  const [WaterStorage, setWaterStorage] = useState("");
  const [WaterStoargeFacility, setWaterStoargeFacility] = useState("");
  const [FireFightingSystem, setFireFightingSystem] = useState("");
  const [SecurityService, setSecurityService] = useState("");

  const [SatelliteTV, setSatelliteTV] = useState("");
  const [Agency, setAgency] = useState("");

  const [liftphoto, setliftphoto] = useState("");
  const [liftlobbyphoto, setliftlobbyphoto] = useState("");
  const [staircasephoto, setstaircasephoto] = useState("");
  const [entrancelobbyephoto, setentrancelobbyephoto] = useState("");
  const [MeetingRoomphoto, setMeetingRoomphoto] = useState("");
  const [ClubHousephoto, setClubHousephoto] = useState("");
  const [PlayGroundphoto, setPlayGroundphoto] = useState("");
  const [SwimmingPoolphoto, setSwimmingPoolphoto] = useState("");
  const [JoggingTrackphoto, setJoggingTrackphoto] = useState("");
  const [Reflexologyphoto, setReflexologyphoto] = useState("");
  const [Greenaryphoto, setGreenaryphoto] = useState("");
  const [PublicAreaLightingphoto, setPublicAreaLightingphoto] = useState("");
  const [otherAmenitiesphoto, setotherAmenitiesphoto] = useState("");

  //////////////////////////////////Amenities End////////////////////////////////////////////////////

  ////////////////////////////////// culture start ////////////////////////////////////////////////////
  const [EatingHabitsAllowed, setEatingHabitsAllowed] = useState("");
  const [MajorityAgeGroup, setMajorityAgeGroup] = useState("");
  const [MembersAllowed, setMembersAllowed] = useState("");
  const [MajorityMemberType, setMajorityMemberType] = useState("");
  const [NationalityAllowed, setNationalityAllowed] = useState("");
  const [BatchlorsAllowed, setBatchlorsAllowed] = useState("");
  const [nonMarriedAllowed, setnonMarriedAllowed] = useState("");
  const [ChildrenPlayingAround, setChildrenPlayingAround] = useState("");
  const [ElderPeopleActivity, setElderPeopleActivity] = useState("");
  const [Celebration, setCelebration] = useState("");
  const [SocietyMeetings, setSocietyMeetings] = useState("");
  const [FunctionsAllowed, setFunctionsAllowed] = useState("");
  ////////////////////////////////// culture end ////////////////////////////////////////////////////

  ////////////////////////////////// cleanliness start ////////////////////////////////////////////////////

  const [Cleanliness, setCleanliness] = useState("");
  const [CleanlinessMaintained, setCleanlinessMaintained] = useState("");
  ////////////////////////////////// cleanliness end ////////////////////////////////////////////////////

  ////////////////////////////////// Useful for You  ////////////////////////////////////////////////////
  const [Handymen, setHandymen] = useState("");
  const [Ramp, setRamp] = useState("");
  const [OneBHK, setOneBHK] = useState("");
  const [TwoBHK, setTwoBHK] = useState("");
  const [ThreeBHK, setThreeBHK] = useState("");
  const [Visitor, setVisitor] = useState("");
  const [Noise, setNoise] = useState("");
  const [StrayDogs, setStrayDogs] = useState("");
  const [Crack, setCrack] = useState("");
  const [Deed, setDeed] = useState("");

  const onSubmit = () => {};
  return (
    <div className="	">
      <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500   px-1 py-6">
          Know Your Society
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          action=""
        >
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Society Name </h4>
            <Input
              placeholder="eg. Gokuldham Society"
              onChange={(e) => setSocietyName(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Number of Flats Available{" "}
            </h4>
            <Input
              placeholder="eg. Gokuldham Society"
              onChange={(e) => setFlatsAvailable(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Floor </h4>
            <Input
              placeholder="8"
              onChange={(e) => setFloor(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Major nearby Landmarks </h4>
            <Input
              placeholder="8"
              onChange={(e) => setLandmarks(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setproperty(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">YOUR PROPERTY IS IN?</h4>
            <input type="radio" className="ml-2" name="elderly" value="STAND ALONE BUILDING" />
            <label className="ml-2" >STAND ALONE BUILDING</label> <br />
            <input
            className="ml-2"
              type="radio"
              name="elderly"
              value="CLUSETR OF BUILDINGS (2 OR MORE)"
            />
            <label className="ml-2" >CLUSETR OF BUILDINGS (2 OR MORE)</label> <br />
            <input
            className="ml-2"
              type="radio"
              name="elderly"
              value="ATTACHED BUILDINGS (2 OR MORE)"
            />
            <label className="ml-2" >ATTACHED BUILDINGS (2 OR MORE)</label> <br />
            <input type="radio" className="ml-2" name="elderly" value="TOWNSHIP" />
            <label className="ml-2" >TOWNSHIP</label> <br />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setStuctureIncludes(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Society structure includes
            </h4>
            <input type="radio" className="ml-2" name="subtype" value="Podium" />
            <label className="ml-2" >
              Podium(Parking or amenities available on other then ground floor)
            </label>
            <br />
            <input type="radio" className="ml-2" name="subtype" value="Basement" />
            <label className="ml-2" >Basement</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setPropertySubtype(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Include in society structure
            </h4>
            <input
            className="ml-2"
              type="radio"
              name="propertysubtype"
              value="WITH INDIVIDUAL COMPOUND"
            />
            <label className="ml-2" >WITH INDIVIDUAL COMPOUND</label> <br />
            <input
            className="ml-2"
              type="radio"
              name="propertysubtype"
              value="NON GATED (NO COMPOUND)"
            />
            <label className="ml-2" >NON GATED (NO COMPOUND)</label> <br />
            <input
            className="ml-2"
              type="radio"
              name="propertysubtype"
              value="NON GATED WITH COMMERCIALS"
            />
            <label className="ml-2" >NON GATED WITH COMMERCIALS</label> <br />
            <input
            className="ml-2"
              type="radio"
              name="propertysubtype"
              value="COMMON COMPOUND WITH COMMERCIALS"
            />
            <label className="ml-2" >COMMON COMPOUND WITH COMMERCIALS</label> <br />
          </div>
          <div
            className="question 	 bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setCommercialEntities(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg 	">
              SELECT COMMERCIAL ENTITIES IN COMPOUND
            </h4>
            <input type="radio" className="ml-2" name="commercialentities" value="Retail shop" />
            <label className="ml-2" >Retail shop</label> <br />
            <input type="radio" className="ml-2" name="commercialentities" value="Healthcase" />
            <label className="ml-2" >Healthcase</label> <br />
            <input type="radio" className="ml-2" name="commercialentities" value="Hospitality" />
            <label className="ml-2" >Hospitality</label> <br />
            <input type="radio" className="ml-2" name="commercialentities" value="Bank" />
            <label className="ml-2" >Bank</label> <br />
            <input type="radio" className="ml-2" name="commercialentities" value="Gym" />
            <label className="ml-2" >Gym</label> <br />
            <input type="radio" className="ml-2" name="commercialentities" value="Other" />
            <label className="ml-2" >Other</label> <br />
            <input type="radio" className="ml-2" name="commercialentities" value="N/A" />
            <label className="ml-2" >N/A</label> <br />
          </div>

          <h2 className="text-lg font-bold text-sky-500  px-1 py-6">
            Amenities
          </h2>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setlift(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Lift</h4>
            <input type="radio" className="ml-2" name="lift" value="Personal Lift" />
            <label className="ml-2" >Personal Lift</label> <br />
            <input type="radio" className="ml-2" name="lift" value="Common public Lift" />
            <label className="ml-2" >Common public Lift</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="lift"
              value="Service lift (Used for large goods Lift eg: bed, fridge etc)"
            />
            <label className="ml-2" >
              Service lift (Used for large goods Lift eg: bed, fridge etc)
            </label>
            <br />
            <input type="radio" className="ml-2" name="lift" value="Fire life" />
            <label className="ml-2" >Fire life</label>
            <br />
            <input type="radio" className="ml-2" name="lift" value="No Life" />
            <label className="ml-2" >No Life</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setliftType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Lift Type</h4>
            <input type="radio" className="ml-2" name="lifttype" value="Automatic Door" />
            <label className="ml-2" >Automatic Door</label> <br />
            <input type="radio" className="ml-2" name="lifttype" value="Door + Sliding" />
            <label className="ml-2" >Door + Sliding</label>
            <br />
            <input type="radio" className="ml-2" name="lifttype" value="N/A" />
            <label className="ml-2" >N/A</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setliftCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of lift</h4>
            <input type="radio" className="ml-2" name="condition" value="Good" />
            <label className="ml-2" >Good</label> <br />
            <input type="radio" className="ml-2" name="condition" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="condition" value="Bad" />
            <label className="ml-2" >Bad</label>
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Lift Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setliftremark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setliftLobby(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">lift Lobby</h4>
            <p className="italic font-light text-sm">Lobby in from of flats</p>
            <input type="radio" className="ml-2" name="lobby" value="Personal Lobby" />
            <label className="ml-2" >Personal Lobby</label> <br />
            <input type="radio" className="ml-2" name="lobby" value="Common Lobby" />
            <label className="ml-2" >Common Lobby</label>
            <br />
            <input type="radio" className="ml-2" name="lobby" value="N/A" />
            <label className="ml-2" >N/A</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setliftLobbyCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of lift Lobby</h4>
            <input type="radio" className="ml-2" name="lobbycondition" value="Good" />
            <label className="ml-2" >Good</label> <br />
            <input type="radio" className="ml-2" name="lobbycondition" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="lobbycondition" value="Bad" />
            <label className="ml-2" >Bad</label>
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Lobby Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setliftlobbyremark(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setstaircaseCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Staircase</h4>
            <input type="radio" className="ml-2" name="staircasecondition" value="Good" />
            <label className="ml-2" >Good</label> <br />
            <input type="radio" className="ml-2" name="staircasecondition" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="staircasecondition" value="Bad" />
            <label className="ml-2" >Bad</label>
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Staircase Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setstaircaseremark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setEntranceLobbyCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Entrance Lobby
            </h4>
            <input type="radio" className="ml-2" name="entrancelobbycondition" value="Good" />
            <label className="ml-2" >Good</label> <br />
            <input type="radio" className="ml-2" name="entrancelobbycondition" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="entrancelobbycondition" value="Bad" />
            <label className="ml-2" >Bad</label>
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Entrance Lobby Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setentranceLobbyremark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setConditonofMeetingRoom(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Society Meeting room
            </h4>
            <input type="radio" className="ml-2" name="entrancelobbycondition" value="Good" />
            <label className="ml-2" >Good</label> <br />
            <input type="radio" className="ml-2" name="entrancelobbycondition" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="entrancelobbycondition" value="Bad" />
            <label className="ml-2" >Bad</label>
            <br />
            <input type="radio" className="ml-2" name="entrancelobbycondition" value="N/A" />
            <label className="ml-2" >N/A</label>
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Meeting Room Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setMeetingRoomremark(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setClubHouseCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Club House(Gym)
            </h4>
            <input type="radio" className="ml-2" name="gymcondition" value="Good" />
            <label className="ml-2" >Good</label> <br />
            <input type="radio" className="ml-2" name="gymcondition" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="gymcondition" value="Bad" />
            <label className="ml-2" >Bad</label>
            <br />
            <input type="radio" className="ml-2" name="gymcondition" value="N/A" />
            <label className="ml-2" >N/A</label>
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Club House Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setClubHouseremark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setPlayGroundSubtype(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Play Ground Subtype</h4>
            <input type="radio" className="ml-2" name="playGround" value="Kids Play Area" />
            <label className="ml-2" >Kids Play Area</label> <br />
            <input type="radio" className="ml-2" name="playGround" value="Toddlers Play area" />
            <label className="ml-2" >Toddlers Play area</label>
            <br />
            <input type="radio" className="ml-2" name="playGround" value="Party Lawn" />
            <label className="ml-2" >Party Lawn</label>
            <br />
            <input type="radio" className="ml-2" name="playGround" value="Box Cricket" />
            <label className="ml-2" >Box Cricket</label>
            <br />
            <input type="radio" className="ml-2" name="playGround" value="Yoga Lawn" />
            <label className="ml-2" >Yoga Lawn</label>
            <br />
            <input type="radio" className="ml-2" name="playGround" value="Other" />
            <label className="ml-2" >Other</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setPlayGroundCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Play Ground</h4>
            <input type="radio" className="ml-2" name="playGroundcondition" value="Good" />
            <label className="ml-2" >Good</label> <br />
            <input type="radio" className="ml-2" name="playGroundcondition" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="playGroundcondition" value="Bad" />
            <label className="ml-2" >Bad</label>
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Play Ground Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setPlayGroundremark(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setSwimmingPoolType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Swimming Pool n</h4>
            <input type="radio" className="ml-2" name="SwimmingPool" value="Lap Pool" />
            <label className="ml-2" >Lap Pool</label>
            <br />
            <input type="radio" className="ml-2" name="SwimmingPool" value="Kids Pool" />
            <label className="ml-2" >Kids Pool</label>
            <br />
            <input type="radio" className="ml-2" name="SwimmingPool" value="N/A" />
            <label className="ml-2" >N/A</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setSwimmingPoolCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Swimming Pool
            </h4>
            <input type="radio" className="ml-2" name="SwimmingPoolcondition" value="Good" />
            <label className="ml-2" >Good</label> <br />
            <input type="radio" className="ml-2" name="SwimmingPoolcondition" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="SwimmingPoolcondition" value="Bad" />
            <label className="ml-2" >Bad</label>
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Swimming Pool Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setSwimmingPoolRemark(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setJoggingTrackCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Jogging Track
            </h4>
            <input type="radio" className="ml-2" name="JoggingTrackcondition" value="Good" />
            <label className="ml-2" >Good</label> <br />
            <input type="radio" className="ml-2" name="JoggingTrackcondition" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="JoggingTrackcondition" value="Bad" />
            <label className="ml-2" >Bad</label>
            <br />
            <input type="radio" className="ml-2" name="JoggingTrackcondition" value="N/A" />
            <label className="ml-2" >N/A</label>
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Jogging Track Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setJoggingTrackRemark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setElectricitySupplier(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Electricity Supplier</h4>
            <input type="radio" className="ml-2" name="electricitysupplier" value="Government" />
            <label className="ml-2" >Government</label> <br />
            <input type="radio" className="ml-2" name="electricitysupplier" value="Private" />
            <label className="ml-2" >Private</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setReflexologyCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Reflexology</h4>
            <input type="radio" className="ml-2" name="Reflexologycondition" value="Good" />
            <label className="ml-2" >Good</label> <br />
            <input type="radio" className="ml-2" name="Reflexologycondition" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="Reflexologycondition" value="Bad" />
            <label className="ml-2" >Bad</label>
            <br />
            <input type="radio" className="ml-2" name="Reflexologycondition" value="N/A" />
            <label className="ml-2" >N/A</label>
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Reflexology Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setReflexologyRemark(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setCycleTrackCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Cycle Track</h4>
            <input type="radio" className="ml-2" name="CycleTrackcondition" value="Good" />
            <label className="ml-2" >Good</label> <br />
            <input type="radio" className="ml-2" name="CycleTrackcondition" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="CycleTrackcondition" value="Bad" />
            <label className="ml-2" >Bad</label>
            <br />
            <input type="radio" className="ml-2" name="CycleTrackcondition" value="N/A" />
            <label className="ml-2" >N/A</label>
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Cycle Track Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setCycleTrackRemark(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setGreenary(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Greenary In Society</h4>
            <input type="radio" className="ml-2" name="Greenary" value="Good" />
            <label className="ml-2" >Good</label> <br />
            <input type="radio" className="ml-2" name="Greenary" value="Average" />
            <label className="ml-2" >Average</label>
            <br />
            <input type="radio" className="ml-2" name="Greenary" value="Minimal" />
            <label className="ml-2" >Minimal</label> <br />
            <input type="radio" className="ml-2" name="Greenary" value="N/A" />
            <label className="ml-2" >N/A</label>
            <br />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setPublicAreaLighting(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Public Area Lighting</h4>
            <input
            className="ml-2"
              type="radio"
              name="PublicAreaLighting"
              value="For Public Area Lighting"
            />
            <label className="ml-2" >For Public Area Lighting</label> <br />
            <input
            className="ml-2"
              type="radio"
              name="PublicAreaLighting"
              value="For Semi Public Area Lighting"
            />
            <label className="ml-2" >For Semi Public Area Lighting</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="PublicAreaLighting"
              value="For Personal Home Use"
            />
            <label className="ml-2" >For Personal Home Use</label> <br />
            <input
            className="ml-2"
              type="radio"
              name="PublicAreaLighting"
              value="For Water Heating"
            />
            <label className="ml-2" >For Water Heating</label>
            <br />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setPublicAreaLightingCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Public Area Lighting
            </h4>
            <input
            className="ml-2"
              type="radio"
              name="PublicAreaLightingcondition"
              value="Good"
            />
            <label className="ml-2" >Good</label> <br />
            <input
            className="ml-2"
              type="radio"
              name="PublicAreaLightingcondition"
              value="Okay"
            />
            <label className="ml-2" >Okay</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="PublicAreaLightingcondition"
              value="Bad"
            />
            <label className="ml-2" >Bad</label>
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Public Area Lighting Remark
            </h4>
            <Input
              placeholder=""
              onChange={(e) => setPublicAreaLightingRemark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setotherAmenities(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Other Amenities</h4>
            <input
            className="ml-2"
              type="radio"
              name="OtherAmenities"
              value="Rain Water Harvesting"
            />
            <label className="ml-2" >Rain Water Harvesting</label> <br />
            <input
            className="ml-2"
              type="radio"
              name="OtherAmenities"
              value="Ground Water Recharge"
            />
            <label className="ml-2" >Ground Water Recharge</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="OtherAmenities"
              value="Water Treatment Plant"
            />
            <label className="ml-2" >Water Treatment Plant</label> <br />
            <input type="radio" className="ml-2" name="OtherAmenities" value="Wifi Lounge" />
            <label className="ml-2" >Wifi Lounge</label>
            <br />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setotherAmenitiesCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Other Amenities
            </h4>
            <input type="radio" className="ml-2" name="OtherAmenitiescondition" value="Good" />
            <label className="ml-2" >Good</label> <br />
            <input type="radio" className="ml-2" name="OtherAmenitiescondition" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="OtherAmenitiescondition" value="Bad" />
            <label className="ml-2" >Bad</label>
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Other Amenities Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setotherAmenitiesRemark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of lift</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setliftphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Photo upload of lift Lobby
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setliftlobbyphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of staircase</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setstaircasephoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Photo upload of entrance Lobby
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setentrancelobbyephoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Photo upload of Society Meeting room
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setMeetingRoomphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Photo upload of ClubHouse(Gym)
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setClubHousephoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Photo upload of PlayGround
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setPlayGroundphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Photo upload of Swimming Pool
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setSwimmingPoolphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Photo upload of Jogging Track
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setJoggingTrackphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Photo upload of Reflexology
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setReflexologyphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of Greenary</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setGreenaryphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Photo upload of Public Area Lighting
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setPublicAreaLightingphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Photo upload of Other Amenities
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setotherAmenitiesphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setDailyWasteCollecion(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Daily Waste Collecion </h4>
            <input type="radio" className="ml-2" name="DailyWasteCollecion" value="Self" />
            <label className="ml-2" >Self</label> <br />
            <input
            className="ml-2"
              type="radio"
              name="DailyWasteCollecion"
              value="Building House Cleaning"
            />
            <label className="ml-2" >Building House Cleaning</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="DailyWasteCollecion"
              value="Third Party"
            />
            <label className="ml-2" >Third Party</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setWaterStorage(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Type of Water Storage </h4>
            <input type="radio" className="ml-2" name="WaterStorage" value="Drinking" />
            <label className="ml-2" >Drinking</label> <br />
            <input type="radio" className="ml-2" name="WaterStorage" value="Flushing" />
            <label className="ml-2" >Flushing</label>
            <br />
            <input type="radio" className="ml-2" name="WaterStorage" value="Treated" />
            <label className="ml-2" >Treated</label>
            <br />
            <input type="radio" className="ml-2" name="WaterStorage" value="Fire Fighter" />
            <label className="ml-2" >Fire Fighter</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setWaterStoargeFacility(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg"> Water Storage facitiy in</h4>
            <input
            className="ml-2"
              type="radio"
              name="WaterStoargeFacility"
              value="UnderGround Tank"
            />
            <label className="ml-2" >UnderGround Tank</label> <br />
            <input
            className="ml-2"
              type="radio"
              name="WaterStoargeFacility"
              value="OverHead Tank"
            />
            <label className="ml-2" >OverHead Tank</label>
            <br />
            <input type="radio" className="ml-2" name="WaterStoargeFacility" value="N/A" />
            <label className="ml-2" >N/A</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setSatelliteTV(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Common satellite TV facilities{" "}
            </h4>
            <input type="radio" className="ml-2" name="SatelliteTV" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="SatelliteTV" value="" />
            <label className="ml-2" >No</label>
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Agency for Facilities Management{" "}
            </h4>
            <p className="italic font-light text-sm">
              Write name of agency if yes else mention NA
            </p>
            <Input
              placeholder="John Doe"
              onChange={(e) => setAgency(e.target.value)}
              required
              fullWidth
            />
          </div>

          <h2 className="text-lg font-bold text-sky-500  px-1 py-6">
            Security Systems
          </h2>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setFireFightingSystem(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Fire Fighting System in Society
            </h4>
            <input
            className="ml-2"
              type="checkbox"
              name="firefightingsystems"
              value="Sprinklers System "
            />
            <label className="ml-2" >Sprinklers System </label>
            <br />

            <input
            className="ml-2"
              type="checkbox"
              name="firefightingsystems"
              value="Smoke Detection "
            />
            <label className="ml-2" >Smoke Detection</label>
            <br />

            <input
            className="ml-2"
              type="checkbox"
              name="firefightingsystems"
              value="Fire Detection"
            />
            <label className="ml-2" >Fire Detection</label>
            <br />

            <input
            className="ml-2"
              type="checkbox"
              name="firefightingsystems"
              value="Fire Extinguishers"
            />
            <label className="ml-2" >Fire Extinguishers</label>
            <br />

            <input
            className="ml-2"
              type="checkbox"
              name="firefightingsystems"
              value="Fire Hydrants "
            />
            <label className="ml-2" >Fire Hydrants </label>
            <br />

            <input
            className="ml-2"
              type="checkbox"
              name="firefightingsystems"
              value="Fire Breaching Point (To Connect fire Fighting truck Supply)"
            />
            <label className="ml-2" >
              Fire Breaching Point (To Connect fire Fighting truck Supply)
            </label>
            <br />

            <input
            className="ml-2"
              type="checkbox"
              name="firefightingsystems"
              value="Fire Alarm"
            />
            <label className="ml-2" >Fire Alarm</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="firefightingsystems"
              value="Lighting  Arrestors"
            />
            <label className="ml-2" >Lighting Arrestors</label>
            <br />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setSecurityService(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Security Service</h4>
            <input
            className="ml-2"
              type="checkbox"
              name="SecurityService"
              value="Physical Security"
            />
            <label className="ml-2" >Physical Security</label> <br />
            <input type="checkbox" className="ml-2" name="SecurityService" value="CCTV" />
            <label className="ml-2" >CCTV</label> <br />
            <input type="checkbox" className="ml-2" name="SecurityService" value="Intercom" />
            <label className="ml-2" >Intercom</label> <br />
            <input
            className="ml-2"
              type="checkbox"
              name="SecurityService"
              value="Anti Theft Alarm"
            />
            <label className="ml-2" >Anti Theft Alarm</label> <br />
            <input
            className="ml-2"
              type="checkbox"
              name="SecurityService"
              value="Metal Detection Screening"
            />
            <label className="ml-2" >Metal Detection Screening</label> <br />
            <input
            className="ml-2"
              type="checkbox"
              name="SecurityService"
              value="Temperature Screening"
            />
            <label className="ml-2" >Temperature Screening</label> <br />
          </div>

          <h2 className="text-lg font-bold text-sky-500  px-1 py-6">
            Community and Culture
          </h2>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setEatingHabitsAllowed(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Eating Habits Allowed</h4>
            <input type="checkbox" className="ml-2" name="EatingHabitsAllowed" value="Veg" />
            <label className="ml-2" >Veg</label> <br />
            <input type="checkbox" className="ml-2" name="EatingHabitsAllowed" value="Non Veg" />
            <label className="ml-2" >Non Veg</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="EatingHabitsAllowed"
              value="Eggeterian"
            />
            <label className="ml-2" >Eggeterian</label>
            <br />
            <input type="checkbox" className="ml-2" name="EatingHabitsAllowed" value="Vegan" />
            <label className="ml-2" >Vegan</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setMajorityAgeGroup(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Majority Age Group(Select Top 2)
            </h4>
            <input
            className="ml-2"
              type="checkbox"
              name="MajorityAgeGroup"
              value="Small Children (Less then 13)"
            />
            <label className="ml-2" >Small Children (Less then 13)</label> <br />
            <input
            className="ml-2"
              type="checkbox"
              name="MajorityAgeGroup"
              value="Teenagers(13- 19)"
            />
            <label className="ml-2" >Teenagers(13- 19)</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="MajorityAgeGroup"
              value="Young Adults(20-30)"
            />
            <label className="ml-2" >Young Adults(20-30)</label> <br />
            <input
            className="ml-2"
              type="checkbox"
              name="MajorityAgeGroup"
              value="Adults(30-55)"
            />
            <label className="ml-2" >Adults(30-55)</label>
            <br />
            <input type="checkbox" className="ml-2" name="MajorityAgeGroup" value="Old(55+)" />
            <label className="ml-2" >Old(55+)</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setMembersAllowed(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Members Allowed</h4>
            <input type="checkbox" className="ml-2" name="MembersAllowed" value="Batchelors" />
            <label className="ml-2" >Batchelors</label> <br />
            <input type="checkbox" className="ml-2" name="MembersAllowed" value="Family" />
            <label className="ml-2" >Family</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setMajorityMemberType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Majority Member Type</h4>
            <input type="radio" className="ml-2" name="MajorityMemberType" value="Rented" />
            <label className="ml-2" >Rented</label> <br />
            <input type="radio" className="ml-2" name="MajorityMemberType" value="Self Owned" />
            <label className="ml-2" >Self Owned</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setNationalityAllowed(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Nationality Allowed in Society
            </h4>
            <input type="radio" className="ml-2" name="NationalityAllowed" value="Indian" />
            <label className="ml-2" >Indian</label> <br />
            <input type="radio" className="ml-2" name="NationalityAllowed" value="Foriegner" />
            <label className="ml-2" >Foriegner</label>
            <br />
            <input type="radio" className="ml-2" name="NationalityAllowed" value="Both" />
            <label className="ml-2" >Both</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setBatchlorsAllowed(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Batchlors are allowed to stay on rent in Society
            </h4>
            <input type="radio" className="ml-2" name="BatchlorsAllowed" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="BatchlorsAllowed" value="" />
            <label className="ml-2" >No</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setnonMarriedAllowed(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Non married couples are allowed to stay on rent in Society
            </h4>
            <input type="radio" className="ml-2" name="nonMarried" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="nonMarried" value="" />
            <label className="ml-2" >No</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setChildrenPlayingAround(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Are there many Children Playing Around ?
            </h4>
            <input type="radio" className="ml-2" name="ChildrenPlayingAround" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="ChildrenPlayingAround" value="" />
            <label className="ml-2" >No</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setElderPeopleActivity(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Are there many elderly people in society and activities available
              for them ?{" "}
            </h4>
            <input type="radio" className="ml-2" name="ElderPeopleActivity" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="ElderPeopleActivity" value="" />
            <label className="ml-2" >No</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setCelebration(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Eating habits Allowed</h4>
            <input
            className="ml-2"
              type="checkbox"
              name="celebration"
              value="Ganpati Celebration in Society"
            />
            <label className="ml-2" >Ganpati Celebration in Society</label> <br />
            <input
            className="ml-2"
              type="checkbox"
              name="celebration"
              value="Diwali Celebration in Society"
            />
            <label className="ml-2" >Diwali Celebration in Society</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="celebration"
              value="Kite Flying at Terrace"
            />
            <label className="ml-2" >Kite Flying at Terrace</label> <br />
            <input
            className="ml-2"
              type="checkbox"
              name="celebration"
              value="Holi Celebration"
            />
            <label className="ml-2" >Holi Celebration</label> <br />
            <input
            className="ml-2"
              type="checkbox"
              name="celebration"
              value="Rangpanchnami Event in Society"
            />
            <label className="ml-2" >Rangpanchnami Event in Society</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="celebration"
              value="Eid Celebration in Society"
            />
            <label className="ml-2" >Eid Celebration in Society</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="celebration"
              value="Republic and Independace day Celebration"
            />
            <label className="ml-2" >Republic and Independace day Celebration</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="celebration"
              value="Chrismas Celebration"
            />
            <label className="ml-2" >Chrismas Celebration</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="celebration"
              value="New Year Celebration"
            />
            <label className="ml-2" >New Year Celebration</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="celebration"
              value="Other Celebration"
            />
            <label className="ml-2" >Other Celebration</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setSocietyMeetings(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Eating habits Allowed</h4>
            <input
            className="ml-2"
              type="checkbox"
              name="SocietyMeetings"
              value="Annual Meeting"
            />
            <label className="ml-2" >Annual Meeting</label> <br />
            <input
            className="ml-2"
              type="checkbox"
              name="SocietyMeetings"
              value="Quaterly Meeting"
            />
            <label className="ml-2" >Quaterly Meeting</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="SocietyMeetings"
              value="Monthly Meeting"
            />
            <label className="ml-2" >Monthly Meeting</label> <br />
            <input
            className="ml-2"
              type="checkbox"
              name="SocietyMeetings"
              value="Women's Meeting"
            />
            <label className="ml-2" >Women's Meeting</label> <br />
            <input
            className="ml-2"
              type="checkbox"
              name="SocietyMeetings"
              value="Kids Meeting"
            />
            <label className="ml-2" >Kids Meeting</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setFunctionsAllowed(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              FAMILY FUNTIONS ARE ALLOWED IN COMMON AREAS? (E.G. MARRIAGES)
            </h4>
            <input type="radio" className="ml-2" name="FunctionsAllowed" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="FunctionsAllowed" value="" />
            <label className="ml-2" >No</label>
          </div>

          <h2 className="text-lg font-bold text-sky-500  px-1 py-6">
            Cleanliness
          </h2>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setCleanliness(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              how do you rate society in Cleanliness
            </h4>
            <input type="radio" className="ml-2" name="Cleanliness" value="Good" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="Cleanliness" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="Cleanliness" value="Bad" />
            <label className="ml-2" >Bad</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setCleanlinessMaintained(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Is Society maintained well like clean staircase / Lift/ Compound /
              other internal areas ?
            </h4>
            <input type="radio" className="ml-2" name="CleanlinessMaintained" value="Good" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="CleanlinessMaintained" value="Okay" />
            <label className="ml-2" >Okay</label>
            <br />
            <input type="radio" className="ml-2" name="CleanlinessMaintained" value="Bad" />
            <label className="ml-2" >Bad</label>
          </div>

          <h2 className="text-lg font-bold text-sky-500  px-1 py-6">
            Usefull for You
          </h2>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setHandymen(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Is it easy to get maids, helpers, handymen(carpentry, electrical,
              plumbers etc ), milk and newspapers ?(Asking from security guard
              etc)
            </h4>
            <input type="radio" className="ml-2" name="Handymen" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="Handymen" value="" />
            <label className="ml-2" >No</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setRamp(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Handicap/Elderly friendly facilities like Ramp etc
            </h4>
            <input type="radio" className="ml-2" name="ramp" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="ramp" value="" />
            <label className="ml-2" >No</label>
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Latest 1 BHK resale price in the society (write at least 3 deals){" "}
            </h4>

            <Input
              placeholder="John Doe"
              onChange={(e) => setOneBHK(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Latest 2 BHK resale price in the society (write at least 3 deals){" "}
            </h4>

            <Input
              placeholder="John Doe"
              onChange={(e) => setTwoBHK(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Latest 3 BHK resale price in the society (write at least 3 deals){" "}
            </h4>

            <Input
              placeholder="John Doe"
              onChange={(e) => setThreeBHK(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Number of Visitor Parking Available?{" "}
            </h4>
            <Input
              placeholder="John Doe"
              onChange={(e) => setVisitor(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setNoise(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Is noise level high inside society ?{" "}
            </h4>
            <input type="radio" className="ml-2" name="noise" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="noise" value="" />
            <label className="ml-2" >No</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setStrayDogs(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Stray dogs / animals in or around society{" "}
            </h4>
            <input type="radio" className="ml-2" name="straydogs" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="straydogs" value="" />
            <label className="ml-2" >No</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setCrack(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Are there any leakages / cracks inside the society ?
            </h4>
            <input type="radio" className="ml-2" name="crack" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="crack" value="" />
            <label className="ml-2" >No</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setDeed(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              OC/Conveyence Deed by society ?
            </h4>
            <input type="radio" className="ml-2" name="Deed" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="Deed" value="" />
            <label className="ml-2" >No</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KnowYourSociety;
