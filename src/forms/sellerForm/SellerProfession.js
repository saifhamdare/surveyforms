import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
const SellerProfession = () => {

const[spHusbandProfession,setspHusbandProfession]=useState('');
const[spHusbandOrganization,setspHusbandOrganization]=useState('');
const[spHusbandBusinessNature,setspHusbandBusinessNature]=useState('');
const[spHusbandLinkedInProfile,setspHusbandLinkedInProfile]=useState('');

const[spWifeProfession,setspWifeProfession]=useState('');
const[spWifeOrganization,setspWifeOrganization]=useState('');
const[spWifeBusinessNature,setspWifeBusinessNature]=useState('');
const[spWifeLinkedInProfile,setspWifeLinkedInProfile]=useState('');

  const onSubmit = () => {};
  return (
    <div className="bg-slate-200 capitalize	">
      <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
          Seller Profession
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setspHusbandProfession(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Husband' Profession 
            </h4>
            <input
              type="radio"
              name="hprofession"
              value="Salaried Individual in Private Organization"
            />
            <label>Salaried Individual in Private Organization</label>
            <br />
            <input type="radio" name="hprofession" value="Govt. Employee" />
            <label>Govt. Employee</label>
            <br />
            <input type="radio" name="hprofession" value="Self Employed" />
            <label>Self Employed</label>
            <br />
            <input type="radio" name="hprofession" value="Retired" />
            <label>Retired</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              {" "}
              Name of Your Organization (Husband){" "}
            </h4>
            <Input
              placeholder="Gada Electronics"
              onChange={(e) => setspHusbandOrganization(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setspHusbandBusinessNature(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg"> Nature of Business (Husband) </h4>
            <p className="italic font-light text-sm">If  Self Employed Selected</p>
            <input type="radio" name="hBusinessNature" value="Salaried Individual in Private Organization" />
            <label>Salaried Individual in Private Organization</label>
            <br />
            <input type="radio" name="hBusinessNature" value="Govt. Employee" />
            <label>Govt. Employee</label>
            <br />
            <input type="radio" name="hBusinessNature" value="Self Employed" />
            <label>Self Employed</label>
            <br />
            <input type="radio" name="hBusinessNature" value="Retired" />
            <label>Retired</label>
          </div>



          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setspWifeProfession(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Wife' Profession 
            </h4>
            <input type="radio" name="wprofession" value="HouseWife" />
            <label>HouseWife</label>
            <br />
            <input
              type="radio"
              name="wprofession"
              value="Salaried Individual in Private Organization"
            />
            <label>Salaried Individual in Private Organization</label>
            <br />
            <input type="radio" name="wprofession" value="Govt. Employee" />
            <label>Govt. Employee</label>
            <br />
            <input type="radio" name="wprofession" value="Self Employed" />
            <label>Self Employed</label>
            <br />
            <input type="radio" name="wprofession" value="Retired" />
            <label>Retired</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              {" "}
              Name of Your Organization (Wife){" "}
            </h4>
            <Input
              placeholder="Gada Electronics"
              onChange={(e) => setspWifeOrganization(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setspWifeBusinessNature(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg"> Nature of Business (Wife) </h4>
            <p className="italic font-light text-sm">If  Self Employed Selected</p>
            <input type="radio" name="wBusinessNature" value="Salaried Individual in Private Organization" />
            <label>Salaried Individual in Private Organization</label>
            <br />
            <input type="radio" name="wBusinessNature" value="Govt. Employee" />
            <label>Govt. Employee</label>
            <br />
            <input type="radio" name="wBusinessNature" value="Self Employed" />
            <label>Self Employed</label>
            <br />
            <input type="radio" name="wBusinessNature" value="Retired" />
            <label>Retired</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              {" "}
              Husband LinkedIn Profile
            </h4>
            <Input
              placeholder="Optional"
              onChange={(e) => setspHusbandLinkedInProfile(e.target.value)}
              
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              {" "}
              Wife LinkedIn Profile
            </h4>
            <Input
              placeholder="Optional"
              onChange={(e) => setspWifeLinkedInProfile(e.target.value)}
         
              fullWidth
            />
          </div>


        </form>
      </div>
    </div>
  );
};

export default SellerProfession;
