import { Input } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
const SellerInfo = () => {
    const [siHusbandName, setsiHusbandName] = useState("");
    const [siWifeName, setsiWifeName] = useState("");
    const [siContactNoPrimary, setsiContactNoPrimary] = useState("");
    const [siContactNoSecondary, setsiContactNoSecondary] = useState("");
    const [siEmail, setsiEmail] = useState("");
    const [siSocietyName, setsiSocietyName] = useState("");
    const [siFloor, setsiFloor] = useState("");
    const [siTotalFamilyMembers, setsiTotalFamilyMembers] = useState("");
    const [siSelectFamilyMember, setsiSelectFamilyMember] = useState("");
    const [siHusbandAge, setsiHusbandAge] = useState("");
    const [siWifeAge, setsiWifeAge] = useState("");
    const [siFamilyMemberSpecialNeeds, setsiFamilyMemberSpecialNeeds] = useState("");
    const [siPetFriendlyHome, setsiPetFriendlyHome] = useState("");
    const [siPetFriendlySociety, setsiPetFriendlySociety] = useState("");
    const [siHandymen, setsiHandymen] = useState("");



    const onSubmit = () => {};
  return (

    <div className="bg-slate-200 capitalize	">
    <ToastContainer autoClose={1500} />
    <div className="form-container className=' m-1 mt-5 ' ">
      <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
        Know Your Seller
      </h2>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
        action=""
      >

        <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
          <h4 className="font-semibold text-lg">Husband's Name </h4>
          <Input
            placeholder="eg. Tarak Mehta"
            onChange={(e) => setsiHusbandName(e.target.value)}
            required
            fullWidth
          />
        </div>

        <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
          <h4 className="font-semibold text-lg">Wife's Name </h4>
          <Input
            placeholder="eg. Daya Mehta"
            onChange={(e) => setsiWifeName(e.target.value)}
            required
            fullWidth
          />
        </div>

        <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
          <h4 className="font-semibold text-lg"> Contact Number</h4>
          <Input
            placeholder="eg. 9874563210"
            onChange={(e) => setsiContactNoPrimary(e.target.value)}
            required
            type="number"
            fullWidth
          />
        </div>

        <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
          <h4 className="font-semibold text-lg">Alternate Contact Number</h4>
          <Input
            placeholder="eg. 9874563210"
            onChange={(e) => setsiContactNoSecondary(e.target.value)}
            required
            type="number"
            fullWidth
          />
        </div>

        <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
          <h4 className="font-semibold text-lg">Email</h4>
          <Input
            placeholder="eg. champak@gmail.com"
            onChange={(e) => setsiEmail(e.target.value)}
            required
            type="email"
            fullWidth
          />
        </div>

        <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
          <h4 className="font-semibold text-lg">Society Name</h4>
          <Input
            placeholder="Gokuldam Society"
            onChange={(e) => setsiSocietyName(e.target.value)}
            required
            fullWidth
          />
        </div>

        <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
          <h4 className="font-semibold text-lg">Floor</h4>
          <Input
            placeholder="eg. 1"
            onChange={(e) => setsiFloor(e.target.value)}
            required
            fullWidth
          />
        </div>

        <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
          <h4 className="font-semibold text-lg">Total Family Members</h4>
          <Input
            placeholder="eg. 1"
            onChange={(e) => setsiTotalFamilyMembers(e.target.value)}
            required
            fullWidth
          />
        </div>

        <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiSelectFamilyMember(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
           Select Family Members
            </h4>
            <input type="checkbox" name="members" value="Yourself" />
            <label>Yourself</label> <br />
            <input type="checkbox" name="members" value="Your Spouse" />
            <label>Your Spouse</label> 
            <br />
            <input type="checkbox" name="members" value="Children" />
            <label>Children</label>
            <br />
            <input type="checkbox" name="members" value="Parent" />
            <label>Parent</label>
            <br />
            <input type="checkbox" name="members" value="Siblings" />
            <label>Siblings</label>
            <br />
            <input type="checkbox" name="members" value="Alone" />
            <label>Alone</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHusbandAge(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Husband Age
            </h4>
            <input type="radio" name="hage" value="less than 30" />
            <label>less than 30</label> 
            <br />
            <input type="radio" name="hage" value="30- 35 " />
            <label>30- 35 </label>
            <br />
            <input type="radio" name="hage" value="35-40" />
            <label>35-40</label>
            <br />
            <input type="radio" name="hage" value="40-45" />
            <label>40-45</label>
            <br />
            <input type="radio" name="hage" value="45-50" />
            <label>45-50</label>
            <br />
            <input type="radio" name="hage" value="50-55" />
            <label>50-55</label>
            <br />
            <input type="radio" name="hage" value="55 and above" />
            <label>55 and above</label>
     
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiWifeAge(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Wife Age
            </h4>
            <input type="radio" name="wage" value="less than 30" />
            <label>less than 30</label> 
            <br />
            <input type="radio" name="wage" value="30- 35 " />
            <label>30- 35 </label>
            <br />
            <input type="radio" name="wage" value="35-40" />
            <label>35-40</label>
            <br />
            <input type="radio" name="wage" value="40-45" />
            <label>40-45</label>
            <br />
            <input type="radio" name="wage" value="45-50" />
            <label>45-50</label>
            <br />
            <input type="radio" name="wage" value="50-55" />
            <label>50-55</label>
            <br />
            <input type="radio" name="wage" value="55 and above" />
            <label>55 and above</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiFamilyMemberSpecialNeeds(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
           Family Member with Special Needs
            </h4>
            <input type="checkbox" name="special" value="Elderly Parents/Grand Parents" />
            <label>Elderly Parents/Grand Parents</label> <br />
            <input type="checkbox" name="special" value="Small Children" />
            <label>Small Children</label> 
            <br />
            <input type="checkbox" name="special" value="Differently Enabled Person" />
            <label>Differently Enabled Person</label>
            <br />
            <input type="checkbox" name="special" value="N/A" />
            <label>N/A</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiPetFriendlyHome(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
            Pet Friendly (Home)
            </h4>
            <input type="radio" name="PetAtHome" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="PetAtHome" value="" />
            <label>No</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiPetFriendlySociety(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
            Is Society/Neighbors Pet Friendly
            </h4>
            <input type="radio" name="PetAtSociety" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="PetAtSociety" value="" />
            <label>No</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHandymen(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
            Is it easy to get  Maid,Helper and Handymen(carpenter,plumber etc)?
            </h4>
            <input type="radio" name="Handymen" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="Handymen" value="" />
            <label>No</label>
          </div>







        </form>
        </div>
    </div>
  )
}

export default SellerInfo