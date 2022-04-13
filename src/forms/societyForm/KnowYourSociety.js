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
    <div className="bg-slate-200	">
      <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
          Know Your Society
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          action=""
        >
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Society Name </h4>
            <Input
              placeholder="eg. Gokuldham Society"
              onChange={(e) => setSocietyName(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Floor </h4>
            <Input
              placeholder="8"
              onChange={(e) => setFloor(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setproperty(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">YOUR PROPERTY IS IN?</h4>
            <input type="radio" name="elderly" value="STAND ALONE BUILDING" />
            <label>STAND ALONE BUILDING</label> <br />
            <input
              type="radio"
              name="elderly"
              value="CLUSETR OF BUILDINGS (2 OR MORE)"
            />
            <label>CLUSETR OF BUILDINGS (2 OR MORE)</label> <br />
            <input
              type="radio"
              name="elderly"
              value="ATTACHED BUILDINGS (2 OR MORE)"
            />
            <label>ATTACHED BUILDINGS (2 OR MORE)</label> <br />
            <input type="radio" name="elderly" value="TOWNSHIP" />
            <label>TOWNSHIP</label> <br />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setStuctureIncludes(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Society structure includes
            </h4>
            <input type="radio" name="subtype" value="Podium" />
            <label>
              Podium(Parking or amenities available on other then ground floor)
            </label>
            <br />
            <input type="radio" name="subtype" value="Basement" />
            <label>Basement</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setPropertySubtype(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Include in society structure
            </h4>
            <input
              type="radio"
              name="propertysubtype"
              value="WITH INDIVIDUAL COMPOUND"
            />
            <label>WITH INDIVIDUAL COMPOUND</label> <br />
            <input
              type="radio"
              name="propertysubtype"
              value="NON GATED (NO COMPOUND)"
            />
            <label>NON GATED (NO COMPOUND)</label> <br />
            <input
              type="radio"
              name="propertysubtype"
              value="NON GATED WITH COMMERCIALS"
            />
            <label>NON GATED WITH COMMERCIALS</label> <br />
            <input
              type="radio"
              name="propertysubtype"
              value="COMMON COMPOUND WITH COMMERCIALS"
            />
            <label>COMMON COMPOUND WITH COMMERCIALS</label> <br />
          </div>
          <div
            className="question 	 bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setCommercialEntities(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg 	">
              SELECT COMMERCIAL ENTITIES IN COMPOUND
            </h4>
            <input type="radio" name="commercialentities" value="Retail shop" />
            <label>Retail shop</label> <br />
            <input type="radio" name="commercialentities" value="Healthcase" />
            <label>Healthcase</label> <br />
            <input type="radio" name="commercialentities" value="Hospitality" />
            <label>Hospitality</label> <br />
            <input type="radio" name="commercialentities" value="Bank" />
            <label>Bank</label> <br />
            <input type="radio" name="commercialentities" value="Gym" />
            <label>Gym</label> <br />
            <input type="radio" name="commercialentities" value="Other" />
            <label>Other</label> <br />
            <input type="radio" name="commercialentities" value="N/A" />
            <label>N/A</label> <br />
          </div>

          <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
            Amenities
          </h2>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setlift(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Lift</h4>
            <input type="radio" name="lift" value="Personal Lift" />
            <label>Personal Lift</label> <br />
            <input type="radio" name="lift" value="Common public Lift" />
            <label>Common public Lift</label>
            <br />
            <input
              type="radio"
              name="lift"
              value="Service lift (Used for large goods Lift eg: bed, fridge etc)"
            />
            <label>
              Service lift (Used for large goods Lift eg: bed, fridge etc)
            </label>
            <br />
            <input type="radio" name="lift" value="Fire life" />
            <label>Fire life</label>
            <br />
            <input type="radio" name="lift" value="No Life" />
            <label>No Life</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setliftType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Lift Type</h4>
            <input type="radio" name="lifttype" value="Automatic Door" />
            <label>Automatic Door</label> <br />
            <input type="radio" name="lifttype" value="Door + Sliding" />
            <label>Door + Sliding</label>
            <br />
            <input type="radio" name="lifttype" value="N/A" />
            <label>N/A</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setliftCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of lift</h4>
            <input type="radio" name="condition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="condition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="condition" value="Bad" />
            <label>Bad</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Lift Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setliftremark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setliftLobby(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">lift Lobby</h4>
            <p className="italic font-light text-sm">Lobby in from of flats</p>
            <input type="radio" name="lobby" value="Personal Lobby" />
            <label>Personal Lobby</label> <br />
            <input type="radio" name="lobby" value="Common Lobby" />
            <label>Common Lobby</label>
            <br />
            <input type="radio" name="lobby" value="N/A" />
            <label>N/A</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setliftLobbyCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of lift Lobby</h4>
            <input type="radio" name="lobbycondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="lobbycondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="lobbycondition" value="Bad" />
            <label>Bad</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Lobby Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setliftlobbyremark(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstaircaseCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Staircase</h4>
            <input type="radio" name="staircasecondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="staircasecondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="staircasecondition" value="Bad" />
            <label>Bad</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Staircase Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setstaircaseremark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setEntranceLobbyCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Entrance Lobby
            </h4>
            <input type="radio" name="entrancelobbycondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="entrancelobbycondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="entrancelobbycondition" value="Bad" />
            <label>Bad</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Entrance Lobby Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setentranceLobbyremark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setConditonofMeetingRoom(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Society Meeting room
            </h4>
            <input type="radio" name="entrancelobbycondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="entrancelobbycondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="entrancelobbycondition" value="Bad" />
            <label>Bad</label>
            <br />
            <input type="radio" name="entrancelobbycondition" value="N/A" />
            <label>N/A</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Meeting Room Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setMeetingRoomremark(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setClubHouseCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Club House(Gym)
            </h4>
            <input type="radio" name="gymcondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="gymcondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="gymcondition" value="Bad" />
            <label>Bad</label>
            <br />
            <input type="radio" name="gymcondition" value="N/A" />
            <label>N/A</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Club House Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setClubHouseremark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setPlayGroundSubtype(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Play Ground Subtype</h4>
            <input type="radio" name="playGround" value="Kids Play Area" />
            <label>Kids Play Area</label> <br />
            <input type="radio" name="playGround" value="Toddlers Play area" />
            <label>Toddlers Play area</label>
            <br />
            <input type="radio" name="playGround" value="Party Lawn" />
            <label>Party Lawn</label>
            <br />
            <input type="radio" name="playGround" value="Box Cricket" />
            <label>Box Cricket</label>
            <br />
            <input type="radio" name="playGround" value="Yoga Lawn" />
            <label>Yoga Lawn</label>
            <br />
            <input type="radio" name="playGround" value="Other" />
            <label>Other</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setPlayGroundCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Play Ground</h4>
            <input type="radio" name="playGroundcondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="playGroundcondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="playGroundcondition" value="Bad" />
            <label>Bad</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Play Ground Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setPlayGroundremark(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setSwimmingPoolType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Swimming Pool n</h4>
            <input type="radio" name="SwimmingPool" value="Lap Pool" />
            <label>Lap Pool</label>
            <br />
            <input type="radio" name="SwimmingPool" value="Kids Pool" />
            <label>Kids Pool</label>
            <br />
            <input type="radio" name="SwimmingPool" value="N/A" />
            <label>N/A</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setSwimmingPoolCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Swimming Pool
            </h4>
            <input type="radio" name="SwimmingPoolcondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="SwimmingPoolcondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="SwimmingPoolcondition" value="Bad" />
            <label>Bad</label>
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Swimming Pool Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setSwimmingPoolRemark(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setJoggingTrackCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Jogging Track
            </h4>
            <input type="radio" name="JoggingTrackcondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="JoggingTrackcondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="JoggingTrackcondition" value="Bad" />
            <label>Bad</label>
            <br />
            <input type="radio" name="JoggingTrackcondition" value="N/A" />
            <label>N/A</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Jogging Track Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setJoggingTrackRemark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setElectricitySupplier(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Electricity Supplier</h4>
            <input type="radio" name="electricitysupplier" value="Government" />
            <label>Government</label> <br />
            <input type="radio" name="electricitysupplier" value="Private" />
            <label>Private</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setReflexologyCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Reflexology</h4>
            <input type="radio" name="Reflexologycondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="Reflexologycondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="Reflexologycondition" value="Bad" />
            <label>Bad</label>
            <br />
            <input type="radio" name="Reflexologycondition" value="N/A" />
            <label>N/A</label>
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Reflexology Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setReflexologyRemark(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setCycleTrackCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Cycle Track</h4>
            <input type="radio" name="CycleTrackcondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="CycleTrackcondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="CycleTrackcondition" value="Bad" />
            <label>Bad</label>
            <br />
            <input type="radio" name="CycleTrackcondition" value="N/A" />
            <label>N/A</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Cycle Track Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setCycleTrackRemark(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setGreenary(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Greenary In Society</h4>
            <input type="radio" name="Greenary" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="Greenary" value="Average" />
            <label>Average</label>
            <br />
            <input type="radio" name="Greenary" value="Minimal" />
            <label>Minimal</label> <br />
            <input type="radio" name="Greenary" value="N/A" />
            <label>N/A</label>
            <br />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setPublicAreaLighting(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Public Area Lighting</h4>
            <input
              type="radio"
              name="PublicAreaLighting"
              value="For Public Area Lighting"
            />
            <label>For Public Area Lighting</label> <br />
            <input
              type="radio"
              name="PublicAreaLighting"
              value="For Semi Public Area Lighting"
            />
            <label>For Semi Public Area Lighting</label>
            <br />
            <input
              type="radio"
              name="PublicAreaLighting"
              value="For Personal Home Use"
            />
            <label>For Personal Home Use</label> <br />
            <input
              type="radio"
              name="PublicAreaLighting"
              value="For Water Heating"
            />
            <label>For Water Heating</label>
            <br />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setPublicAreaLightingCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Public Area Lighting
            </h4>
            <input
              type="radio"
              name="PublicAreaLightingcondition"
              value="Good"
            />
            <label>Good</label> <br />
            <input
              type="radio"
              name="PublicAreaLightingcondition"
              value="Okay"
            />
            <label>Okay</label>
            <br />
            <input
              type="radio"
              name="PublicAreaLightingcondition"
              value="Bad"
            />
            <label>Bad</label>
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setotherAmenities(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Other Amenities</h4>
            <input
              type="radio"
              name="OtherAmenities"
              value="Rain Water Harvesting"
            />
            <label>Rain Water Harvesting</label> <br />
            <input
              type="radio"
              name="OtherAmenities"
              value="Ground Water Recharge"
            />
            <label>Ground Water Recharge</label>
            <br />
            <input
              type="radio"
              name="OtherAmenities"
              value="Water Treatment Plant"
            />
            <label>Water Treatment Plant</label> <br />
            <input type="radio" name="OtherAmenities" value="Wifi Lounge" />
            <label>Wifi Lounge</label>
            <br />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setotherAmenitiesCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Condition of Other Amenities
            </h4>
            <input type="radio" name="OtherAmenitiescondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="OtherAmenitiescondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="OtherAmenitiescondition" value="Bad" />
            <label>Bad</label>
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Other Amenities Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setotherAmenitiesRemark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setDailyWasteCollecion(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Daily Waste Collecion </h4>
            <input type="radio" name="DailyWasteCollecion" value="Self" />
            <label>Self</label> <br />
            <input
              type="radio"
              name="DailyWasteCollecion"
              value="Building House Cleaning"
            />
            <label>Building House Cleaning</label>
            <br />
            <input
              type="radio"
              name="DailyWasteCollecion"
              value="Third Party"
            />
            <label>Third Party</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setWaterStorage(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Type of Water Storage </h4>
            <input type="radio" name="WaterStorage" value="Drinking" />
            <label>Drinking</label> <br />
            <input type="radio" name="WaterStorage" value="Flushing" />
            <label>Flushing</label>
            <br />
            <input type="radio" name="WaterStorage" value="Treated" />
            <label>Treated</label>
            <br />
            <input type="radio" name="WaterStorage" value="Fire Fighter" />
            <label>Fire Fighter</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setWaterStoargeFacility(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg"> Water Storage facitiy in</h4>
            <input
              type="radio"
              name="WaterStoargeFacility"
              value="UnderGround Tank"
            />
            <label>UnderGround Tank</label> <br />
            <input
              type="radio"
              name="WaterStoargeFacility"
              value="OverHead Tank"
            />
            <label>OverHead Tank</label>
            <br />
            <input type="radio" name="WaterStoargeFacility" value="N/A" />
            <label>N/A</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setSatelliteTV(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Common satellite TV facilities{" "}
            </h4>
            <input type="radio" name="SatelliteTV" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="SatelliteTV" value="" />
            <label>No</label>
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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

          <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
            Security Systems
          </h2>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setFireFightingSystem(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Fire Fighting System in Society
            </h4>
            <input
              type="checkbox"
              name="firefightingsystems"
              value="Sprinklers System "
            />
            <label>Sprinklers System </label>
            <br />

            <input
              type="checkbox"
              name="firefightingsystems"
              value="Smoke Detection "
            />
            <label>Smoke Detection</label>
            <br />

            <input
              type="checkbox"
              name="firefightingsystems"
              value="Fire Detection"
            />
            <label>Fire Detection</label>
            <br />

            <input
              type="checkbox"
              name="firefightingsystems"
              value="Fire Extinguishers"
            />
            <label>Fire Extinguishers</label>
            <br />

            <input
              type="checkbox"
              name="firefightingsystems"
              value="Fire Hydrants "
            />
            <label>Fire Hydrants </label>
            <br />

            <input
              type="checkbox"
              name="firefightingsystems"
              value="Fire Breaching Point (To Connect fire Fighting truck Supply)"
            />
            <label>
              Fire Breaching Point (To Connect fire Fighting truck Supply)
            </label>
            <br />

            <input
              type="checkbox"
              name="firefightingsystems"
              value="Fire Alarm"
            />
            <label>Fire Alarm</label>
            <br />
            <input
              type="checkbox"
              name="firefightingsystems"
              value="Lighting  Arrestors"
            />
            <label>Lighting Arrestors</label>
            <br />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setSecurityService(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Security Service</h4>
            <input
              type="checkbox"
              name="SecurityService"
              value="Physical Security"
            />
            <label>Physical Security</label> <br />
            <input type="checkbox" name="SecurityService" value="CCTV" />
            <label>CCTV</label> <br />
            <input type="checkbox" name="SecurityService" value="Intercom" />
            <label>Intercom</label> <br />
            <input
              type="checkbox"
              name="SecurityService"
              value="Anti Theft Alarm"
            />
            <label>Anti Theft Alarm</label> <br />
            <input
              type="checkbox"
              name="SecurityService"
              value="Metal Detection Screening"
            />
            <label>Metal Detection Screening</label> <br />
            <input
              type="checkbox"
              name="SecurityService"
              value="Temperature Screening"
            />
            <label>Temperature Screening</label> <br />
          </div>

          <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
            Community and Culture
          </h2>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setEatingHabitsAllowed(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Eating Habits Allowed</h4>
            <input type="checkbox" name="EatingHabitsAllowed" value="Veg" />
            <label>Veg</label> <br />
            <input type="checkbox" name="EatingHabitsAllowed" value="Non Veg" />
            <label>Non Veg</label>
            <br />
            <input
              type="checkbox"
              name="EatingHabitsAllowed"
              value="Eggeterian"
            />
            <label>Eggeterian</label>
            <br />
            <input type="checkbox" name="EatingHabitsAllowed" value="Vegan" />
            <label>Vegan</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setMajorityAgeGroup(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Majority Age Group(Select Top 2)
            </h4>
            <input
              type="checkbox"
              name="MajorityAgeGroup"
              value="Small Children (Less then 13)"
            />
            <label>Small Children (Less then 13)</label> <br />
            <input
              type="checkbox"
              name="MajorityAgeGroup"
              value="Teenagers(13- 19)"
            />
            <label>Teenagers(13- 19)</label>
            <br />
            <input
              type="checkbox"
              name="MajorityAgeGroup"
              value="Young Adults(20-30)"
            />
            <label>Young Adults(20-30)</label> <br />
            <input
              type="checkbox"
              name="MajorityAgeGroup"
              value="Adults(30-55)"
            />
            <label>Adults(30-55)</label>
            <br />
            <input type="checkbox" name="MajorityAgeGroup" value="Old(55+)" />
            <label>Old(55+)</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setMembersAllowed(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Members Allowed</h4>
            <input type="checkbox" name="MembersAllowed" value="Batchelors" />
            <label>Batchelors</label> <br />
            <input type="checkbox" name="MembersAllowed" value="Family" />
            <label>Family</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setMajorityMemberType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Majority Member Type</h4>
            <input type="radio" name="MajorityMemberType" value="Rented" />
            <label>Rented</label> <br />
            <input type="radio" name="MajorityMemberType" value="Self Owned" />
            <label>Self Owned</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setNationalityAllowed(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Nationality Allowed in Society
            </h4>
            <input type="radio" name="NationalityAllowed" value="Indian" />
            <label>Indian</label> <br />
            <input type="radio" name="NationalityAllowed" value="Foriegner" />
            <label>Foriegner</label>
            <br />
            <input type="radio" name="NationalityAllowed" value="Both" />
            <label>Both</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setBatchlorsAllowed(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Batchlors are allowed to stay on rent in Society
            </h4>
            <input type="radio" name="BatchlorsAllowed" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="BatchlorsAllowed" value="" />
            <label>No</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setnonMarriedAllowed(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Non married couples are allowed to stay on rent in Society
            </h4>
            <input type="radio" name="nonMarried" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="nonMarried" value="" />
            <label>No</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setChildrenPlayingAround(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Are there many Children Playing Around ?
            </h4>
            <input type="radio" name="ChildrenPlayingAround" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="ChildrenPlayingAround" value="" />
            <label>No</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setElderPeopleActivity(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Are there many elderly people in society and activities available
              for them ?{" "}
            </h4>
            <input type="radio" name="ElderPeopleActivity" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="ElderPeopleActivity" value="" />
            <label>No</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setCelebration(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Eating habits Allowed</h4>
            <input
              type="checkbox"
              name="celebration"
              value="Ganpati Celebration in Society"
            />
            <label>Ganpati Celebration in Society</label> <br />
            <input
              type="checkbox"
              name="celebration"
              value="Diwali Celebration in Society"
            />
            <label>Diwali Celebration in Society</label>
            <br />
            <input
              type="checkbox"
              name="celebration"
              value="Kite Flying at Terrace"
            />
            <label>Kite Flying at Terrace</label> <br />
            <input
              type="checkbox"
              name="celebration"
              value="Holi Celebration"
            />
            <label>Holi Celebration</label> <br />
            <input
              type="checkbox"
              name="celebration"
              value="Rangpanchnami Event in Society"
            />
            <label>Rangpanchnami Event in Society</label>
            <br />
            <input
              type="checkbox"
              name="celebration"
              value="Eid Celebration in Society"
            />
            <label>Eid Celebration in Society</label>
            <br />
            <input
              type="checkbox"
              name="celebration"
              value="Republic and Independace day Celebration"
            />
            <label>Republic and Independace day Celebration</label>
            <br />
            <input
              type="checkbox"
              name="celebration"
              value="Chrismas Celebration"
            />
            <label>Chrismas Celebration</label>
            <br />
            <input
              type="checkbox"
              name="celebration"
              value="New Year Celebration"
            />
            <label>New Year Celebration</label>
            <br />
            <input
              type="checkbox"
              name="celebration"
              value="Other Celebration"
            />
            <label>Other Celebration</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setSocietyMeetings(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Eating habits Allowed</h4>
            <input
              type="checkbox"
              name="SocietyMeetings"
              value="Annual Meeting"
            />
            <label>Annual Meeting</label> <br />
            <input
              type="checkbox"
              name="SocietyMeetings"
              value="Quaterly Meeting"
            />
            <label>Quaterly Meeting</label>
            <br />
            <input
              type="checkbox"
              name="SocietyMeetings"
              value="Monthly Meeting"
            />
            <label>Monthly Meeting</label> <br />
            <input
              type="checkbox"
              name="SocietyMeetings"
              value="Women's Meeting"
            />
            <label>Women's Meeting</label> <br />
            <input
              type="checkbox"
              name="SocietyMeetings"
              value="Kids Meeting"
            />
            <label>Kids Meeting</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setFunctionsAllowed(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              FAMILY FUNTIONS ARE ALLOWED IN COMMON AREAS? (E.G. MARRIAGES)
            </h4>
            <input type="radio" name="FunctionsAllowed" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="FunctionsAllowed" value="" />
            <label>No</label>
          </div>

          <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
            Cleanliness
          </h2>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setCleanliness(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              how do you rate society in Cleanliness
            </h4>
            <input type="radio" name="Cleanliness" value="Good" />
            <label>Yes</label> <br />
            <input type="radio" name="Cleanliness" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="Cleanliness" value="Bad" />
            <label>Bad</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setCleanlinessMaintained(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Is Society maintained well like clean staircase / Lift/ Compound /
              other internal areas ?
            </h4>
            <input type="radio" name="CleanlinessMaintained" value="Good" />
            <label>Yes</label> <br />
            <input type="radio" name="CleanlinessMaintained" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="CleanlinessMaintained" value="Bad" />
            <label>Bad</label>
          </div>

          <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
            Usefull for You
          </h2>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setHandymen(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Is it easy to get maids, helpers, handymen(carpentry, electrical,
              plumbers etc ), milk and newspapers ?(Asking from security guard
              etc)
            </h4>
            <input type="radio" name="Handymen" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="Handymen" value="" />
            <label>No</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setRamp(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Handicap/Elderly friendly facilities like Ramp etc
            </h4>
            <input type="radio" name="ramp" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="ramp" value="" />
            <label>No</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
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
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setNoise(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Is noise level high inside society ?{" "}
            </h4>
            <input type="radio" name="noise" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="noise" value="" />
            <label>No</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setStrayDogs(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Stray dogs / animals in or around society{" "}
            </h4>
            <input type="radio" name="straydogs" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="straydogs" value="" />
            <label>No</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setCrack(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Are there any leakages / cracks inside the society ?
            </h4>
            <input type="radio" name="crack" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="crack" value="" />
            <label>No</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setDeed(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              OC/Conveyence Deed by society ?
            </h4>
            <input type="radio" name="Deed" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="Deed" value="" />
            <label>No</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KnowYourSociety;
