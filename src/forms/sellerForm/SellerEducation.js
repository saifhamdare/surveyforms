import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
const SellerEducation = () => {
const[seHusbandQualification,setseHusbandQualification]=useState('')
const[seHusbandStream,setseHusbandStream]=useState('')
const[seHusbandCollegeName,setseHusbandCollegeName]=useState('')

const[seWifeQualification,setseWifeQualification]=useState('')
const[seWifeStream,setseWifeStream]=useState('')
const[seWifeCollegeName,setseWifeCollegeName]=useState('')


  const onSubmit = () => {};
  return (
    <div className="bg-slate-200 capitalize	">
      <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
          Seller Education
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setseHusbandQualification(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Husband Highest Qualification</h4>
            <input type="radio" name="hedu" value="less than 10th Class" />
            <label>less than 10th Class</label>
            <br />
            <input type="radio" name="hedu" value="10th Pass" />
            <label>10th Pass</label>
            <br />
            <input type="radio" name="hedu" value="12th Pass" />
            <label>12th Pass</label>
            <br />
            <input type="radio" name="hedu" value="Graduate" />
            <label>Graduate</label>
            <br />
            <input type="radio" name="hedu" value="Post Graduate" />
            <label>Post Graduate</label>
            <br />
            <input type="radio" name="hedu" value="Other Higher Qualification" />
            <label>Other Higher Qualification</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setseHusbandStream(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Husband's Stream</h4>
            <input type="radio" name="hstream" value="Arts" />
            <label>Arts</label>
            <br />
            <input type="radio" name="hstream" value="Science" />
            <label>Science</label>
            <br />
            <input type="radio" name="hstream" value="Commerce" />
            <label>Commerce</label>
            <br />
            <input type="radio" name="hstream" value="Engineering" />
            <label>Engineering</label>
            <br />
            <input type="radio" name="hstream" value="Design" />
            <label>Design</label>
            <br />
            <input type="radio" name="hstream" value="Law" />
            <label>Law</label>
            <br />
            <input type="radio" name="hstream" value="Doctor" />
            <label>Doctor</label>
            <br />
            <input type="radio" name="hstream" value="Management" />
            <label>Management</label>
            <br />
            <input type="radio" name="hstream" value="Other" />
            <label>Other</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
          <h4 className="font-semibold text-lg">Husband's College Name</h4>
          <Input
            placeholder="eg. National college"
            onChange={(e) => setseHusbandCollegeName(e.target.value)}
            required
            fullWidth
          />
        </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setseWifeQualification(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Wife's Highest Qualification</h4>
            <input type="radio" name="wedu" value="less than 10th Class" />
            <label>less than 10th Class</label>
            <br />
            <input type="radio" name="wedu" value="10th Pass" />
            <label>10th Pass</label>
            <br />
            <input type="radio" name="wedu" value="12th Pass" />
            <label>12th Pass</label>
            <br />
            <input type="radio" name="wedu" value="Graduate" />
            <label>Graduate</label>
            <br />
            <input type="radio" name="wedu" value="Post Graduate" />
            <label>Post Graduate</label>
            <br />
            <input type="radio" name="wedu" value="Other Higher Qualification" />
            <label>Other Higher Qualification</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setseWifeStream(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Wife's Stream</h4>
            <input type="radio" name="wstream" value="Arts" />
            <label>Arts</label>
            <br />
            <input type="radio" name="wstream" value="Science" />
            <label>Science</label>
            <br />
            <input type="radio" name="wstream" value="Commerce" />
            <label>Commerce</label>
            <br />
            <input type="radio" name="wstream" value="Engineering" />
            <label>Engineering</label>
            <br />
            <input type="radio" name="wstream" value="Design" />
            <label>Design</label>
            <br />
            <input type="radio" name="wstream" value="Law" />
            <label>Law</label>
            <br />
            <input type="radio" name="wstream" value="Doctor" />
            <label>Doctor</label>
            <br />
            <input type="radio" name="wstream" value="Management" />
            <label>Management</label>
            <br />
            <input type="radio" name="wstream" value="Other" />
            <label>Other</label>
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
          <h4 className="font-semibold text-lg">Wife's College Name</h4>
          <Input
            placeholder="eg. National college"
            onChange={(e) => setseWifeCollegeName(e.target.value)}
            required
            fullWidth
          />
        </div>



        </form>
      </div>
    </div>
  );
};

export default SellerEducation;
