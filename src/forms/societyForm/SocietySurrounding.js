import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const SocietySurrounding = () => {

const[sosHandymen, setsosHandymen]=useState('')
const[sosHandicapFriendly, setsosHandicapFriendly]=useState('')
const[sosSatelliteTV, setsosSatelliteTV]=useState('')
const[sosGatedSociety, setsosGatedSociety]=useState('')
const[sosLandmark, setsosLandmark]=useState('')
const[sosGreenArea, setsosGreenArea]=useState('')
const[sosAgency, setsosAgency]=useState('')
const[sosOneBHK, setsosOneBHK]=useState('')
const[sosTwoBHK, setsosTwoBHK]=useState('')
const[sosThreeBHK, setsosThreeBHK]=useState('')

    const onSubmit = () => {};
  return (
    <div className="bg-slate-200">
      <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
        Society Ambience, Amenities & Surroundings
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          action=""
        >
            
                  
        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setsosHandymen(Boolean(e.target.value))}
          required
        >
          <h4 className="font-semibold text-lg">Is it easy to get maids, helpers, handymen(carpentry, electrical, plumbers etc ), milk and newspapers ?</h4>
          <input type="radio" name="Handymen" value="Yes" />
          <label>Yes</label> <br />
          <input type="radio" name="Handymen" value="" />
          <label>No</label>
        </div>  
                  
        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setsosHandicapFriendly(Boolean(e.target.value))}
          required
        >
          <h4 className="font-semibold text-lg">Handicap friendly facilities and areas</h4>
          <input type="radio" name="HandicapFriendly" value="Yes" />
          <label>Yes</label> <br />
          <input type="radio" name="HandicapFriendly" value="" />
          <label>No</label>
        </div>  
                  
        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setsosSatelliteTV(Boolean(e.target.value))}
          required
        >
          <h4 className="font-semibold text-lg">Common satellite TV facilities </h4>
          <input type="radio" name="SatelliteTV" value="Yes" />
          <label>Yes</label> <br />
          <input type="radio" name="SatelliteTV" value="" />
          <label>No</label>
        </div>  
                 
                  
        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setsosGatedSociety(Boolean(e.target.value))}
          required
        >
          <h4 className="font-semibold text-lg">Is it a gated society? </h4>
          <input type="radio" name="GatedSociety" value="Yes" />
          <label>Yes</label> <br />
          <input type="radio" name="GatedSociety" value="" />
          <label>No</label>
        </div>  
            
        <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Mention major nearby landmarks </h4>
            <Input
              placeholder="John Doe"
              onChange={(e) => setsosLandmark(e.target.value)}
              required
              fullWidth
            />
          </div>
                  
        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setsosGreenArea(Boolean(e.target.value))}
          required
        >
          <h4 className="font-semibold text-lg">Nearby green areas? </h4>
          <input type="radio" name="GreenArea" value="Yes" />
          <label>Yes</label> <br />
          <input type="radio" name="GreenArea" value="" />
          <label>No</label>
        </div>  
            
        <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Agency for Facilities Management   </h4>
            <p  className="italic font-light text-sm">Write name of agency if yes else mention NA</p>
            <Input
              placeholder="John Doe"
              onChange={(e) => setsosAgency(e.target.value)}
              required
              fullWidth
            />
          </div>
        <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Latest 1 BHK resale price in the society  </h4>
          
            <Input
              placeholder="John Doe"
              onChange={(e) => setsosOneBHK(e.target.value)}
              required
              fullWidth
            />
          </div>
        <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Latest 2 BHK resale price in the society   </h4>
          
            <Input
              placeholder="John Doe"
              onChange={(e) => setsosTwoBHK(e.target.value)}
              required
              fullWidth
            />
          </div>
        <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Latest 3 BHK resale price in the society  </h4>
          
            <Input
              placeholder="John Doe"
              onChange={(e) => setsosThreeBHK(e.target.value)}
              required
              fullWidth
            />
          </div>
            
            
            
         </form>
      </div>
    </div>
  );
};

export default SocietySurrounding;
