import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
const Parking = () => {
const [pFourWheeler,setpFourWheeler]=useState('')
const [pTwoWheeler,setpTwoWheeler]=useState('')
const [pVisitor,setpVisitor]=useState('')
const [pTypeOfParking,setpTypeOfParking]=useState('')

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
       <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Number of 4 Wheeler Parking  </h4>
            <Input
              placeholder="John Doe"
              onChange={(e) => setpFourWheeler(e.target.value)}
              required
              fullWidth
            />
          </div>
       <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Number of 2 Wheeler Parking  </h4>
            <Input
              placeholder="John Doe"
              onChange={(e) => setpTwoWheeler(e.target.value)}
              required
              fullWidth
            />
          </div>
       <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Number of Visitor  Parking Available?  </h4>
            <Input
              placeholder="John Doe"
              onChange={(e) => setpVisitor(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setpTypeOfParking(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Other Fire Fighting Facilities</h4>
            <input type="radio" name="TypeOfParking" value="Open" />
            <label>Open</label> <br />
            <input type="radio" name="TypeOfParking" value="Split" />
            <label>Split</label>
            <input type="radio" name="TypeOfParking" value="Pit" />
            <label>Pit</label> <br />
            <input type="radio" name="TypeOfParking" value="Basement" />
            <label>Basement</label> <br />
            <input type="radio" name="TypeOfParking" value="Podium" />
            <label>Podium</label> <br />
            <input type="radio" name="TypeOfParking" value="Automated Parking Tower " />
            <label>Automated Parking Tower </label> <br />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Parking;
