import { Input } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PlaceInfo = () => {

  const [pigeoCode, setpiGeocode] = useState("");
  const [picookslivingNearby, setpiCookslivingNearby] = useState("");
  const [pisurroundingArea, setpiSurroundingArea] = useState("");
  const [pihighwayFromSociety, setpiHighwayFromSociety] = useState("");
  const [pilocalMarketName, setpiLocalMarketName] = useState("");
  const [pilocalMarketDistance, setpiLocalMarketDistance] = useState("");
  const [pigroceryStoresName, setpiGroceryStoresName] = useState("");
  const [pivegetablesStoresName, setpiVegetablesStoresName] = useState("");
  const [picommercialEstablishments, setpiCommercialEstablishments] = useState("");
  const [pivicinity, setpiVicinity] = useState("");
  const [piaccessForVehicles, setpiAccessForVehicles] = useState("");
  const [pimaintained, setpiMaintained] = useState("");
  const [pianyRepair, setpiAnyRepair] = useState("");
  const [pistructureQuality, setpiStructureQuality] = useState("");
  const [piremark, setpiRemark] = useState("");

  const navigate = useNavigate();

  const successNotify = () => toast.success("form filled Successfully",{
    position:'bottom-center'
  });
  const failedNotify = () => toast.error("something went wrong",{
    position:'bottom-center'
  });
 

  const getLoaction = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      setpiGeocode({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  };
  const updateLoaction = `${pigeoCode.lat} , ${pigeoCode.long}`;

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      geo_location: updateLoaction,
      number_of_maids: +picookslivingNearby,
      cleanliness: pimaintained,
      time_to_highway: pihighwayFromSociety,
      market_name: pilocalMarketName,
      market_distance: +pilocalMarketDistance,
      top_grocery_stores: pigroceryStoresName,
      top_vegetable_stores: pivegetablesStoresName,
      shops_within_society: picommercialEstablishments,
      surrounding: pivicinity,
      easy_access_to_road: piaccessForVehicles,
      society_maintenance: pisurroundingArea,
      ongoing_maintenance: pianyRepair,
      structure_quality: pistructureQuality,
      remarks: piremark,
    };
    const data = {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios.put(
      `https://operations.roushik.com/api/tasks/${localStorage.getItem('property_id')}/place-info/`,
      body,
      { headers: data })
      .then((res)=>{
        successNotify()
        navigate('/form-list')
      } )
      .catch((err)=>{
        failedNotify()
      })
  };


  return (
    <div className="bg-slate-200">
       <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
          Place information
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          action=""
        >

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Enter geolocation of society{" "}
            </h4>
            <p className="italic font-light text-sm">
              Enter comma separated value of geo-coordinates.
            </p>
            <Input
              placeholder="no."
              onChange={(e) => setpiGeocode(e.target.value)}
              value={updateLoaction}
              required
              disabled
            />
            <button
              className="border-2 bg-sky-500 text-white font-medium p-1 px-2 rounded-xl ml-3 "
              onClick={getLoaction}
            >
              get location
            </button>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Number of full time / part time maids/ cooks living near by
            </h4>
            <p className="italic font-light text-sm">
              Please enter in numbers.
            </p>
            <Input
              placeholder="no."
              onChange={(e) => setpiCookslivingNearby(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setpiSurroundingArea(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Please check whether the society surrounding area is clean or not
              ?{" "}
            </h4>
            <p className="italic font-light text-sm">
              Good means approach road, entrance are clean also no garbage dump
              is visible.
            </p>
            <input type="radio" name="surrounding" id="Good" value="Good" />
            <label>Good</label>
            <br />
            <input type="radio" name="surrounding" id="Okay" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="surrounding" id="Bad" value="Bad" />
            <label>Bad</label>
            <br />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              How long does it take to reach the highway from society ?{" "}
            </h4>
            <p className="italic font-light text-sm">
              Check Google for peak hours. Mention zero in hours when it is
              under an hour
            </p>
            <Input
              onChange={(e) => setpiHighwayFromSociety(e.target.value)}
              required
              fullWidth
              placeholder="01:15"
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Please provide the local market name{" "}
            </h4>
            <p className="italic font-light text-sm">
              We should system check on Google.
            </p>
            <Input
              placeholder="Bhindi Bazaar"
              onChange={(e) => setpiLocalMarketName(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Please provide local market distance (in Km){" "}
            </h4>
            <p className="italic font-light text-sm">
              We should system check on Google.
            </p>
            <Input
              placeholder="no."
              onChange={(e) => setpiLocalMarketDistance(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Please provide top 2 grocery stores' name.{" "}
            </h4>
            <p className="italic font-light text-sm">
              Enter in this format (Mahesh Kirana-100-9790******, Dilip
              Store-500-9789******). "Shop name (hifen) distance in
              meters(hifen) phone number)".
            </p>
            <Input
              placeholder="no."
              onChange={(e) => setpiGroceryStoresName(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Please provide top 2 vegetables stores' name.{" "}
            </h4>
            <p className="italic font-light text-sm">
              Enter in this format (Mahesh Kirana-100-9790******, Dilip
              Store-500-9789******). "Shop name (hifen) distance in
              meters(hifen) phone number)"
            </p>
            <Input
              placeholder="no."
              onChange={(e) => setpiVegetablesStoresName(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) =>
              setpiCommercialEstablishments(Boolean(e.target.value))
            }
            required
          >
            <h4 className="font-semibold text-lg">
              Are there shops and commercial establishments within the society ?{" "}
            </h4>
            <p className="italic font-light text-sm">
              Check if the groundfloor has shops with general access to public
              or offices being run from the society.
            </p>
            <input type="radio" name="commercial" id="Yes" value="true" />
            <label>Yes</label>
            <br />
            <input type="radio" name="commercial" id="No" value="" />
            <label>No</label>
            <br />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setpiVicinity(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Describe the vicinity/surroundings of the society ?
            </h4>
            <input type="radio" name="cleanliness" id="Clean" value="Clean" />
            <label>Clean</label>
            <br />
            <input
              type="radio"
              name="cleanliness"
              id="Slums & Stalls"
              value="Slums & Stalls"
            />
            <label>Slums & Stalls</label>
            <br />
            <input
              type="radio"
              name="cleanliness"
              id="Trees & Greenery"
              value="Trees & Greenery"
            />
            <label>Trees & Greenery</label>
            <br />
            <input
              type="radio"
              name="cleanliness"
              id="Garbage & Dirt"
              value="Garbage & Dirt"
            />
            <label>Garbage & Dirt</label>
            <br />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setpiAccessForVehicles(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Is the approach road easy to access for vehicles?{" "}
            </h4>
            <input type="radio" name="vehicle" id="Yes" value="true" />
            <label>Yes</label>
            <br />
            <input type="radio" name="vehicle" id="No" value="" />
            <label>No</label>
            <br />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setpiMaintained(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Please check whether the society is maintained well like cleaning,
              staircase, lift, amenities, external painting, leakages etc.{" "}
            </h4>
            <p className="italic font-light text-sm">
              Ok means clean and no painting or leakage damage.Bad means
              unclean, unmaintained and with paint & leakage damages externally.
            </p>
            <input
              type="radio"
              name="maintained"
              className="maintained"
              id="Good"
              value="Good"
            />
            <label>Good</label>
            <br />
            <input
              type="radio"
              name="maintained"
              className="maintained"
              id="Ok"
              value="Ok"
            />
            <label>Ok</label>
            <br />
            <input
              type="radio"
              name="maintained"
              className="maintained"
              id="Bad"
              value="Bad"
            />
            <label>Bad</label>
            <br />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setpiAnyRepair(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Do you see any repair and maintenance work going on in society?{" "}
            </h4>
            <input type="radio" name="anyrepair" id="Yes" value="true" />
            <label>Yes</label>
            <br />
            <input type="radio" name="anyrepair" id="No" value="" />
            <label>No</label>
            <br />
            {/* <input type="radio" name="anyrepair" id="Not" value="null" />
            <label>Not</label> */}
            <br />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setpiStructureQuality(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Is the building structure quality?{" "}
            </h4>
            <p className="italic font-light text-sm">
              Ok means minor visible cracks and/or plant growth on walls. Bad
              means large cracks and plaster holes and/or large leakages.
            </p>
            <input type="radio" name="quality" id="Good" value="Good" />
            <label>Good</label>
            <br />
            <input type="radio" name="quality" id="Okay" value="Okay" />
            <label>Okay</label>
            <br />
            <input type="radio" name="quality" id="bad" value="bad" />
            <label>bad</label>
            <br />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Your Remarks</h4>
            <Input
              placeholder="Your Answer"
              onChange={(e) => setpiRemark(e.target.value)}
              required
              fullWidth
            />
          </div>
         
          <div className="border-2  border-sky-400 bg-sky-300 absolute right-5 px-6 py-2 my-4 rounded-md">
            <button className=" text-white font-bold" type="submit">
              Save
            </button>
          </div>
          <div className="border-2 border-sky-600 absolute left-5 bg-white px-6 py-2 my-4  rounded-md">
            <button
              onClick={() => {
                let result= window.confirm("you will you will loose all your data");
                if(result===true){
                  navigate("/form-list");
                }
              }}
              className="text-sky-600 font-bold"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceInfo;
