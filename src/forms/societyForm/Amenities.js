import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const Amenities = () => {
  const [alift, setalift] = useState("");
  const [aliftType, setaliftType] = useState("");
  const [aliftCondition, setaliftCondition] = useState("");
  const [aliftremark, setaliftremark] = useState("");
 
  const [aliftLobby, setaliftLobby] = useState("");
  const [aLobbySubtype, setaLobbySubtype] = useState("");
  const [aliftLobbyCondition, setaliftLobbyCondition] = useState("");
  const [aliftlobbyremark, setaliftlobbyremark] = useState("");
  
  const [astaircase, setastaircase] = useState("");
  const [astaircaseType, setastaircaseType] = useState("");
  const [astaircaseCondition, setastaircaseCondition] = useState("");
  const [astaircaseremark, setastaircaseremark] = useState("");
  
  const [aEntranceLobby, setaEntranceLobby] = useState("");
  const [aEntranceLobbyCondition, setaEntranceLobbyCondition] = useState("");
  const [aentranceLobbyremark, setaentranceLobbyremark] = useState("");

  const [aMeetingRoom, setaMeetingRoom] = useState("");
  const [aconditonofMeetingRoom, setaConditonofMeetingRoom] = useState("");
  const [aMeetingRoomremark, setaMeetingRoomremark] = useState("");
  
  const [aClubHouse, setaClubHouse] = useState("");
  const [aClubHouseCondition, setaClubHouseCondition] = useState("");
  const [aClubHouseremark, setaClubHouseremark] = useState("");

  const [aPlayGround, setaPlayGround] = useState("");
  const [aPlayGroundCondition, setaPlayGroundCondition] = useState("");
  const [aPlayGroundSubtype, setaPlayGroundSubtype] = useState("");
  const [aPlayGroundremark, setaPlayGroundremark] = useState("");
  
  const [aSwimmingPool, setaSwimmingPool] = useState("");
  const [aSwimmingPoolType, setaSwimmingPoolType] = useState("");
  const [aSwimmingPoolConditiion, setaSwimmingPoolCondition] = useState("");
  const [aSwimmingPoolRemark, setaSwimmingPoolRemark] = useState("");

  const [aJoggingTrack, setaJoggingTrack] = useState("");
  const [aJoggingTrackCondition, setaJoggingTrackCondition] = useState("");
  const [aJoggingTrackRemark, setaJoggingTrackRemark] = useState("");

  const [aReflexology, setaReflexology] = useState("");
  const [aReflexologyCondition, setaReflexologyCondition] = useState("");
  const [aReflexologyRemark, setaReflexologyRemark] = useState("");
  
  const [aCycleTrack, setaCycleTrack] = useState("");
  const [aCycleTrackCondition, setaCycleTrackCondition] = useState("");
  const [aCycleTrackRemark, setaCycleTrackRemark] = useState("");

  const [aLandScaping, setaLandScaping] = useState("");

  const [aPublicAreaLighting, setaPublicAreaLighting] = useState("");
  const [aPublicAreaLightingCondition, setaPublicAreaLightingCondition] = useState("");
  const [aPublicAreaLightingRemark, setaPublicAreaLightingRemark] = useState("");

  const [aOtherAmenities, setaOtherAmenities] = useState("");
  const [aOtherAmenitiesCondition, setaOtherAmenitiesCondition] = useState("");
  const [aOtherAmenitiesRemark, setaOtherAmenitiesRemark] = useState("");




  const [aliftphoto, setaliftphoto] = useState("");
  const [aliftlobbyphoto, setaliftlobbyphoto] = useState("");
  const [astaircasephoto, setastaircasephoto] = useState("");
  const [aentrancelobbyephoto, setaentrancelobbyephoto] = useState("");
  const [aMeetingRoomphoto, setaMeetingRoomphoto] = useState("");
  const [aClubHousephoto, setaClubHousephoto] = useState("");
  const [aPlayGroundphoto, setaPlayGroundphoto] = useState("");
  const [aSwimmingPoolphoto, setaSwimmingPoolphoto] = useState("");
  const [aJoggingTrackphoto, setaJoggingTrackphoto] = useState("");
  const [aReflexologyphoto, setaReflexologyphoto] = useState("");
  const [aLandScapingphoto, setaLandScapingphoto] = useState("");
  const [aPublicAreaLightingphoto, setaPublicAreaLightingphoto] = useState("");
  const [aOtherAmenitiesphoto, setaOtherAmenitiesphoto] = useState("");
  

  const onSubmit = () => {};
  return (
    <div className="bg-slate-200">
      <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
          Amenities
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          action=""
        >
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setalift(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Lift</h4>
            <input type="radio" name="lift" value="PERSONAL LIFT" />
            <label>PERSONAL LIFT</label> <br />
            <input type="radio" name="lift" value="COMMON PUBLIC LIFT" />
            <label>COMMON PUBLIC LIFT</label>
            <br />
            <input type="radio" name="lift" value="SERVICE LIFT (STREACHER)" />
            <label>SERVICE LIFT (STREACHER)</label>
            <br />
            <input type="radio" name="lift" value="FIRE LIFT" />
            <label>FIRE LIFT</label>
            <br />
            <input type="radio" name="lift" value="NO LIFT" />
            <label>NO LIFT</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaliftType(e.target.value)}
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
            onChange={(e) => setaliftCondition(e.target.value)}
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
              onChange={(e) => setaliftremark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaliftLobby(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">lift Lobby</h4>
            <input type="radio" name="condition" value="Personal Lobby" />
            <label>Personal Lobby</label> <br />
            <input type="radio" name="condition" value="Common Lobby" />
            <label>Common Lobby</label>
            <br />
            <input type="radio" name="condition" value="N/A" />
            <label>N/A</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaLobbySubtype(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Common Lobby Subtypes</h4>
            <input type="radio" name="lobbysubtype" value="Within 2" />
            <label>Within 2</label> <br />
            <input type="radio" name="lobbysubtype" value="Within 3" />
            <label>Within 3</label> <br />
            <input type="radio" name="lobbysubtype" value="Within 4" />
            <label>Within 4</label> <br />
            <input type="radio" name="lobbysubtype" value="Within 5" />
            <label>Within 5</label> <br />
            <input type="radio" name="lobbysubtype" value="Within 6" />
            <label>Within 6</label> <br />
            <input type="radio" name="lobbysubtype" value="More than 6" />
            <label>More than 6</label> <br />
            <input type="radio" name="lobbysubtype" value="N/A" />
            <label>N/A</label> <br />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaliftLobbyCondition(e.target.value)}
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
              onChange={(e) => setaliftlobbyremark(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Staircase</h4>
            <p className="italic font-light text-sm">
              numbers to be mention
            </p>
            <Input
              placeholder=""
              onChange={(e) => setastaircase(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setastaircaseType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Type of Staircase</h4>
            <input type="radio" name="lobbycondition" value="Common Staircase" />
            <label>Common Staircase</label> <br />
            <input type="radio" name="lobbycondition" value="Fire Staircase" />
            <label>Fire Staircase</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setastaircaseCondition(e.target.value)}
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
              onChange={(e) => setastaircaseremark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaEntranceLobby(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Entrance Lobby</h4>
            <input type="radio" name="entrancelobby" value="No Lobby" />
            <label>No Lobby</label> <br />
            <input type="radio" name="entrancelobby" value="Basic (only security table)" />
            <label>Basic (only security table)</label>
            <br />
            <input type="radio" name="entrancelobby" value="with Sofa" />
            <label>with Sofa</label>
            <br />
            <input type="radio" name="entrancelobby" value="Highend (with Security table, sitting arrangement)" />
            <label>Highend (with Security table, sitting arrangement)</label>
            <br />
            <input type="radio" name="entrancelobby" value="Highend lobby  with smart shopping" />
            <label>Highend lobby  with smart shopping</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaEntranceLobbyCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Entrance Lobby</h4>
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
              onChange={(e) => setaentranceLobbyremark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaMeetingRoom(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Society Meeting room</h4>
            <input type="radio" name="entrancelobbycondition" value="No Meeting Room" />
            <label>No Meeting Room</label> <br />
            <input type="radio" name="entrancelobbycondition" value="In the Building" />
            <label>In the Building</label>
            <br />
            <input type="radio" name="entrancelobbycondition" value="Stand Alone Indivitual Structure" />
            <label>Stand Alone Indivitual Structure</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaConditonofMeetingRoom(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Society Meeting room</h4>
            <input type="radio" name="entrancelobbycondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="entrancelobbycondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="entrancelobbycondition" value="Bad" />
            <label>Bad</label>
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Meeting Room Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setaMeetingRoomremark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaClubHouse(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Club House(Gym)</h4>
            <input type="radio" name="gym" value="In the Building" />
            <label>In the Building</label> <br />
            <input type="radio" name="gym" value="Stand Alone Structure" />
            <label>Stand Alone Structure</label>
            <br />
            <input type="radio" name="gym" value="N/A" />
            <label>N/A</label>
          </div>    
          
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaClubHouseCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Club House(Gym)</h4>
            <input type="radio" name="gymcondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="gymcondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="gymcondition" value="Bad" />
            <label>Bad</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Club House Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setaClubHouseremark(e.target.value)}
              required
              fullWidth
            />
          </div>


          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaPlayGround(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Play Ground</h4>
            <input type="radio" name="playGround" value="On Ground" />
            <label>On Ground</label> <br />
            <input type="radio" name="playGround" value="On Podium" />
            <label>On Podium</label>
            <br />
            <input type="radio" name="playGround" value="On terrace" />
            <label>On terrace</label>
          </div>  
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaPlayGroundSubtype(e.target.value)}
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
            onChange={(e) => setaPlayGroundCondition(e.target.value)}
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
              onChange={(e) => setaPlayGroundremark(e.target.value)}
              required
              fullWidth
            />
          </div>
     
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaSwimmingPool(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Swimming Pool</h4>
            <input type="radio" name="SwimmingPool" value="On Ground" />
            <label>On Ground</label> <br />
            <input type="radio" name="SwimmingPool" value="On Podium" />
            <label>On Podium</label>
            <br />
            <input type="radio" name="SwimmingPool" value="On terrace" />
            <label>On terrace</label>
          </div>  
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaSwimmingPoolType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Swimming Pool subtype option</h4>
            <input type="radio" name="SwimmingPool" value="Lap Pool" />
            <label>Lap Pool</label> <br />
            <input type="radio" name="SwimmingPool" value="Kids Pool" />
            <label>Kids Pool</label>
          </div>  
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaSwimmingPoolCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Swimming Pool</h4>
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
              onChange={(e) => setaSwimmingPoolRemark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaJoggingTrack(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Jogging Track</h4>
            <input type="radio" name="JoggingTrack" value="On Ground" />
            <label>On Ground</label> <br />
            <input type="radio" name="JoggingTrack" value="On Podium" />
            <label>On Podium</label>
            <br />
            <input type="radio" name="JoggingTrack" value="On terrace" />
            <label>On terrace</label>
          </div>  
    
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaJoggingTrackCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Jogging Track</h4>
            <input type="radio" name="JoggingTrackcondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="JoggingTrackcondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="JoggingTrackcondition" value="Bad" />
            <label>Bad</label>
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Jogging Track Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setaJoggingTrackRemark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaReflexology(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Reflexology</h4>
            <input type="radio" name="Reflexology" value="On Ground" />
            <label>On Ground</label> <br />
            <input type="radio" name="Reflexology" value="On Podium" />
            <label>On Podium</label>
            <br />
            <input type="radio" name="Reflexology" value="On terrace" />
            <label>On terrace</label>
          </div>  
    
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaReflexologyCondition(e.target.value)}
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
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Reflexology Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setaReflexologyRemark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaCycleTrack(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Cycle Track</h4>
            <input type="radio" name="CycleTrack" value="On Ground" />
            <label>On Ground</label> <br />
            <input type="radio" name="CycleTrack" value="On Podium" />
            <label>On Podium</label>
        
          </div>  
    
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaCycleTrackCondition(e.target.value)}
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
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Cycle Track Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setaCycleTrackRemark(e.target.value)}
              required
              fullWidth
            />
          </div>
  

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaLandScaping(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">LandScaping</h4>
            <input type="radio" name="LandScaping" value="On Ground" />
            <label>On Ground</label> <br />
            <input type="radio" name="LandScaping" value="On Podium" />
            <label>On Podium</label>
            <br />
            <input type="radio" name="LandScaping" value="On terrace" />
            <label>On terrace</label>
          </div> 

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaPublicAreaLighting(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Public Area Lighting</h4>
            <input type="radio" name="PublicAreaLighting" value="For Public Area Lighting" />
            <label>For Public Area Lighting</label> <br />
            <input type="radio" name="PublicAreaLighting" value="For Semi Public Area Lighting" />
            <label>For Semi Public Area Lighting</label><br />
            <input type="radio" name="PublicAreaLighting" value="For Personal Home Use" />
            <label>For Personal Home Use</label> <br />
            <input type="radio" name="PublicAreaLighting" value="For Water Heating" />
            <label>For Water Heating</label><br />
        
          </div>  
    
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaPublicAreaLightingCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Public Area Lighting</h4>
            <input type="radio" name="PublicAreaLightingcondition" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="PublicAreaLightingcondition" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="PublicAreaLightingcondition" value="Bad" />
            <label>Bad</label>
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Public Area Lighting Remark</h4>
            <Input
              placeholder=""
              onChange={(e) => setaPublicAreaLightingRemark(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaOtherAmenities(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Other Amenities</h4>
            <input type="radio" name="OtherAmenities" value="Rain Water Harvesting" />
            <label>Rain Water Harvesting</label> <br />
            <input type="radio" name="OtherAmenities" value="Ground Water Recharge" />
            <label>Ground Water Recharge</label><br />
            <input type="radio" name="OtherAmenities" value="Water Treatment Plant" />
            <label>Water Treatment Plant</label> <br />
            <input type="radio" name="OtherAmenities" value="Wifi Lounge" />
            <label>Wifi Lounge</label><br />
        
          </div>  
    
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setaOtherAmenitiesCondition(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Condition of Other Amenities</h4>
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
              onChange={(e) => setaOtherAmenitiesRemark(e.target.value)}
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
                setaliftphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
            </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of lift Lobby</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setaliftlobbyphoto(e.target.files[0]);
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
                setastaircasephoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of entrance Lobby</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setaentrancelobbyephoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of Society Meeting room</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setaMeetingRoomphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of ClubHouse(Gym)</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setaClubHousephoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of PlayGround</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setaPlayGroundphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of Swimming Pool</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setaSwimmingPoolphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of Jogging Track</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setaJoggingTrackphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of Reflexology</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setaReflexologyphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of LandScaping</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setaLandScapingphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of Public Area Lighting</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setaPublicAreaLightingphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of Other Amenities</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setaOtherAmenitiesphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="no."
              fullWidth
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Amenities;
