import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
const SellerTravel = () => {
    const [stHusbandTravelBy,setstHusbandTravelBy]=useState('');
    const [stHusbandByRoad,setstHusbandByRoad]=useState('');
    const [stHusbandPrivateVehicle,setstHusbandPrivateVehicle]=useState('');
    const [stHusbandPublicVehicle,setstHusbandPublicVehicle]=useState('');
  
    const [stWifeTravelBy,setstWifeTravelBy]=useState('');
    const [stWifeByRoad,setstWifeByRoad]=useState('');
    const [stWifePrivateVehicle,setstWifePrivateVehicle]=useState('');
    const [stWifePublicVehicle,setstWifePublicVehicle]=useState('');


  const onSubmit = () => {};
  return (
    <div className="bg-slate-200 capitalize	">
      <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
          Seller Travel To work
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstHusbandTravelBy(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Husband Travel To Work by 
            </h4>
            <input type="radio" name="htravelby" value="By Road" />
            <label>By Road</label>
            <br />
            <input type="radio" name="htravelby" value="Railway" />
            <label>Railway</label>
            <br />
            <input type="radio" name="htravelby" value="Metro" />
            <label>Metro</label>
            <br />
            <input type="radio" name="htravelby" value="Walking" />
            <label>Walking</label>
            <br />
            <input type="radio" name="htravelby" value="Cycling" />
            <label>Cycling</label>
          </div>  

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstHusbandByRoad(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
               by Road (Husband) 
            </h4>
            <input type="radio" name="hbyroad" value="Private Vehicle(self owned)" />
            <label>Private Vehicle(self owned)</label>
            <br />
            <input type="radio" name="hbyroad" value="Public Vehical (Cab,Auto,Bus)" />
            <label>Public Vehical (Cab,Auto,Bus)</label>
          </div>    

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstHusbandPrivateVehicle(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
            Public Vehical (Cab,Auto,Bus) Husband  
            </h4>
            <input type="radio" name="hprivatevehical" value="4 Wheeler" />
            <label>4 Wheeler</label>
            <br />
            <input type="radio" name="hprivatevehical" value="2 Wheeler" />
            <label>2 Wheeler</label>
          </div>    

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
          >
            <h4 className="font-semibold text-lg">
            Private Vehicle(self owned) Husband  
            </h4>
            <Input
              placeholder="Ola, ST Bus"
              onChange={(e) => setstHusbandPublicVehicle(e.target.value)}
              required
              fullWidth
            />
          </div>    















          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstWifeTravelBy(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Husband Travel To Work by 
            </h4>
            <input type="radio" name="htravelby" value="By Road" />
            <label>By Road</label>
            <br />
            <input type="radio" name="htravelby" value="Railway" />
            <label>Railway</label>
            <br />
            <input type="radio" name="htravelby" value="Metro" />
            <label>Metro</label>
            <br />
            <input type="radio" name="htravelby" value="Walking" />
            <label>Walking</label>
            <br />
            <input type="radio" name="htravelby" value="Cycling" />
            <label>Cycling</label>
          </div>  

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstWifeByRoad(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
               by Road (Husband) 
            </h4>
            <input type="radio" name="hbyroad" value="Private Vehicle(self owned)" />
            <label>Private Vehicle(self owned)</label>
            <br />
            <input type="radio" name="hbyroad" value="Public Vehical (Cab,Auto,Bus)" />
            <label>Public Vehical (Cab,Auto,Bus)</label>
          </div>    

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstWifePrivateVehicle(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
            Public Vehical (Cab,Auto,Bus) Husband  
            </h4>
            <input type="radio" name="hprivatevehical" value="4 Wheeler" />
            <label>4 Wheeler</label>
            <br />
            <input type="radio" name="hprivatevehical" value="2 Wheeler" />
            <label>2 Wheeler</label>
          </div>    

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
          >
            <h4 className="font-semibold text-lg">
            Private Vehicle(self owned) Husband  
            </h4>
            <Input
              placeholder="Ola, ST Bus"
              onChange={(e) => setstWifePublicVehicle(e.target.value)}
              required
              fullWidth
            />
          </div>    
            
        </form>
      </div>
    </div>
  );
};

export default SellerTravel;
