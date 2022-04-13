import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";


const SecuritySystem = () => {
    const [ssDrinkingWater, setssDrinkingWater] = useState("");
    const [ssFlushWater, setssFlushWater] = useState("");
    const [ssTreatedWater, setssTreatedWater] = useState("");
    const [ssFireFightingTank, setssFireFightingTank] = useState("");
    const [ssSprinklerSystem, setssSprinklerSystem] = useState("");
    const [ssSmokeDetection, setssSmokeDetection] = useState("");
    const [ssOtherFire, setssOtherFire] = useState("");
    const [ssCCTV, setssCCTV] = useState("");
    const [ssCCTVSubOption, setssCCTVSubOption] = useState("");
    const [ssIntercom, setssIntercom] = useState("");
    const [ssAntiTheftAlarm, setssAntiTheftAlarm] = useState("");
    const [ssMetalDetector, setssMetalDetector] = useState("");
    const [ssTempretureScreening, setssTempretureScreening] = useState("");
    const [ssDayShiftGrFloorMen, setssDayShiftGrFloorMen] = useState("");
    const [ssDayShiftGrFloorWomen, setssDayShiftGrFloorWomen] = useState("");
    const [ssDayShiftPodiumMen, setssDayShiftPodiumMen] = useState("");
    const [ssDayShiftPodiumWomen, setssDayShiftPodiumWomen] = useState("");
    const [ssDayShiftTerraceMen, setssDayShiftTerraceMen] = useState("");
    const [ssDayShiftTerraceWomen, setssDayShiftTerraceWomen] = useState("");
    const [ssNightShiftGrFloorMen, setssNightShiftGrFloorMen] = useState("");
    const [ssNightShiftGrFloorWomen, setssNightShiftGrFloorWomen] = useState("");
    const [ssNightShiftPodiumMen, setssNightShiftPodiumMen] = useState("");
    const [ssNightShiftPodiumWomen, setssNightShiftPodiumWomen] = useState("");
    const [ssNightShiftTerraceMen, setssNightShiftTerraceMen] = useState("");
    const [ssNightShiftTerraceWomen, setssNightShiftTerraceWomen] = useState("");
   



    const onSubmit = () => {};
  return (
        <div className="bg-slate-200">
      <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
          Services + Security Systems (Water Tanks) 
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          action=""
        >
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setssDrinkingWater(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Drinking Water</h4>
            <input type="radio" name="DrinkingWater" value="UnderGround Tank" />
            <label>UnderGround Tank</label> <br />
            <input type="radio" name="DrinkingWater" value="OverHead Tank" />
            <label>OverHead Tank</label>
            <br />
            <input type="radio" name="DrinkingWater" value="N/A" />
            <label>N/A</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setssFlushWater(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Flush Water</h4>
            <input type="radio" name="FlushWater" value="UnderGround Tank" />
            <label>UnderGround Tank</label> <br />
            <input type="radio" name="FlushWater" value="OverHead Tank" />
            <label>OverHead Tank</label>
            <br />
            <input type="radio" name="FlushWater" value="N/A" />
            <label>N/A</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setssTreatedWater(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Treated Water</h4>
            <input type="radio" name="TreatedWater" value="UnderGround Tank" />
            <label>UnderGround Tank</label> <br />
            <input type="radio" name="TreatedWater" value="OverHead Tank" />
            <label>OverHead Tank</label>
            <br />
            <input type="radio" name="TreatedWater" value="N/A" />
            <label>N/A</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setssFireFightingTank(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Fire Fighting Tank</h4>
            <input type="radio" name="FireFightingTank" value="UnderGround Tank" />
            <label>UnderGround Tank</label> <br />
            <input type="radio" name="FireFightingTank" value="OverHead Tank" />
            <label>OverHead Tank</label>
            <br />
            <input type="radio" name="FireFightingTank" value="N/A" />
            <label>N/A</label>
          </div>
      
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setssSprinklerSystem(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Sprinklers System</h4>
            <input type="radio" name="SprinklerSystem" value="In public Area" />
            <label>In public Area</label> <br />
            <input type="radio" name="SprinklerSystem" value="In semi Public area(Lift Lobby)" />
            <label>In semi Public area(Lift Lobby)</label>
            <br />
            <input type="radio" name="SprinklerSystem" value="In private Area(Individual Flat)" />
            <label>In private Area(Individual Flat)</label>
            <br />
            <input type="radio" name="SprinklerSystem" value="N/A" />
            <label>N/A</label>
          </div>
      
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setssSmokeDetection(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Smoke Detection</h4>
            <input type="radio" name="SmokeDetection" value="In public Area" />
            <label>In public Area</label> <br />
            <input type="radio" name="SmokeDetection" value="In semi Public area(Lift Lobby)" />
            <label>In semi Public area(Lift Lobby)</label>
            <br />
            <input type="radio" name="SmokeDetection" value="In private Area(Individual Flat)" />
            <label>In private Area(Individual Flat)</label>
            <br />
            <input type="radio" name="SmokeDetection" value="N/A" />
            <label>N/A</label>
          </div>
      
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setssOtherFire(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Other Fire Fighting Facilities</h4>
            <input type="radio" name="OtherFire" value="Fire Hydrant" />
            <label>Fire Hydrant</label> <br />
            <input type="radio" name="OtherFire" value="Fire Breaching Point" />
            <label>Fire Breaching Point(to connect fire Fighting Truck Supply)</label>
            <input type="radio" name="OtherFire" value="Fire Alarm" />
            <label>Fire Alarm</label> <br />
            <input type="radio" name="OtherFire" value="Lightning arrestors" />
            <label>Lightning arrestors</label> <br />
          </div>
      
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setssCCTV(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">CCTV</h4>
            <input type="radio" name="CCTV" value="In public Area" />
            <label>In public Area</label> <br />
            <input type="radio" name="CCTV" value="In semi Public area(Lift Lobby)" />
            <label>In semi Public area(Lift Lobby)</label>
            <br />
            <input type="radio" name="CCTV" value="N/A" />
            <label>N/A</label>
          </div>
      
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setssCCTVSubOption(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Fire Extinguisher</h4>
            <input type="radio" name="CCTVSubOption" value="Screen For Security" />
            <label>Screen For Security</label> <br />
            <input type="radio" name="CCTVSubOption" value="Screen For Security & Individual Flats" />
            <label>Screen For Security & Individual Flats</label>
            <br />
            <input type="radio" name="CCTVSubOption" value="N/A" />
            <label>N/A</label>
          </div>
 
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setssIntercom(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">Intercom</h4>
            <input type="radio" name="Intercom" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="Intercom" value="" />
            <label>No</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setssAntiTheftAlarm(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Anti Theft Alarm</h4>
            <input type="radio" name="AntiTheftAlarm" value="In Public Area" />
            <label>In Public Area</label> <br />
            <input type="radio" name="AntiTheftAlarm" value="In Semi Public Area (Lift Lobby)" />
            <label>In Semi Public Area (Lift Lobby)</label>
            <br />
            <input type="radio" name="AntiTheftAlarm" value="In Private Area(For Individual Flats)" />
            <label>In Private Area(For Individual Flats)</label>
          </div>
      
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setssMetalDetector(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Metal Detector Screening </h4>
            <input type="radio" name="MetalDetector" value="Manual" />
            <label>Manual</label> <br />
            <input type="radio" name="MetalDetector" value="Fixed" />
            <label>Fixed</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setssTempretureScreening(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">Tempreture Screening</h4>
            <input type="radio" name="TempretureScreening" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="TempretureScreening" value="" />
            <label>No</label>
          </div>

       

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Day Shift at Gr Floor no. of Men </h4>
            <Input
              placeholder=""
              onChange={(e) => setssDayShiftGrFloorMen(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Day Shift at Gr Floor no. of Women </h4>
            <Input
              placeholder=""
              onChange={(e) => setssDayShiftGrFloorWomen(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>


          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Day Shift on Podium no. of Men </h4>
            <Input
              placeholder=""
              onChange={(e) => setssDayShiftPodiumMen(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Day Shift on Podium no. of Women </h4>
            <Input
              placeholder=""
              onChange={(e) => setssDayShiftPodiumWomen(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Day Shift on Terrace of Men </h4>
            <Input
              placeholder=""
              onChange={(e) => setssDayShiftTerraceMen(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Day Shift on Terrace of Women </h4>
            <Input
              placeholder=""
              onChange={(e) => setssDayShiftTerraceWomen(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Night Shift at Gr Floor no. of Men </h4>
            <Input
              placeholder=""
              onChange={(e) => setssNightShiftGrFloorMen(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Night Shift at Gr Floor no. of Women </h4>
            <Input
              placeholder=""
              onChange={(e) => setssNightShiftGrFloorWomen(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>


          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Night Shift on Podium no. of Men </h4>
            <Input
              placeholder=""
              onChange={(e) => setssNightShiftPodiumMen(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Night Shift on Podium no. of Women </h4>
            <Input
              placeholder=""
              onChange={(e) => setssNightShiftPodiumWomen(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Night Shift on Terrace of Men </h4>
            <Input
              placeholder=""
              onChange={(e) => setssNightShiftTerraceMen(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Night Shift on Terrace of Women </h4>
            <Input
              placeholder=""
              onChange={(e) => setssNightShiftTerraceWomen(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>






          </form>
          </div>
    </div>
  )
}

export default SecuritySystem