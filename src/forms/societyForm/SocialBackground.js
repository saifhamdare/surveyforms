import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const SocialBackground = () => {
    const [sbCelebration, setsbCelebration] = useState("");
    const [sbSocietyMeetings, setsbSocietyMeetings] = useState("");
    const [sbOutsiderAllowed, setsbOutsiderAllowed] = useState("");
    const [sbFunctionsAllowed, setsbFunctionsAllowed] = useState("");


    const onSubmit = () => {};
  return (
    <div className="bg-slate-200">
    <ToastContainer autoClose={1500} />
    <div className="form-container className=' m-1 mt-5 ' ">
      <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
      SOCIAL BACKGROUND OF SOCIETY 
      </h2>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
        action=""
      >
        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setsbCelebration(e.target.value)}
          required
        >
          <h4 className="font-semibold text-lg">Eating habits Allowed</h4>
          <input type="checkbox" name="celebration" value="Ganpati Celebration in Society" />
          <label>Ganpati Celebration in Society</label> <br />
          <input type="checkbox" name="celebration" value="Diwali Celebration in Society" />
          <label>Diwali Celebration in Society</label>
          <br />
          <input type="checkbox" name="celebration" value="Kite Flying at Terrace" />
          <label>Kite Flying at Terrace</label> <br />
          <input type="checkbox" name="celebration" value="Holi Celebration" />
          <label>Holi Celebration</label> <br />
          <input type="checkbox" name="celebration" value="Rangpanchnami Event in Society" />
          <label>Rangpanchnami Event in Society</label>
          <br />
          <input type="checkbox" name="celebration" value="Eid Celebration in Society" />
          <label>Eid Celebration in Society</label>
           <br />
          <input type="checkbox" name="celebration" value="Republic and Independace day Celebration" />
          <label>Republic and Independace day Celebration</label>
           <br />
          <input type="checkbox" name="celebration" value="Chrismas Celebration" />
          <label>Chrismas Celebration</label>
           <br />
          <input type="checkbox" name="celebration" value="New Year Celebration" />
          <label>New Year Celebration</label>
           <br />
          <input type="checkbox" name="celebration" value="Other Celebration" />
          <label>Other Celebration</label>
        </div>
        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setsbSocietyMeetings(e.target.value)}
          required
        >
          <h4 className="font-semibold text-lg">Eating habits Allowed</h4>
          <input type="checkbox" name="SocietyMeetings" value="Annual Meeting" />
          <label>Annual Meeting</label> <br />
          <input type="checkbox" name="SocietyMeetings" value="Quaterly Meeting" />
          <label>Quaterly Meeting</label>
          <br />
          <input type="checkbox" name="SocietyMeetings" value="Monthly Meeting" />
          <label>Monthly Meeting</label> <br />
          <input type="checkbox" name="SocietyMeetings" value="Women's Meeting" />
          <label>Women's Meeting</label> <br />
          <input type="checkbox" name="SocietyMeetings" value="Kids Meeting" />
          <label>Kids Meeting</label>
        </div>

        
        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setsbOutsiderAllowed(Boolean(e.target.value))}
          required
        >
          <h4 className="font-semibold text-lg">OUTSIDERS ALLOWED (KIDS/YOUTH TO PLAY ALONG WITH SOCIETY MEMBERS)</h4>
          <input type="radio" name="OutsiderAllowed" value="Yes" />
          <label>Yes</label> <br />
          <input type="radio" name="OutsiderAllowed" value="" />
          <label>No</label>
        </div>
        
        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setsbFunctionsAllowed(Boolean(e.target.value))}
          required
        >
          <h4 className="font-semibold text-lg">FAMILY FUNTIONS ARE ALLOWED IN COMMON AREAS? (E.G. MARRIAGES)</h4>
          <input type="radio" name="FunctionsAllowed" value="Yes" />
          <label>Yes</label> <br />
          <input type="radio" name="FunctionsAllowed" value="" />
          <label>No</label>
        </div>
        
        <div
          className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setsbCleanliness(e.target.value)}
          required
        >
          <h4 className="font-semibold text-lg">HOW DO YOU RATE SOCIETY IN CLEANLINESS</h4>
          <input type="radio" name="Cleanliness" value="Good" />
          <label>Yes</label> <br />
          <input type="radio" name="Cleanliness" value="Okay" />
          <label>Okay</label><br />
          <input type="radio" name="Cleanliness" value="Bad" />
          <label>Bad</label>
        </div>
    
    </form>
    </div>
    </div>
  )
}

export default SocialBackground