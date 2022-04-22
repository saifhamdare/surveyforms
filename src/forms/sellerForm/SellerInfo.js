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
            <input className="ml-2" type="checkbox" name="members" value="Yourself" />
            <label className="ml-2" >Yourself</label> <br />
            <input className="ml-2" type="checkbox" name="members" value="Your Spouse" />
            <label className="ml-2" >Your Spouse</label>
            <br />
            <input className="ml-2" type="checkbox" name="members" value="Children" />
            <label className="ml-2" >Children</label>
            <br />
            <input className="ml-2" type="checkbox" name="members" value="Parent" />
            <label className="ml-2" >Parent</label>
            <br />
            <input className="ml-2" type="checkbox" name="members" value="Siblings" />
            <label className="ml-2" >Siblings</label>
            <br />
            <input className="ml-2" type="checkbox" name="members" value="Alone" />
            <label className="ml-2" >Alone</label>
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
            className="ml-2"
              type="checkbox"
              name="special"
              value="Elderly Parents/Grand Parents"
            />
            <label className="ml-2" >Elderly Parents/Grand Parents</label> <br />
            <input className="ml-2" type="checkbox" name="special" value="Small Children" />
            <label className="ml-2" >Small Children</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="special"
              value="Differently Enabled Person"
            />
            <label className="ml-2" >Differently Enabled Person</label>
            <br />
            <input className="ml-2" type="checkbox" name="special" value="N/A" />
            <label className="ml-2" >N/A</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiPetFriendlyHome(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">Pet Friendly (Home)</h4>
            <input className="ml-2" type="radio" name="PetAtHome" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input className="ml-2" type="radio" name="PetAtHome" value="" />
            <label className="ml-2" >No</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiPetFriendlySociety(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Is Society/Neighbors Pet Friendly
            </h4>
            <input className="ml-2" type="radio" name="PetAtSociety" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input className="ml-2" type="radio" name="PetAtSociety" value="" />
            <label className="ml-2" >No</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHandymen(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Is it easy to get Maid,Helper and Handymen(carpenter,plumber etc)?
            </h4>
            <input className="ml-2" type="radio" name="Handymen" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input className="ml-2" type="radio" name="Handymen" value="" />
            <label className="ml-2" >No</label>
          </div>
          <h2 className="text-lg font-bold text-sky-500    px-1 py-6">
            Education
          </h2>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHusbandQualification(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Husband Highest Qualification
            </h4>
            <input className="ml-2" type="radio" name="hedu" value="less than 10th Class" />
            <label className="ml-2" >less than 10th Class</label>
            <br />
            <input className="ml-2" type="radio" name="hedu" value="10th Pass" />
            <label className="ml-2" >10th Pass</label>
            <br />
            <input className="ml-2" type="radio" name="hedu" value="12th Pass" />
            <label className="ml-2" >12th Pass</label>
            <br />
            <input className="ml-2" type="radio" name="hedu" value="Graduate" />
            <label className="ml-2" >Graduate</label>
            <br />
            <input className="ml-2" type="radio" name="hedu" value="Post Graduate" />
            <label className="ml-2" >Post Graduate</label>
            <br />
            <input
             className="ml-2"
              type="radio"
              name="hedu"
              value="Other Higher Qualification"
            />
            <label className="ml-2" >Other Higher Qualification</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHusbandStream(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Husband's Stream</h4>
            <input className="ml-2" type="radio" name="hstream" value="Arts" />
            <label className="ml-2" >Arts</label>
            <br />
            <input className="ml-2" type="radio" name="hstream" value="Science" />
            <label className="ml-2" >Science</label>
            <br />
            <input className="ml-2" type="radio" name="hstream" value="Commerce" />
            <label className="ml-2" >Commerce</label>
            <br />
            <input className="ml-2" type="radio" name="hstream" value="Engineering" />
            <label className="ml-2" >Engineering</label>
            <br />
            <input className="ml-2" type="radio" name="hstream" value="Design" />
            <label className="ml-2" >Design</label>
            <br />
            <input className="ml-2" type="radio" name="hstream" value="Law" />
            <label className="ml-2" >Law</label>
            <br />
            <input className="ml-2" type="radio" name="hstream" value="Doctor" />
            <label className="ml-2" >Doctor</label>
            <br />
            <input className="ml-2" type="radio" name="hstream" value="Management" />
            <label className="ml-2" >Management</label>
            <br />
            <input className="ml-2" type="radio" name="hstream" value="Other" />
            <label className="ml-2" >Other</label>
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Husband's College Name</h4>
            <Input
              placeholder="eg. National college"
              onChange={(e) => setsiHusbandCollegeName(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiWifeQualification(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Wife's Highest Qualification
            </h4>
            <input className="ml-2" type="radio" name="wedu" value="less than 10th Class" />
            <label className="ml-2" >less than 10th Class</label>
            <br />
            <input className="ml-2" type="radio" name="wedu" value="10th Pass" />
            <label className="ml-2" >10th Pass</label>
            <br />
            <input className="ml-2" type="radio" name="wedu" value="12th Pass" />
            <label className="ml-2" >12th Pass</label>
            <br />
            <input className="ml-2" type="radio" name="wedu" value="Graduate" />
            <label className="ml-2" >Graduate</label>
            <br />
            <input className="ml-2" type="radio" name="wedu" value="Post Graduate" />
            <label className="ml-2" >Post Graduate</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="wedu"
              value="Other Higher Qualification"
            />
            <label className="ml-2" >Other Higher Qualification</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiWifeStream(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Wife's Stream</h4>
            <input className="ml-2" type="radio" name="wstream" value="Arts" />
            <label className="ml-2" >Arts</label>
            <br />
            <input className="ml-2" type="radio" name="wstream" value="Science" />
            <label className="ml-2" >Science</label>
            <br />
            <input className="ml-2" type="radio" name="wstream" value="Commerce" />
            <label className="ml-2" >Commerce</label>
            <br />
            <input className="ml-2" type="radio" name="wstream" value="Engineering" />
            <label className="ml-2" >Engineering</label>
            <br />
            <input className="ml-2" type="radio" name="wstream" value="Design" />
            <label className="ml-2" >Design</label>
            <br />
            <input className="ml-2" type="radio" name="wstream" value="Law" />
            <label className="ml-2" >Law</label>
            <br />
            <input className="ml-2" type="radio" name="wstream" value="Doctor" />
            <label className="ml-2" >Doctor</label>
            <br />
            <input className="ml-2" type="radio" name="wstream" value="Management" />
            <label className="ml-2" >Management</label>
            <br />
            <input className="ml-2" type="radio" name="wstream" value="Other" />
            <label className="ml-2" >Other</label>
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Wife's College Name</h4>
            <Input
              placeholder="eg. National college"
              onChange={(e) => setsiWifeCollegeName(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
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
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiTopUniversity(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Children or any other member belongsto following
              College/University
            </h4>
            <input className="ml-2" type="radio" name="topUniversity" value="IIM" />
            <label className="ml-2" >IIM</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="IIT" />
            <label className="ml-2" >IIT</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="NLIU" />
            <label className="ml-2" >NLIU</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="AIIMS" />
            <label className="ml-2" >AIIMS</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="IISc" />
            <label className="ml-2" >IISc</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="SEPT" />
            <label className="ml-2" >SEPT</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="BITS Pilani" />
            <label className="ml-2" >BITS Pilani</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="JNU" />
            <label className="ml-2" >JNU</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="SPA Mumbai" />
            <label className="ml-2" >SPA Mumbai</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="VJTI Mumbai" />
            <label className="ml-2" >VJTI Mumbai</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="NIT" />
            <label className="ml-2" >NIT</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="NIFT" />
            <label className="ml-2" >NIFT</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="BHU" />
            <label className="ml-2" >BHU</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="AMU" />
            <label className="ml-2" >AMU</label>
            <br />
            <input className="ml-2" type="radio" name="topUniversity" value="St Stephan's" />
            <label className="ml-2" >St Stephan's</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="topUniversity"
              value="Jamia milia Islamia"
            />
            <label className="ml-2" >Jamia milia Islamia</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiTopInsititute(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Children or any other member belongsto following
              Institute/services
            </h4>
            <input className="ml-2" type="radio" name="TopInsititute" value="ISRO" />
            <label className="ml-2" >ISRO</label>
            <br />
            <input className="ml-2" type="radio" name="TopInsititute" value="DRDO" />
            <label className="ml-2" >DRDO</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="TopInsititute"
              value="UPSC(IAS,IPS,IRS)"
            />
            <label className="ml-2" >UPSC(IAS,IPS,IRS)</label>
            <br />
            <input className="ml-2" type="radio" name="TopInsititute" value="IAF" />
            <label className="ml-2" >IAF</label>
            <br />
            <input className="ml-2" type="radio" name="TopInsititute" value="INS" />
            <label className="ml-2" >INS</label>
            <br />
            <input className="ml-2" type="radio" name="TopInsititute" value="Army" />
            <label className="ml-2" >Army</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="TopInsititute"
              value="Bhabha Atomic center"
            />
            <label className="ml-2" >Bhabha Atomic center</label>
          </div>
          <h2 className="text-lg font-bold text-sky-500 px-1 py-6">
            Profession
          </h2>

 

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHusbandProfessionType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Husband's Profession Type</h4>
            <input className="ml-2" type="radio" name="hprofessionType" value="Business" />
            <label className="ml-2" >Business</label>
            <br />
            <input className="ml-2" type="radio" name="hprofessionType" value="Banker" />
            <label className="ml-2" >Banker</label>
            <br />
            <input className="ml-2" type="radio" name="hprofessionType" value="IT Engineer" />
            <label className="ml-2" >IT Engineer</label>
            <br />
            <input className="ml-2" type="radio" name="hprofessionType" value="Other Engineer" />
            <label className="ml-2" >Other Engineer</label>
            <br />
            <input className="ml-2" type="radio" name="hprofessionType" value="Doctor" />
            <label className="ml-2" >Doctor</label>
            <br />
            <input className="ml-2" type="radio" name="hprofessionType" value="CA/CS" />
            <label className="ml-2" >CA/CS</label>

            <br />
            <input className="ml-2" type="radio" name="hprofessionType" value="Teacher" />
            <label className="ml-2" >Teacher</label>

            <br />
            <input className="ml-2" type="radio" name="hprofessionType" value="Entertainment" />
            <label className="ml-2" >Entertainment</label>

            <br />
            <input className="ml-2" type="radio" name="hprofessionType" value="Scientist" />
            <label className="ml-2" >Scientist</label>

            <br />
            <input className="ml-2" type="radio" name="hprofessionType" value="Lawyer" />
            <label className="ml-2" >Lawyer</label>

            <br />
            <input className="ml-2" type="radio" name="hprofessionType" value="Athelete" />
            <label className="ml-2" >Athelete</label>

            <br />
            <input className="ml-2" type="radio" name="hprofessionType" value="Chef" />
            <label className="ml-2" >Chef</label>

            <br />
            <input className="ml-2" type="radio" name="hprofessionType" value="Aviation" />
            <label className="ml-2" >Aviation</label>

            <Input fullWidth type="text" placeholder="other" />
          </div>

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
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
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiWifeProfessionType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Wife's Profession Type</h4>
            <input className="ml-2" type="radio" name="wprofessionType" value="HouseWife" />
            <label className="ml-2" >HouseWife</label>
            <br />
            <input className="ml-2" type="radio" name="wprofessionType" value="Business" />
            <label className="ml-2" >Business</label>
            <br />
            <input className="ml-2" type="radio" name="wprofessionType" value="Banker" />
            <label className="ml-2" >Banker</label>
            <br />
            <input className="ml-2" type="radio" name="wprofessionType" value="IT Engineer" />
            <label className="ml-2" >IT Engineer</label>
            <br />
            <input className="ml-2" type="radio" name="wprofessionType" value="Other Engineer" />
            <label className="ml-2" >Other Engineer</label>
            <br />
            <input className="ml-2" type="radio" name="wprofessionType" value="Doctor" />
            <label className="ml-2" >Doctor</label>
            <br />
            <input className="ml-2" type="radio" name="wprofessionType" value="CA/CS" />
            <label className="ml-2" >CA/CS</label>

            <br />
            <input className="ml-2" type="radio" name="wprofessionType" value="Teacher" />
            <label className="ml-2" >Teacher</label>

            <br />
            <input className="ml-2" type="radio" name="wprofessionType" value="Entertainment" />
            <label className="ml-2" >Entertainment</label>

            <br />
            <input className="ml-2" type="radio" name="wprofessionType" value="Scientist" />
            <label className="ml-2" >Scientist</label>

            <br />
            <input className="ml-2" type="radio" name="wprofessionType" value="Lawyer" />
            <label className="ml-2" >Lawyer</label>

            <br />
            <input className="ml-2" type="radio" name="wprofessionType" value="Athelete" />
            <label className="ml-2" >Athelete</label>

            <br />
            <input className="ml-2" type="radio" name="wprofessionType" value="Chef" />
            <label className="ml-2" >Chef</label>

            <br />
            <input className="ml-2" type="radio" name="wprofessionType" value="Aviation" />
            <label className="ml-2" >Aviation</label>
            <Input fullWidth type="text" placeholder="other" />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
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

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg"> Husband LinkedIn Profile</h4>
            <Input
              placeholder="Optional"
              onChange={(e) => setsiHusbandLinkedInProfile(e.target.value)}
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg"> Wife LinkedIn Profile</h4>
            <Input
              placeholder="Optional"
              onChange={(e) => setsiWifeLinkedInProfile(e.target.value)}
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiTravelBy(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Mode of Transportation used to travel to work Generally
            </h4>
            <input className="ml-2" type="radio" name="hbyroad" value="Private Vehicle" />
            <label className="ml-2" >Private Vehicle</label>
            <br />
            <input className="ml-2" type="radio" name="hbyroad" value="Public transport " />
            <label className="ml-2" >Public transport </label>
            <br />
            <input className="ml-2" type="radio" name="hbyroad" value="Cab Services" />
            <label className="ml-2" >Cab Services </label>
          </div>
          <h2 className="text-lg font-bold text-sky-500    px-1 py-6">
            Likes,Interest,Get togethers
          </h2>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHusbandSocialStatus(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              How do you rate yourself in being social(Husband)
            </h4>
            <input className="ml-2" type="radio" name="HusbandSocialStatus" value="Introvert" />
            <label className="ml-2" >Introvert</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="HusbandSocialStatus"
              value="Semi Social(ambivert)"
            />
            <label className="ml-2" >Semi Social(ambivert)</label>
            <br />
            <input className="ml-2" type="radio" name="HusbandSocialStatus" value="Extrovert" />
            <label className="ml-2" >Extrovert</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHusbandSocialCircle(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Husband's Social Circle</h4>
            <input
            className="ml-2"
              type="radio"
              name="HusbandSocialCircle"
              value="Family Member"
            />
            <label className="ml-2" >Family Member</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="HusbandSocialCircle"
              value="Society Friends"
            />
            <label className="ml-2" >Society Friends</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="HusbandSocialCircle"
              value="College & School Friends"
            />
            <label className="ml-2" >College & School Friends</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="HusbandSocialCircle"
              value="Professional Friends"
            />
            <label className="ml-2" >Professional Friends</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiHusbandInterest(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Husband's Interest</h4>
            <input className="ml-2" type="checkbox" name="HusbandInterest" value="Travel" />
            <label className="ml-2" >Travel</label>
            <br />
            <input className="ml-2" type="checkbox" name="HusbandInterest" value="Music" />
            <label className="ml-2" >Music</label>
            <br />
            <input className="ml-2" type="checkbox" name="HusbandInterest" value="Books" />
            <label className="ml-2" >Books</label>
            <br />
            <input className="ml-2" type="checkbox" name="HusbandInterest" value="Charity" />
            <label className="ml-2" >Charity</label>
            <br />
            <input className="ml-2" type="checkbox" name="HusbandInterest" value="Sports" />
            <label className="ml-2" >Sports</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="HusbandInterest"
              value="Spiritual Groups"
            />
            <label className="ml-2" >Spiritual Groups</label>
            <br />
            <input className="ml-2" type="checkbox" name="HusbandInterest" value="Clubs" />
            <label className="ml-2" >Clubs</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiWifeSocialStatus(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              How do you rate yourself in being social(Wife)
            </h4>
            <input className="ml-2" type="radio" name="WifeSocialStatus" value="Introvert" />
            <label className="ml-2" >Introvert</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="WifeSocialStatus"
              value="Semi Social(ambivert)"
            />
            <label className="ml-2" >Semi Social(ambivert)</label>
            <br />
            <input className="ml-2" type="radio" name="WifeSocialStatus" value="Extrovert" />
            <label className="ml-2" >Extrovert</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiWifeSocialCircle(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Wife's Social Circle</h4>
            <input className="ml-2" type="radio" name="WifeSocialCircle" value="Family Member" />
            <label className="ml-2" >Family Member</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="WifeSocialCircle"
              value="Society Friends"
            />
            <label className="ml-2" >Society Friends</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="WifeSocialCircle"
              value="College & School Friends"
            />
            <label className="ml-2" >College & School Friends</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="WifeSocialCircle"
              value="Professional Friends"
            />
            <label className="ml-2" >Professional Friends</label>
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiWifeInterest(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Wife's Interest</h4>
            <input className="ml-2" type="checkbox" name="WifeInterest" value="Travel" />
            <label className="ml-2" >Travel</label>
            <br />
            <input className="ml-2" type="checkbox" name="WifeInterest" value="Music" />
            <label className="ml-2" >Music</label>
            <br />
            <input className="ml-2" type="checkbox" name="WifeInterest" value="Books" />
            <label className="ml-2" >Books</label>
            <br />
            <input className="ml-2" type="checkbox" name="WifeInterest" value="Charity" />
            <label className="ml-2" >Charity</label>
            <br />
            <input className="ml-2" type="checkbox" name="WifeInterest" value="Sports" />
            <label className="ml-2" >Sports</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="WifeInterest"
              value="Spiritual Groups"
            />
            <label className="ml-2" >Spiritual Groups</label>
            <br />
            <input className="ml-2" type="checkbox" name="WifeInterest" value="Clubs" />
            <label className="ml-2" >Clubs</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiLanguages(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Languages You Speak</h4>
            <input className="ml-2" type="checkbox" name="Languages" value="English" />
            <label className="ml-2" >English</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Hindi" />
            <label className="ml-2" >Hindi</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Marathi" />
            <label className="ml-2" >Marathi</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Gujrati" />
            <label className="ml-2" >Gujrati</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Marwari" />
            <label className="ml-2" >Marwari</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Tamil" />
            <label className="ml-2" >Tamil</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Urdu" />
            <label className="ml-2" >Urdu</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Sindhi" />
            <label className="ml-2" >Sindhi</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Punjabi" />
            <label className="ml-2" >Punjabi</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Bhili" />
            <label className="ml-2" >Bhili</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Kinnauri" />
            <label className="ml-2" >Kinnauri</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Kannada" />
            <label className="ml-2" >Kannada</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Gondi" />
            <label className="ml-2" >Gondi</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Santali" />
            <label className="ml-2" >Santali</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Bangla" />
            <label className="ml-2" >Bangla</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="lakher" />
            <label className="ml-2" >lakher</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Garo" />
            <label className="ml-2" >Garo</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Tripuri" />
            <label className="ml-2" >Tripuri</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Bhotia" />
            <label className="ml-2" >Bhotia</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Lepcha" />
            <label className="ml-2" >Lepcha</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Thadoa" />
            <label className="ml-2" >Thadoa</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Tangkul" />
            <label className="ml-2" >Tangkul</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Boro" />
            <label className="ml-2" >Boro</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Nepali" />
            <label className="ml-2" >Nepali</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Sema" />
            <label className="ml-2" >Sema</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Konyak" />
            <label className="ml-2" >Konyak</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="French" />
            <label className="ml-2" >French</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Spanish" />
            <label className="ml-2" >Spanish</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Chinese" />
            <label className="ml-2" >Chinese</label>
            <br />
            <input className="ml-2" type="checkbox" name="Languages" value="Japanese" />
            <label className="ml-2" >Japanese</label>
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiCuisine(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Family Cuisine Preference</h4>
            <input className="ml-2" type="radio" name="cuisine" value="Veg" />
            <label className="ml-2" >Veg</label>
            <br />
            <input className="ml-2" type="radio" name="cuisine" value="Non Veg" />
            <label className="ml-2" >Non Veg</label>
            <br />
            <input className="ml-2" type="radio" name="cuisine" value="Eggetarian" />
            <label className="ml-2" >Eggetarian</label>
            <br />
            <input className="ml-2" type="radio" name="cuisine" value="Jain" />
            <label className="ml-2" >Jain</label>
            <br />
            <input className="ml-2" type="radio" name="cuisine" value="Vegan" />
            <label className="ml-2" >Vegan</label>
          </div>
          <h2 className="text-lg font-bold text-sky-500 px-1 py-6">
            Neighbour
          </h2>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
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
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiNeighbourFamilyConfig(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Neighbour's Family Configuiration(to br mentioned)
            </h4>
            <input
            className="ml-2"
              type="checkbox"
              name="NeigbourConfiguiration"
              value="Couple"
            />
            <label className="ml-2" >Couple</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="NeigbourConfiguiration"
              value="Small Kid"
            />
            <label className="ml-2" >Small Kid</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="NeigbourConfiguiration"
              value="Elder Persons"
            />
            <label className="ml-2" >Elder Persons</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="NeigbourConfiguiration"
              value="Teenagers"
            />
            <label className="ml-2" >Teenagers</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="NeigbourConfiguiration"
              value="Other Adults"
            />
            <label className="ml-2" >Other Adults</label>
            <br />
            <input
            className="ml-2"
              type="checkbox"
              name="NeigbourConfiguiration"
              value="Single Person"
            />
            <label className="ml-2" >Single Person</label>
          </div>
        
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiNeighbourprofessionType(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Husband's Profession Type</h4>
            <input className="ml-2" type="radio" name="nprofessionType" value="Business" />
            <label className="ml-2" >Business</label>
            <br />
            <input className="ml-2" type="radio" name="nprofessionType" value="Banker" />
            <label className="ml-2" >Banker</label>
            <br />
            <input className="ml-2" type="radio" name="nprofessionType" value="IT Engineer" />
            <label className="ml-2" >IT Engineer</label>
            <br />
            <input className="ml-2" type="radio" name="nprofessionType" value="Other Engineer" />
            <label className="ml-2" >Other Engineer</label>
            <br />
            <input className="ml-2" type="radio" name="nprofessionType" value="Doctor" />
            <label className="ml-2" >Doctor</label>
            <br />
            <input className="ml-2" type="radio" name="nprofessionType" value="CA/CS" />
            <label className="ml-2" >CA/CS</label>
            <br />
            <input className="ml-2" type="radio" name="nprofessionType" value="Teacher" />
            <label className="ml-2" >Teacher</label>
            <br />
            <input className="ml-2" type="radio" name="nprofessionType" value="Entertainment" />
            <label className="ml-2" >Entertainment</label>
            <br />
            <input className="ml-2" type="radio" name="nprofessionType" value="Scientist" />
            <label className="ml-2" >Scientist</label>
            <br />
            <input className="ml-2" type="radio" name="nprofessionType" value="Lawyer" />
            <label className="ml-2" >Lawyer</label>
            <br />
            <input className="ml-2" type="radio" name="nprofessionType" value="Athelete" />
            <label className="ml-2" >Athelete</label>
            <br />
            <input className="ml-2" type="radio" name="nprofessionType" value="Chef" />
            <label className="ml-2" >Chef</label>
            <br />
            <input className="ml-2" type="radio" name="nprofessionType" value="Aviation" />
            <label className="ml-2" >Aviation</label>
            <Input fullWidth type="text" placeholder="other" />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiNeighbourNature(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Neighbour Profession</h4>
            <input className="ml-2" type="radio" name="nNature" value="Talkative" />
            <label className="ml-2" >Talkative</label>
            <br />
            <input className="ml-2" type="radio" name="nNature" value="Helpful" />
            <label className="ml-2" >Helpful</label>
            <br />
            <input className="ml-2" type="radio" name="nNature" value="Silent" />
            <label className="ml-2" >Silent</label>
            <br />
            <input className="ml-2" type="radio" name="nNature" value="Painful" />
            <label className="ml-2" >Painful</label>
          </div>
          <h2 className="text-lg font-bold text-sky-500 px-1 py-6">
            Intent of Selling
          </h2>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            onChange={(e) => setsiIntent(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Intent of Selling</h4>
            <input
            className="ml-2"
              type="radio"
              name="intent"
              value="Changing/city/state/country"
            />
            <label className="ml-2" >Changing/city/state/country</label>
            <br />
            <input className="ml-2" type="radio" name="intent" value="Upgradation" />
            <label className="ml-2" >Upgradation</label>
            <br />
            <input className="ml-2" type="radio" name="intent" value="Other" />
            <label className="ml-2" >Other</label>
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
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

          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Seller Story</h4>
            <Input
              placeholder="tell us about the your home"
              onChange={(e) => setsiSellerStory(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
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
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
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
