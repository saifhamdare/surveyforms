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
  const [siGeoLocation, setsiGeoLocation] = useState("");
  const [siSellerNativePlace, setsiSellerNativePlace] = useState("");

  const [siTotalFamilyMembers, setsiTotalFamilyMembers] = useState("");
  const [siSelectFamilyMember, setsiSelectFamilyMember] = useState("");
  const [siHusbandAge, setsiHusbandAge] = useState("");
  const [siWifeAge, setsiWifeAge] = useState("");
  const [siFamilyMemberSpecialNeeds, setsiFamilyMemberSpecialNeeds] =
    useState("");
  const [siPetFriendlyHome, setsiPetFriendlyHome] = useState("");
  const [siPetFriendlySociety, setsiPetFriendlySociety] = useState("");
  const [siHandymen, setsiHandymen] = useState("");

  const [siHusbandQualification, setsiHusbandQualification] = useState("");
  const [siHusbandStream, setsiHusbandStream] = useState("");
  const [siHusbandCollegeName, setsiHusbandCollegeName] = useState("");
  const [siWifeQualification, setsiWifeQualification] = useState("");
  const [siWifeStream, setsiWifeStream] = useState("");
  const [siWifeCollegeName, setsiWifeCollegeName] = useState("");
  const [siInfoChildrenInstituteName, setsiInfoChildrenInstituteName] =
    useState("");
  const [siTopUniversity, setsiTopUniversity] = useState("");
  const [siTopInsititute, setsiTopInsititute] = useState("");

  
  const [siHusbandProfessionType, setsiHusbandProfessionType] = useState("");
  const [siHusbandOrganization, setsiHusbandOrganization] = useState("");

  const [siWifeProfessionType, setsiWifeProfessionType] = useState("");
  const [siWifeOrganization, setsiWifeOrganization] = useState("");
  const [siHusbandLinkedInProfile, setsiHusbandLinkedInProfile] = useState("");
  const [siWifeLinkedInProfile, setsiWifeLinkedInProfile] = useState("");
  const [siTravelBy, setsiTravelBy] = useState("");

  const [siHusbandSocialStatus, setsiHusbandSocialStatus] = useState("");
  const [siHusbandSocialCircle, setsiHusbandSocialCircle] = useState("");
  const [siHusbandInterest, setsiHusbandInterest] = useState("");
  const [siWifeSocialStatus, setsiWifeSocialStatus] = useState("");
  const [siWifeSocialCircle, setsiWifeSocialCircle] = useState("");
  const [siWifeInterest, setsiWifeInterest] = useState("");
  const [siLanguages, setsiLanguages] = useState("");
  const [siCuisine, setsiCuisine] = useState("");

  const [siNeighbourHouse, setsiNeighbourHouse] = useState("");
  const [siNeighbourFamilyConfig, setsiNeighbourFamilyConfig] = useState("");
  const [siNeighbourprofessionType, setsiNeighbourprofessionType] =
    useState("");
  const [siNeighbourNature, setsiNeighbourNature] = useState("");

  const [siIntent, setsiIntent] = useState("");
  
  const [siSellerphoto, setsiSellerphoto] = useState("");
  const [siSellerFamilyphoto, setsiSellerFamilyphoto] = useState("");
  
  const [siSellerStory, setsiSellerStory] = useState("");
  const [siSellerRentedDuration, setsiSellerRentedDuration] = useState("");
  const [siSellerPurschaseDuration, setsiSellerPurschaseDuration] = useState("");



  const getLoaction = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      setsiGeoLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  };
  const updateLoaction = `${siGeoLocation.lat} , ${siGeoLocation.long}`;
  const onSubmit = () => {};
  return (
    <div className=" capitalize	 ">
      <ToastContainer autoClose={1500} />
      <div className="form-container m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500   px-1 py-6">
          Know Your Seller
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          action=""
        >
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Husband's Name </h4>
            <Input
              placeholder="eg. Tarak Mehta"
              onChange={(e) => setsiHusbandName(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Wife's Name </h4>
            <Input
              placeholder="eg. Daya Mehta"
              onChange={(e) => setsiWifeName(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg"> Contact Number</h4>
            <Input
              placeholder="eg. 9874563210"
              onChange={(e) => setsiContactNoPrimary(e.target.value)}
              required
              type="number"
              fullWidth
            />
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Alternate Contact Number</h4>
            <Input
              placeholder="eg. 9874563210"
              onChange={(e) => setsiContactNoSecondary(e.target.value)}
              required
              type="number"
              fullWidth
            />
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Email</h4>
            <Input
              placeholder="eg. champak@gmail.com"
              onChange={(e) => setsiEmail(e.target.value)}
              required
              type="email"
              fullWidth
            />
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Society Name</h4>
            <Input
              placeholder="Gokuldam Society"
              onChange={(e) => setsiSocietyName(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Enter geolocation of seller
            </h4>
            <p className="italic font-light text-sm">
              Enter comma separated value of geo-coordinates.
            </p>
            <Input
              placeholder="no."
              onChange={(e) => setsiGeoLocation(e.target.value)}
              value={updateLoaction}
              required
              disabled
            />
            <button
              className="border-2 border-slate-400 bg-sky-500 text-white font-medium p-1 px-2 rounded-xl ml-3 "
              onClick={getLoaction}
            >
              get location
            </button>
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Seller Native Place</h4>
            <Input
              placeholder="Mirzapur"
              onChange={(e) => setsiSellerNativePlace(e.target.value)}
              required
              fullWidth
            />
          </div>
          <h2 className="text-lg font-bold text-sky-500    px-1 py-6">
            Family Details
          </h2>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Total Family Members</h4>
            <Input
              placeholder="eg: 4"
              onChange={(e) => setsiTotalFamilyMembers(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiSelectFamilyMember(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Select Family Members</h4>
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

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Husband Age</h4>
            <Input
              placeholder="eg: 46"
              onChange={(e) => setsiHusbandAge(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Wife Age</h4>
            <Input
              placeholder="eg: 42"
              onChange={(e) => setsiWifeAge(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiFamilyMemberSpecialNeeds(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Family Member with Special Needs
            </h4>
            <input
              type="checkbox"
              name="special"
              value="Elderly Parents/Grand Parents"
            />
            <label>Elderly Parents/Grand Parents</label> <br />
            <input type="checkbox" name="special" value="Small Children" />
            <label>Small Children</label>
            <br />
            <input
              type="checkbox"
              name="special"
              value="Differently Enabled Person"
            />
            <label>Differently Enabled Person</label>
            <br />
            <input type="checkbox" name="special" value="N/A" />
            <label>N/A</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiPetFriendlyHome(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">Pet Friendly (Home)</h4>
            <input type="radio" name="PetAtHome" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="PetAtHome" value="" />
            <label>No</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
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
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHandymen(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Is it easy to get Maid,Helper and Handymen(carpenter,plumber etc)?
            </h4>
            <input type="radio" name="Handymen" value="Yes" />
            <label>Yes</label> <br />
            <input type="radio" name="Handymen" value="" />
            <label>No</label>
          </div>
          <h2 className="text-lg font-bold text-sky-500    px-1 py-6">
            Education
          </h2>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHusbandQualification(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Husband Highest Qualification
            </h4>
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
            <input
              type="radio"
              name="hedu"
              value="Other Higher Qualification"
            />
            <label>Other Higher Qualification</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHusbandStream(e.target.value)}
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
              onChange={(e) => setsiHusbandCollegeName(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiWifeQualification(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Wife's Highest Qualification
            </h4>
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
            <input
              type="radio"
              name="wedu"
              value="Other Higher Qualification"
            />
            <label>Other Higher Qualification</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiWifeStream(e.target.value)}
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
              onChange={(e) => setsiWifeCollegeName(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Pre-school/School/College/University Name of your Children
            </h4>
            <p className="italic font-light text-sm">
              Please Enter Comma Seperated Values
            </p>
            <Input
              placeholder=""
              onChange={(e) => setsiInfoChildrenInstituteName(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiTopUniversity(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Children or any other member belongsto following
              College/University
            </h4>
            <input type="radio" name="topUniversity" value="IIM" />
            <label>IIM</label>
            <br />
            <input type="radio" name="topUniversity" value="IIT" />
            <label>IIT</label>
            <br />
            <input type="radio" name="topUniversity" value="NLIU" />
            <label>NLIU</label>
            <br />
            <input type="radio" name="topUniversity" value="AIIMS" />
            <label>AIIMS</label>
            <br />
            <input type="radio" name="topUniversity" value="IISc" />
            <label>IISc</label>
            <br />
            <input type="radio" name="topUniversity" value="SEPT" />
            <label>SEPT</label>
            <br />
            <input type="radio" name="topUniversity" value="BITS Pilani" />
            <label>BITS Pilani</label>
            <br />
            <input type="radio" name="topUniversity" value="JNU" />
            <label>JNU</label>
            <br />
            <input type="radio" name="topUniversity" value="SPA Mumbai" />
            <label>SPA Mumbai</label>
            <br />
            <input type="radio" name="topUniversity" value="VJTI Mumbai" />
            <label>VJTI Mumbai</label>
            <br />
            <input type="radio" name="topUniversity" value="NIT" />
            <label>NIT</label>
            <br />
            <input type="radio" name="topUniversity" value="NIFT" />
            <label>NIFT</label>
            <br />
            <input type="radio" name="topUniversity" value="BHU" />
            <label>BHU</label>
            <br />
            <input type="radio" name="topUniversity" value="AMU" />
            <label>AMU</label>
            <br />
            <input type="radio" name="topUniversity" value="St Stephan's" />
            <label>St Stephan's</label>
            <br />
            <input
              type="radio"
              name="topUniversity"
              value="Jamia milia Islamia"
            />
            <label>Jamia milia Islamia</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiTopInsititute(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Children or any other member belongsto following
              Institute/services
            </h4>
            <input type="radio" name="TopInsititute" value="ISRO" />
            <label>ISRO</label>
            <br />
            <input type="radio" name="TopInsititute" value="DRDO" />
            <label>DRDO</label>
            <br />
            <input
              type="radio"
              name="TopInsititute"
              value="UPSC(IAS,IPS,IRS)"
            />
            <label>UPSC(IAS,IPS,IRS)</label>
            <br />
            <input type="radio" name="TopInsititute" value="IAF" />
            <label>IAF</label>
            <br />
            <input type="radio" name="TopInsititute" value="INS" />
            <label>INS</label>
            <br />
            <input type="radio" name="TopInsititute" value="Army" />
            <label>Army</label>
            <br />
            <input
              type="radio"
              name="TopInsititute"
              value="Bhabha Atomic center"
            />
            <label>Bhabha Atomic center</label>
          </div>
          <h2 className="text-lg font-bold text-sky-500 px-1 py-6">
            Profession
          </h2>

 

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHusbandProfessionType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Husband's Profession Type</h4>
            <input type="radio" name="hprofessionType" value="Business" />
            <label>Business</label>
            <br />
            <input type="radio" name="hprofessionType" value="Banker" />
            <label>Banker</label>
            <br />
            <input type="radio" name="hprofessionType" value="IT Engineer" />
            <label>IT Engineer</label>
            <br />
            <input type="radio" name="hprofessionType" value="Other Engineer" />
            <label>Other Engineer</label>
            <br />
            <input type="radio" name="hprofessionType" value="Doctor" />
            <label>Doctor</label>
            <br />
            <input type="radio" name="hprofessionType" value="CA/CS" />
            <label>CA/CS</label>

            <br />
            <input type="radio" name="hprofessionType" value="Teacher" />
            <label>Teacher</label>

            <br />
            <input type="radio" name="hprofessionType" value="Entertainment" />
            <label>Entertainment</label>

            <br />
            <input type="radio" name="hprofessionType" value="Scientist" />
            <label>Scientist</label>

            <br />
            <input type="radio" name="hprofessionType" value="Lawyer" />
            <label>Lawyer</label>

            <br />
            <input type="radio" name="hprofessionType" value="Athelete" />
            <label>Athelete</label>

            <br />
            <input type="radio" name="hprofessionType" value="Chef" />
            <label>Chef</label>

            <br />
            <input type="radio" name="hprofessionType" value="Aviation" />
            <label>Aviation</label>

            <Input fullWidth type="text" placeholder="other" />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Name of Your Organization (Husband)
            </h4>
            <Input
              placeholder="Gada Electronics"
              onChange={(e) => setsiHusbandOrganization(e.target.value)}
              required
              fullWidth
            />
          </div>

      
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiWifeProfessionType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Wife's Profession Type</h4>
            <input type="radio" name="wprofessionType" value="HouseWife" />
            <label>HouseWife</label>
            <br />
            <input type="radio" name="wprofessionType" value="Business" />
            <label>Business</label>
            <br />
            <input type="radio" name="wprofessionType" value="Banker" />
            <label>Banker</label>
            <br />
            <input type="radio" name="wprofessionType" value="IT Engineer" />
            <label>IT Engineer</label>
            <br />
            <input type="radio" name="wprofessionType" value="Other Engineer" />
            <label>Other Engineer</label>
            <br />
            <input type="radio" name="wprofessionType" value="Doctor" />
            <label>Doctor</label>
            <br />
            <input type="radio" name="wprofessionType" value="CA/CS" />
            <label>CA/CS</label>

            <br />
            <input type="radio" name="wprofessionType" value="Teacher" />
            <label>Teacher</label>

            <br />
            <input type="radio" name="wprofessionType" value="Entertainment" />
            <label>Entertainment</label>

            <br />
            <input type="radio" name="wprofessionType" value="Scientist" />
            <label>Scientist</label>

            <br />
            <input type="radio" name="wprofessionType" value="Lawyer" />
            <label>Lawyer</label>

            <br />
            <input type="radio" name="wprofessionType" value="Athelete" />
            <label>Athelete</label>

            <br />
            <input type="radio" name="wprofessionType" value="Chef" />
            <label>Chef</label>

            <br />
            <input type="radio" name="wprofessionType" value="Aviation" />
            <label>Aviation</label>
            <Input fullWidth type="text" placeholder="other" />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              {" "}
              Name of Your Organization (Wife){" "}
            </h4>
            <Input
              placeholder="Gada Electronics"
              onChange={(e) => setsiWifeOrganization(e.target.value)}
              required
              fullWidth
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg"> Husband LinkedIn Profile</h4>
            <Input
              placeholder="Optional"
              onChange={(e) => setsiHusbandLinkedInProfile(e.target.value)}
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg"> Wife LinkedIn Profile</h4>
            <Input
              placeholder="Optional"
              onChange={(e) => setsiWifeLinkedInProfile(e.target.value)}
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiTravelBy(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Mode of Transportation used to travel to work Generally
            </h4>
            <input type="radio" name="hbyroad" value="Private Vehicle" />
            <label>Private Vehicle</label>
            <br />
            <input type="radio" name="hbyroad" value="Public transport " />
            <label>Public transport </label>
            <br />
            <input type="radio" name="hbyroad" value="Cab Services" />
            <label>Cab Services </label>
          </div>
          <h2 className="text-lg font-bold text-sky-500    px-1 py-6">
            Likes,Interest,Get togethers
          </h2>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHusbandSocialStatus(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              How do you rate yourself in being social(Husband)
            </h4>
            <input type="radio" name="HusbandSocialStatus" value="Introvert" />
            <label>Introvert</label>
            <br />
            <input
              type="radio"
              name="HusbandSocialStatus"
              value="Semi Social(ambivert)"
            />
            <label>Semi Social(ambivert)</label>
            <br />
            <input type="radio" name="HusbandSocialStatus" value="Extrovert" />
            <label>Extrovert</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHusbandSocialCircle(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Husband's Social Circle</h4>
            <input
              type="radio"
              name="HusbandSocialCircle"
              value="Family Member"
            />
            <label>Family Member</label>
            <br />
            <input
              type="radio"
              name="HusbandSocialCircle"
              value="Society Friends"
            />
            <label>Society Friends</label>
            <br />
            <input
              type="radio"
              name="HusbandSocialCircle"
              value="College & School Friends"
            />
            <label>College & School Friends</label>
            <br />
            <input
              type="radio"
              name="HusbandSocialCircle"
              value="Professional Friends"
            />
            <label>Professional Friends</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHusbandInterest(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Husband's Interest</h4>
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
            <input
              type="checkbox"
              name="HusbandInterest"
              value="Spiritual Groups"
            />
            <label>Spiritual Groups</label>
            <br />
            <input type="checkbox" name="HusbandInterest" value="Clubs" />
            <label>Clubs</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiWifeSocialStatus(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              How do you rate yourself in being social(Wife)
            </h4>
            <input type="radio" name="WifeSocialStatus" value="Introvert" />
            <label>Introvert</label>
            <br />
            <input
              type="radio"
              name="WifeSocialStatus"
              value="Semi Social(ambivert)"
            />
            <label>Semi Social(ambivert)</label>
            <br />
            <input type="radio" name="WifeSocialStatus" value="Extrovert" />
            <label>Extrovert</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiWifeSocialCircle(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Wife's Social Circle</h4>
            <input type="radio" name="WifeSocialCircle" value="Family Member" />
            <label>Family Member</label>
            <br />
            <input
              type="radio"
              name="WifeSocialCircle"
              value="Society Friends"
            />
            <label>Society Friends</label>
            <br />
            <input
              type="radio"
              name="WifeSocialCircle"
              value="College & School Friends"
            />
            <label>College & School Friends</label>
            <br />
            <input
              type="radio"
              name="WifeSocialCircle"
              value="Professional Friends"
            />
            <label>Professional Friends</label>
          </div>

          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiWifeInterest(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Wife's Interest</h4>
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
            <input
              type="checkbox"
              name="WifeInterest"
              value="Spiritual Groups"
            />
            <label>Spiritual Groups</label>
            <br />
            <input type="checkbox" name="WifeInterest" value="Clubs" />
            <label>Clubs</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiLanguages(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Languages You Speak</h4>
            <input type="checkbox" name="Languages" value="English" />
            <label>English</label>
            <br />
            <input type="checkbox" name="Languages" value="Hindi" />
            <label>Hindi</label>
            <br />
            <input type="checkbox" name="Languages" value="Marathi" />
            <label>Marathi</label>
            <br />
            <input type="checkbox" name="Languages" value="Gujrati" />
            <label>Gujrati</label>
            <br />
            <input type="checkbox" name="Languages" value="Marwari" />
            <label>Marwari</label>
            <br />
            <input type="checkbox" name="Languages" value="Tamil" />
            <label>Tamil</label>
            <br />
            <input type="checkbox" name="Languages" value="Urdu" />
            <label>Urdu</label>
            <br />
            <input type="checkbox" name="Languages" value="Sindhi" />
            <label>Sindhi</label>
            <br />
            <input type="checkbox" name="Languages" value="Punjabi" />
            <label>Punjabi</label>
            <br />
            <input type="checkbox" name="Languages" value="Bhili" />
            <label>Bhili</label>
            <br />
            <input type="checkbox" name="Languages" value="Kinnauri" />
            <label>Kinnauri</label>
            <br />
            <input type="checkbox" name="Languages" value="Kannada" />
            <label>Kannada</label>
            <br />
            <input type="checkbox" name="Languages" value="Gondi" />
            <label>Gondi</label>
            <br />
            <input type="checkbox" name="Languages" value="Santali" />
            <label>Santali</label>
            <br />
            <input type="checkbox" name="Languages" value="Bangla" />
            <label>Bangla</label>
            <br />
            <input type="checkbox" name="Languages" value="lakher" />
            <label>lakher</label>
            <br />
            <input type="checkbox" name="Languages" value="Garo" />
            <label>Garo</label>
            <br />
            <input type="checkbox" name="Languages" value="Tripuri" />
            <label>Tripuri</label>
            <br />
            <input type="checkbox" name="Languages" value="Bhotia" />
            <label>Bhotia</label>
            <br />
            <input type="checkbox" name="Languages" value="Lepcha" />
            <label>Lepcha</label>
            <br />
            <input type="checkbox" name="Languages" value="Thadoa" />
            <label>Thadoa</label>
            <br />
            <input type="checkbox" name="Languages" value="Tangkul" />
            <label>Tangkul</label>
            <br />
            <input type="checkbox" name="Languages" value="Boro" />
            <label>Boro</label>
            <br />
            <input type="checkbox" name="Languages" value="Nepali" />
            <label>Nepali</label>
            <br />
            <input type="checkbox" name="Languages" value="Sema" />
            <label>Sema</label>
            <br />
            <input type="checkbox" name="Languages" value="Konyak" />
            <label>Konyak</label>
            <br />
            <input type="checkbox" name="Languages" value="French" />
            <label>French</label>
            <br />
            <input type="checkbox" name="Languages" value="Spanish" />
            <label>Spanish</label>
            <br />
            <input type="checkbox" name="Languages" value="Chinese" />
            <label>Chinese</label>
            <br />
            <input type="checkbox" name="Languages" value="Japanese" />
            <label>Japanese</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiCuisine(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Family Cuisine Preference</h4>
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
          <h2 className="text-lg font-bold text-sky-500 px-1 py-6">
            Neighbour
          </h2>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Neighbour's House</h4>
            <p className="italic font-light text-sm">(No. to be mention)</p>
            <Input
              placeholder=""
              onChange={(e) => setsiNeighbourHouse(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiNeighbourFamilyConfig(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Neighbour's Family Configuiration(to br mentioned)
            </h4>
            <input
              type="checkbox"
              name="NeigbourConfiguiration"
              value="Couple"
            />
            <label>Couple</label>
            <br />
            <input
              type="checkbox"
              name="NeigbourConfiguiration"
              value="Small Kid"
            />
            <label>Small Kid</label>
            <br />
            <input
              type="checkbox"
              name="NeigbourConfiguiration"
              value="Elder Persons"
            />
            <label>Elder Persons</label>
            <br />
            <input
              type="checkbox"
              name="NeigbourConfiguiration"
              value="Teenagers"
            />
            <label>Teenagers</label>
            <br />
            <input
              type="checkbox"
              name="NeigbourConfiguiration"
              value="Other Adults"
            />
            <label>Other Adults</label>
            <br />
            <input
              type="checkbox"
              name="NeigbourConfiguiration"
              value="Single Person"
            />
            <label>Single Person</label>
          </div>
        
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiNeighbourprofessionType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Husband's Profession Type</h4>
            <input type="radio" name="nprofessionType" value="Business" />
            <label>Business</label>
            <br />
            <input type="radio" name="nprofessionType" value="Banker" />
            <label>Banker</label>
            <br />
            <input type="radio" name="nprofessionType" value="IT Engineer" />
            <label>IT Engineer</label>
            <br />
            <input type="radio" name="nprofessionType" value="Other Engineer" />
            <label>Other Engineer</label>
            <br />
            <input type="radio" name="nprofessionType" value="Doctor" />
            <label>Doctor</label>
            <br />
            <input type="radio" name="nprofessionType" value="CA/CS" />
            <label>CA/CS</label>
            <br />
            <input type="radio" name="nprofessionType" value="Teacher" />
            <label>Teacher</label>
            <br />
            <input type="radio" name="nprofessionType" value="Entertainment" />
            <label>Entertainment</label>
            <br />
            <input type="radio" name="nprofessionType" value="Scientist" />
            <label>Scientist</label>
            <br />
            <input type="radio" name="nprofessionType" value="Lawyer" />
            <label>Lawyer</label>
            <br />
            <input type="radio" name="nprofessionType" value="Athelete" />
            <label>Athelete</label>
            <br />
            <input type="radio" name="nprofessionType" value="Chef" />
            <label>Chef</label>
            <br />
            <input type="radio" name="nprofessionType" value="Aviation" />
            <label>Aviation</label>
            <Input fullWidth type="text" placeholder="other" />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiNeighbourNature(e.target.value)}
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
          <h2 className="text-lg font-bold text-sky-500 px-1 py-6">
            Intent of Selling
          </h2>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiIntent(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Intent of Selling</h4>
            <input
              type="radio"
              name="intent"
              value="Changing/city/state/country"
            />
            <label>Changing/city/state/country</label>
            <br />
            <input type="radio" name="intent" value="Upgradation" />
            <label>Upgradation</label>
            <br />
            <input type="radio" name="intent" value="Other" />
            <label>Other</label>
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of Seller</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setsiSellerphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="individual"
              fullWidth
            />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Photo upload of Seller Family
            </h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setsiSellerFamilyphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="family"
              fullWidth
            />
          </div>
          <h2 className="text-lg font-bold text-sky-500 px-1 py-6">
           Seller Story
          </h2>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Seller Story</h4>
            <Input
              placeholder="tell us about the your home"
              onChange={(e) => setsiSellerStory(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Your Family Living in this House On Rent(for Story)
            </h4>
            <Input
              placeholder="tell us about the your home"
              onChange={(e) => setsiSellerRentedDuration(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Your Family staying here after Purchase (for Story)
            </h4>
            <Input
              placeholder="tell us about the your home"
              onChange={(e) => setsiSellerPurschaseDuration(e.target.value)}
              required
              fullWidth
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerInfo;
