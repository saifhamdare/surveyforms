import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const SellerLikesAndInterest = () => {

const[stHusbandSocialStatus,setstHusbandSocialStatus]=useState('');
const[stHusbandSocialCircle,setstHusbandSocialCircle]=useState('');
const[stHusbandInterest,setstHusbandInterest]=useState('');

const[stWifeSocialStatus,setstWifeSocialStatus]=useState('');
const[stWifeSocialCircle,setstWifeSocialCircle]=useState('');
const[stWifeInterest,setstWifeInterest]=useState('');



const onSubmit = () => {};
  return (
    <div className="bg-slate-200 capitalize	">
      <ToastContainer autoClose={1500} />
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
          Seller Likes and Interest
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstHusbandSocialStatus(e.target.value)}
            required>
            <h4 className="font-semibold text-lg">Husband's Social Status</h4>
            <input type="radio" name="HusbandSocialStatus" value="Non Social" />
            <label>Non Social</label>
            <br />
            <input type="radio" name="HusbandSocialStatus" value="Social" />
            <label>Social</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstHusbandSocialCircle(e.target.value)}
            required>
            <h4 className="font-semibold text-lg">Husband's Social Circle</h4>
            <input type="radio" name="HusbandSocialCircle" value="Family Member" />
            <label>Family Member</label>
            <br />
            <input type="radio" name="HusbandSocialCircle" value="Society Friends" />
            <label>Society Friends</label>
            <br />
            <input type="radio" name="HusbandSocialCircle" value="College & School Friends" />
            <label>College & School Friends</label>
            <br />
            <input type="radio" name="HusbandSocialCircle" value="Professional Friends" />
            <label>Professional Friends</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstHusbandInterest(e.target.value)}
            required>
            <h4 className="font-semibold text-lg">Husband's Social Circle</h4>
            <input type="checkbox" name="HusbandInterest" value="Travel" />
            <label>Travel</label>
            <br />
            <input type="checkbox" name="HusbandInterest" value="Music" />
            <label>Music</label>
            <br />
            <input type="checkbox" name="HusbandInterest" value="Books" />
            <label>Books</label>
            <br />
            <input type="checkbox" name="HusbandInterest" value="Charity" />
            <label>Charity</label>
            <br />
            <input type="checkbox" name="HusbandInterest" value="Sports" />
            <label>Sports</label>
            <br />
            <input type="checkbox" name="HusbandInterest" value="Spiritual Groups" />
            <label>Spiritual Groups</label>
            <br />
            <input type="checkbox" name="HusbandInterest" value="Clubs" />
            <label>Clubs</label>
          </div>
     
     
     
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstWifeSocialStatus(e.target.value)}
            required>
            <h4 className="font-semibold text-lg">Wife's Social Status</h4>
            <input type="radio" name="WifeSocialStatus" value="Non Social" />
            <label>Non Social</label>
            <br />
            <input type="radio" name="WifeSocialStatus" value="Social" />
            <label>Social</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstWifeSocialCircle(e.target.value)}
            required>
            <h4 className="font-semibold text-lg">Wife's Social Circle</h4>
            <input type="radio" name="WifeSocialCircle" value="Family Member" />
            <label>Family Member</label>
            <br />
            <input type="radio" name="WifeSocialCircle" value="Society Friends" />
            <label>Society Friends</label>
            <br />
            <input type="radio" name="WifeSocialCircle" value="College & School Friends" />
            <label>College & School Friends</label>
            <br />
            <input type="radio" name="WifeSocialCircle" value="Professional Friends" />
            <label>Professional Friends</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setstWifeInterest(e.target.value)}
            required>
            <h4 className="font-semibold text-lg">Wife's Social Circle</h4>
            <input type="checkbox" name="WifeInterest" value="Travel" />
            <label>Travel</label>
            <br />
            <input type="checkbox" name="WifeInterest" value="Music" />
            <label>Music</label>
            <br />
            <input type="checkbox" name="WifeInterest" value="Books" />
            <label>Books</label>
            <br />
            <input type="checkbox" name="WifeInterest" value="Charity" />
            <label>Charity</label>
            <br />
            <input type="checkbox" name="WifeInterest" value="Sports" />
            <label>Sports</label>
            <br />
            <input type="checkbox" name="WifeInterest" value="Spiritual Groups" />
            <label>Spiritual Groups</label>
            <br />
            <input type="checkbox" name="WifeInterest" value="Clubs" />
            <label>Clubs</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerLikesAndInterest;
