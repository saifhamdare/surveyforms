import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
const Cuisine = () => {
    const[stCuisine,setstCuisine]=useState('')``
  const onSubmit = () => {};
  return (
    <div className="bg-slate-200 capitalize	">
      <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
         Cuisine
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
            
            <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstCuisine(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Husband Travel To Work by 
            </h4>
            <input type="radio" name="cuisine" value="Veg" />
            <label>Veg</label>
            <br />
            <input type="radio" name="cuisine" value="Non Veg" />
            <label>Non Veg</label>
            <br />
            <input type="radio" name="cuisine" value="Eggetarian" />
            <label>Eggetarian</label>
            <br />
            <input type="radio" name="cuisine" value="Jain" />
            <label>Jain</label>
            <br />
            <input type="radio" name="cuisine" value="Vegan" />
            <label>Vegan</label>
          </div>   
            
        </form>
        
      </div>
    </div>
  );
};

export default Cuisine;
