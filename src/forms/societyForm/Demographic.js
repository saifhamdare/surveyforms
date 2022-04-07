import React, { useState } from "react";
import { ToastContainer } from "react-toastify";


const Demographic = () => {

    const [dEatingHabits, setdEatingHabits] = useState("");
    const [dMajorityAgeGroup, setdMajorityAgeGroup] = useState("");
    const [dMembersAllowed, setdMembersAllowed] = useState("");
    const [dMajorityMemberType, setdMajorityMemberType] = useState("");
    const [dMajorityOfOccupation, setdMajorityOfOccupation] = useState("");
    const [dNationalityAllowed, setdNationalityAllowed] = useState("");
    const [dCommercialActivities, setdCommercialActivities] = useState("");
    const [dCommercialActivitiesAllowed, setdCommercialActivitiesAllowed] = useState("");
    const [dBatchlorsOnRent, setdBatchlorsOnRent] = useState("");
    const [dNonMarriedCoupleOnRent, setdNonMarriedCoupleOnRent] = useState("");
    const [dChildrenPlayingAround, setdChildrenPlayingAround] = useState("");
    const [dElderPeopleActivity, setdElderPeopleActivity] = useState("");
    const [dElderPeopleFriendly, setdElderPeopleFriendly] = useState("");
  

    const onSubmit = () => {};
  return (
     
    <div className="bg-slate-200">
    <ToastContainer autoClose={1500} />
    <div className="form-container className=' m-1 mt-5 ' ">
      <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
        Demographic 
      </h2>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
        action=""
      >
        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setdEatingHabits(e.target.value)}
          required
        >
          <h4 className="font-semibold text-lg">Eating habits Allowed</h4>
          <input type="radio" name="EatingHabits" value="Veg" />
          <label>Veg</label> <br />
          <input type="radio" name="EatingHabits" value="Non-Veg" />
          <label>Non-Veg</label>
          <br />
          <input type="radio" name="EatingHabits" value="Eggetarian" />
          <label>Eggetarian</label> <br />
          <input type="radio" name="EatingHabits" value="Vegan" />
          <label>Vegan</label>
        </div>

        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setdMajorityAgeGroup(e.target.value)}
          required
        >
          <h4 className="font-semibold text-lg">Majority Age Group</h4>
          <input type="radio" name="MajorityAgeGroup" value="5 to 15" />
          <label>5 to 15</label> <br />
          <input type="radio" name="MajorityAgeGroup" value="15 to 30" />
          <label>15 to 30</label>
          <br />
          <input type="radio" name="MajorityAgeGroup" value="30 to 45" />
          <label>30 to 45</label> <br />
          <input type="radio" name="MajorityAgeGroup" value="45 to 60" />
          <label>45 to 60</label><br />
          <input type="radio" name="MajorityAgeGroup" value="60 and above" />
          <label>60 and above</label>
        </div>

        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setdMembersAllowed(e.target.value)}
          required
        >
          <h4 className="font-semibold text-lg">Members Allowed</h4>
          <input type="radio" name="MembersAllowed" value="Batchelors" />
          <label>Batchelors</label> <br />
          <input type="radio" name="MembersAllowed" value="Family" />
          <label>Family</label>
        </div>

        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setdMajorityMemberType(e.target.value)}
          required
        >
          <h4 className="font-semibold text-lg">Majority Member Type</h4>
          <input type="radio" name="MajorityMemberType" value="Rented" />
          <label>Rented</label> <br />
          <input type="radio" name="MajorityMemberType" value="Self Owned" />
          <label>Self Owned</label>
        </div>

        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setdMajorityOfOccupation(e.target.value)}
          required
        >
          <h4 className="font-semibold text-lg">Majority of Occupational Status</h4>
          <input type="radio" name="MajorityOfOccupation" value="Job Holders" />
          <label>Job Holders</label> <br />
          <input type="radio" name="MajorityOfOccupation" value="Businessmen" />
          <label>Businessmen</label>
        </div>

        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setdNationalityAllowed(e.target.value)}
          required
        >
          <h4 className="font-semibold text-lg">Nationality Allowed in Society</h4>
          <input type="radio" name="NationalityAllowed" value="Indian" />
          <label>Indian</label> <br />
          <input type="radio" name="NationalityAllowed" value="Foriegner" />
          <label>Foriegner</label><br />
          <input type="radio" name="NationalityAllowed" value="Both" />
          <label>Both</label>
        </div>

        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setdCommercialActivities(e.target.value)}
          required
        >
          <h4 className="font-semibold text-lg">Commercial Activities in Society</h4>
          <input type="radio" name="CommercialActivities" value="Allowed" />
          <label>Allowed</label> <br />
          <input type="radio" name="CommercialActivities" value="Not Allowed" />
          <label>Not Allowed</label>
        </div>

        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setdCommercialActivitiesAllowed(e.target.value)}
          required
        >
          <h4 className="font-semibold text-lg">Commercial Activities Allowed in Society</h4>
          <input type="radio" name="CommercialActivitiesAllowed" value="Tuition Classes" />
          <label>Tuition Classes</label> <br />
          <input type="radio" name="CommercialActivitiesAllowed" value="Private Office (with Heavy foot fall)" />
          <label>Private Office (with Heavy foot fall)</label><br />
          <input type="radio" name="CommercialActivitiesAllowed" value="Private Office (with very less foot fall)" />
          <label>Private Office (with very less foot fall)</label><br />
          <input type="radio" name="CommercialActivitiesAllowed" value="Bank" />
          <label>Bank</label> <br />
          <input type="radio" name="CommercialActivitiesAllowed" value="Gym" />
          <label>Gym</label><br />
          <input type="radio" name="CommercialActivitiesAllowed" value="Healthcare" />
          <label>Healthcare</label><br />
          <input type="radio" name="CommercialActivitiesAllowed" value="Restaurant" />
          <label>Restaurant</label><br />
        </div>

        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setdBatchlorsOnRent(Boolean(e.target.value))}
          required
        >
          <h4 className="font-semibold text-lg">Batchlors are Allowed to stay on Rent in Society?</h4>
          <input type="radio" name="BatchlorsOnRent" value="Yes" />
          <label>Yes</label> <br />
          <input type="radio" name="BatchlorsOnRent" value="" />
          <label>No</label>
        </div>

        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setdNonMarriedCoupleOnRent(Boolean(e.target.value))}
          required
        >
          <h4 className="font-semibold text-lg">Non Married Couple are Allowed to stay on Rent in Society?</h4>
          <input type="radio" name="NonMarriedCoupleOnRent" value="Yes" />
          <label>Yes</label> <br />
          <input type="radio" name="NonMarriedCoupleOnRent" value="" />
          <label>No</label>
        </div>

        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setdChildrenPlayingAround(Boolean(e.target.value))}
          required
        >
          <h4 className="font-semibold text-lg">Are there many Children Playing Around ?</h4>
          <input type="radio" name="ChildrenPlayingAround" value="Yes" />
          <label>Yes</label> <br />
          <input type="radio" name="ChildrenPlayingAround" value="" />
          <label>No</label>
        </div>

        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setdElderPeopleActivity(Boolean(e.target.value))}
          required
        >
          <h4 className="font-semibold text-lg">Are there many elderly people in society and activities available for them ? </h4>
          <input type="radio" name="ElderPeopleActivity" value="Yes" />
          <label>Yes</label> <br />
          <input type="radio" name="ElderPeopleActivity" value="" />
          <label>No</label>
        </div>

        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setdElderPeopleFriendly(Boolean(e.target.value))}
          required
        >
          <h4 className="font-semibold text-lg">Is the society elderly friendly, areas for them to walk and meet?   </h4>
          <input type="radio" name="ElderPeopleFriendly" value="Yes" />
          <label>Yes</label> <br />
          <input type="radio" name="ElderPeopleFriendly" value="" />
          <label>No</label>
        </div>





    </form>
    </div>
    </div>
  )
}

export default Demographic