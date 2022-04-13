import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const ImmediateNeigbour = () => {
  const [inNeighbour, setinNeighbour] = useState("");
  const [inNeighbourFamilyConfig, setinNeighbourFamilyConfig] = useState("");
  const [inNeighbourprofession, setinNeighbourprofession] = useState("");
  const [inNeighbourNature, setinNeighbourNature] = useState("");
  const onSubmit = () => {};
  return (
    <div className="bg-slate-200 capitalize	">
      <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
          Immediate Neighbour
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Neighbour's House</h4>
            <p className="italic font-light text-sm">(No. to be mention)</p>
            <Input
              placeholder=""
              onChange={(e) => setinNeighbour(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setinNeighbourFamilyConfig(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Neighbour's Family Configuiration(to br mentioned)
            </h4>
            <input type="radio" name="NeigbourConfiguiration" value="Couple" />
            <label>Couple</label>
            <br />
            <input
              type="radio"
              name="NeigbourConfiguiration"
              value="Small Kid"
            />
            <label>Small Kid</label>
            <br />
            <input
              type="radio"
              name="NeigbourConfiguiration"
              value="Elder Persons"
            />
            <label>Elder Persons</label>
            <br />
            <input
              type="radio"
              name="NeigbourConfiguiration"
              value="Teenagers"
            />
            <label>Teenagers</label>
            <br />
            <input
              type="radio"
              name="NeigbourConfiguiration"
              value="Other Adults"
            />
            <label>Other Adults</label>
            <br />
            <input
              type="radio"
              name="NeigbourConfiguiration"
              value="Single Person"
            />
            <label>Single Person</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setinNeighbourprofession(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Neighbour Profession</h4>
            <input
              type="radio"
              name="nprofession"
              value="Salaried Individual in Private Organization"
            />
            <label>Salaried Individual in Private Organization</label>
            <br />
            <input type="radio" name="nprofession" value="Govt. Employee" />
            <label>Govt. Employee</label>
            <br />
            <input type="radio" name="nprofession" value="Self Employed" />
            <label>Self Employed</label>
            <br />
            <input type="radio" name="nprofession" value="Retired" />
            <label>Retired</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setinNeighbourNature(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Neighbour Profession</h4>
            <input type="radio" name="nNature" value="Talkative" />
            <label>Talkative</label>
            <br />
            <input type="radio" name="nNature" value="Helpful" />
            <label>Helpful</label>
            <br />
            <input type="radio" name="nNature" value="Silent" />
            <label>Silent</label>
            <br />
            <input type="radio" name="nNature" value="Painful" />
            <label>Painful</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImmediateNeigbour;
