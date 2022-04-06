import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";


const SecuritySystem = () => {
    const [alift, setalift] = useState("");


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
            onChange={(e) => setaDrinkingWater(e.target.value)}
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
          </form>
          </div>
    </div>
  )
}

export default SecuritySystem