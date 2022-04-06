import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const KnowYourSociety = () => {
  const [kysSocietyName, setkysSocietyName] = useState("");
  const [kysFloor, setkysFloor] = useState("");
  const [kysNoise, setkysNoise] = useState("");
  const [kysStrayDogs, setkysStrayDogs] = useState("");
  const [kysClean, setkysClean] = useState("");
  const [kysCrack, setkysCrack] = useState("");
  const [kysRepair, setkysRepair] = useState("");
  const [kysElderly, setkysElderly] = useState("");
  const [kysproperty, setkysproperty] = useState("");
  const [kysSubtype, setkysSubtype] = useState("");
  const [kysPropertySubtype, setkysPropertySubtype] = useState("");
  const [kysCommercialEntities, setkysCommercialEntities] = useState("");

  const onSubmit = () => {};
  return (
    <div className="bg-slate-200">
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
              onChange={(e) => setkysSocietyName(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Floor </h4>
            <Input
              placeholder="8"
              onChange={(e) => setkysFloor(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setkysNoise(Boolean(e.target.value))}
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
            onChange={(e) => setkysStrayDogs(Boolean(e.target.value))}
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
            onChange={(e) => setkysClean(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Is society maintained well like clean staircase/ lift / compound /
              other internal areas ?
            </h4>
            <input type="radio" name="clean" value="Good" />
            <label>Good</label> <br />
            <input type="radio" name="clean" value="Okay" />
            <label>Okay</label> <br />
            <input type="radio" name="clean" value="Bad" />
            <label>Bad</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setkysCrack(Boolean(e.target.value))}
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
            onChange={(e) => setkysRepair(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Do you see any repair or maintenance work going on in the society
              ?
            </h4>
            <input type="radio" name="repair" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="repair" value="" />
            <label>No</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setkysElderly(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Is there any place for elderly people to meet or doing activities
              like Yoga etc ?
            </h4>
            <input type="radio" name="elderly" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="elderly" value="" />
            <label>No</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setkysproperty(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
            YOUR PROPERTY IS IN? 
            </h4>
            <input type="radio" name="elderly" value="STAND ALONE BUILDING" />
            <label>STAND ALONE BUILDING</label> <br />
            <input type="radio" name="elderly" value="CLUSETR OF BUILDINGS (2 OR MORE)" />
            <label>CLUSETR OF BUILDINGS (2 OR MORE)</label> <br />
            <input type="radio" name="elderly" value="ATTACHED BUILDINGS (2 OR MORE)" />
            <label>ATTACHED BUILDINGS (2 OR MORE)</label> <br />
            <input type="radio" name="elderly" value="TOWNSHIP" />
            <label>TOWNSHIP</label> <br />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setkysSubtype(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
            SUBTYPE
            </h4>
            <input type="radio" name="subtype" value="ON GROUND" />
            <label>ON GROUND</label> <br />
            <input type="radio" name="subtype" value="WITH PODIUM" />
            <label>WITH PODIUM</label> <br />
            <input type="radio" name="subtype" value="WITH BASEMENT" />
            <label>WITH BASEMENT</label> <br />
            <input type="radio" name="subtype" value="BASEMENT + PODIUM" />
            <label>BASEMENT + PODIUM</label> <br />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setkysPropertySubtype(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
            PLEASE SELECT PROPERTY SUBTYPE
            </h4>
            <input type="radio" name="propertysubtype" value="WITH INDIVIDUAL COMPOUND" />
            <label>WITH INDIVIDUAL COMPOUND</label> <br />
            <input type="radio" name="propertysubtype" value="NON GATED (NO COMPOUND)" />
            <label>NON GATED (NO COMPOUND)</label> <br />
            <input type="radio" name="propertysubtype" value="NON GATED WITH COMMERCIALS" />
            <label>NON GATED WITH COMMERCIALS</label> <br />
            <input type="radio" name="propertysubtype" value="COMMON COMPOUND WITH COMMERCIALS" />
            <label>COMMON COMPOUND WITH COMMERCIALS</label> <br />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setkysCommercialEntities(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
            SELECT COMMERCIAL ENTITIES IN COMPOUND
            </h4>
            <input type="radio" name="commercialentities" value="RETAIL SHOPS" />
            <label>RETAIL SHOPS</label> <br />
            <input type="radio" name="commercialentities" value="HEALTHCARE" />
            <label>HEALTHCARE</label> <br />
            <input type="radio" name="commercialentities" value="HOSPITALITY" />
            <label>HOSPITALITY</label> <br />
            <input type="radio" name="commercialentities" value="BANK" />
            <label>BANK</label> <br />
            <input type="radio" name="commercialentities" value="GYM" />
            <label>GYM</label> <br />
            <input type="radio" name="commercialentities" value="NA" />
            <label>NA</label> <br />
            </div>




        </form>
      </div>
    </div>
  );
};

export default KnowYourSociety;
