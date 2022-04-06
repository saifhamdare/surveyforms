import { Input } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Neighbourhood = () => {

  const navigate= useNavigate()


  const [nhfullName, setnhFullName] = useState("");
  const [nhmobileNo, setnhMobileNo] = useState("");
  const [nhgender, setnhGender] = useState("");
  const [nhprofession, setnhprofession] = useState("");
  const [nhredevelopment, setnhRedevelopment] = useState("");
  const [nhreputation, setnhReputation] = useState("");
  const [nhsocietyManagement, setnhSocietyManagement] = useState("");
  const [nhpeopleInSociety, setnhPeopleInSociety] = useState("");
  const [nhcomplaint, setnhComplaint] = useState("");
  const [nhsocialEvents, setnhSocialEvents] = useState("");
  const [nhdeliveringEssential, setnhDeliveringEssential] = useState("");
  const [nhdeliveryServices, setnhDeliveryServices] = useState("");
  const [nhpoliceComplaints, setnhPoliceComplaints] = useState("");
  const [nhsellingProperty, setnhSellingProperty] = useState("");
  const [nhtraffic, setnhTraffic] = useState("");
  const [nhwaterSupply, setnhWaterSupply] = useState("");
  const [nhelectricityBreakDown, setnhElectricityBreakDown] = useState("");
  const [nholder, setnhOlder] = useState("");
  const [nhchildren, setnhChildren] = useState("");
  const [nhoneBHK, setnhOneBHK] = useState("");
  const [nhtwoBHK, setnhTwoBHK] = useState("");
  const [nhthreBHK, setnhThreeBHK] = useState("");
  const [nhstrayDogs, setnhStrayDogs] = useState("");
  const [nhkindOfProfessions, setnhKindOfProfessions] = useState("");
  const [nheasyToGet, setnhEasyToGet] = useState("");


  const successNotify = () => toast.success("form filled Successfully",{
    position:'bottom-center'
  });
  const failedNotify = () => toast.error("something went wrong",{
    position:'bottom-center'
  });
 
  const onSubmit = (e) => {
    e.preventDefault();
    const body={
       "full_name": nhfullName,
       "mobile_number": nhmobileNo,
       "gender": nhgender, 
       "profession": nhprofession,
       "redevelopment_planned": nhredevelopment, 
       "reputation": nhreputation,
       "complaint": nhcomplaint,
       "people_type": nhpeopleInSociety,
       "society_management_friendly": nhsocietyManagement,
       "provide_delivery": nhdeliveryServices, 
       "essential_shops": nhdeliveringEssential, 
       "social_events": nhsocialEvents, 
       "playful_children": nhchildren,
       "old_people": nholder,
       "uninterrupted_electricity": nhelectricityBreakDown, 
       "uninterrupted_water": nhwaterSupply, 
       "traffic": nhtraffic,
       "people_selling_property": nhsellingProperty, 
       "police_complaints": nhpoliceComplaints, 
       "access_to_helpers": nheasyToGet, 
       "people_profession": nhkindOfProfessions,
       "stray_animals": nhstrayDogs,
       "approx_1_bhk_price": nhoneBHK,
       "approx_2_bhk_price": nhtwoBHK,
       "approx_3_bhk_price": nhthreBHK
     }

     const data=  { 
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
       }
    axios
    .post(`https://operations.roushik.com/api/tasks/${localStorage.getItem('property_id')}/neighbourhood/`,
       body,
     {headers: data })
     .then((res)=>{
      successNotify()
      navigate('/form-list')
     })
     .catch((err)=> failedNotify())
    
  };

  return (
    <div  className="bg-slate-200">
      <ToastContainer autoClose={1500}/>
      <div className="form-container className=' m-1 mt-5 ' ">
        <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
          Neighbourhood Information and Opinion
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}

          action=""
        >
  
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Full Name </h4>
            <Input
              placeholder="John Doe"
              onChange={(e) => setnhFullName(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Mobile Number </h4>
            <Input
              placeholder="9876543211"
              onChange={(e) => setnhMobileNo(e.target.value)}
              required
              fullWidth
              type="number"
            />
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setnhGender(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Gender </h4>
            <input type="radio" name="gender" id="male" value="M" />
            <label >Male</label>
            <input type="radio" name="gender" id="female" value="F" />
            <label >Female</label>
            <input type="radio" name="gender" id="female" value="O" />
            <label >Other</label>
          </div>
          <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setnhprofession(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">Profession</h4>
            <input
              type="radio"
              name="profession"
              id="General Stores/Kirana"
              value="General Stores/Kirana"
            />
            <label >General Stores/Kirana</label>
            <br />
            <input
              type="radio"
              name="profession"
              id="Convenience Store/Mini Mart"
              value="Convenience Store/Mini Mart"
            />
            <label >
              Convenience Store/Mini Mart
            </label>
            <br />
            <input type="radio" name="profession" id="Grocer" value="Grocer" />
            <label >Grocer</label>
            <br />
            <input
              type="radio"
              name="profession"
              id="Beauty Salon"
              value="Beauty Salon"
            />
            <label>Beauty Salon</label>
            <br />
            <input
              type="radio"
              name="profession"
              id="General Hair Salon"
              value="General Hair Salon"
            />
            <label >General Hair Salon</label>
            <br />
            <input
              type="radio"
              name="profession"
              id="Restaurant"
              value="Restaurant"
            />
            <label >Restaurant</label>
            <br />
            <input
              type="radio"
              name="profession"
              id="Laundry"
              value="Laundry"
            />
            <label >Laundry</label>
            <br />
            <input type="radio" name="profession" id="Bakery" value="Bakery" />
            <label >Bakery</label>
            <br />
            <input
              type="radio"
              name="profession"
              id="Newspaper/Magazine"
              value="Newspaper/Magazine"
            />
            <label >Newspaper/Magazine</label>
            <br />
            <input
              type="radio"
              name="profession"
              id="Hardware/Electrical"
              value="Hardware/Electrical"
            />
            <label >Hardware/Electrical</label>
            <br />
            <input
              type="radio"
              name="profession"
              id="Medical Stores"
              value="Medical Stores"
            />
            <label >Medical Stores</label>
            <br />
            <input
              type="radio"
              name="profession"
              id="Snacks & Beverages"
              value="Snacks & Beverages"
            />
            <label >Snacks & Beverages</label>
            <br />
            <input
              type="radio"
              name="profession"
              id="Stationery"
              value="Stationery"
            />
            <label >Stationery</label>
            <br />
            <input
              type="radio"
              name="profession"
              id="Meat & Poultry"
              value="Meat & Poultry"
            />
            <label>Meat & Poultry</label>
            <br />
            <Input
              name="profession"
              placeholder="if other Please specify"
              fullWidth
            />
          </div>
       
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setnhRedevelopment(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Have you heard, this society is going for redevelopment?{" "}
            </h4>
            <input type="radio" name="redevelopment" id="Yes" value="Yes" />
            <label >Yes</label>
            <br /> <input type="radio" name="redevelopment" id="No" value="" />
            <label >No</label>
            {/* <br /> <input type="radio" name="redevelopment" id="not sure" value="not sure" />
            <label >not sure</label>
            <br /> */}
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
              onChange={(e) => setnhReputation(e.target.value)}
              required
          >
            <h4 className="font-semibold text-lg">
              How is the reputation of the building?
            </h4>
            <p className="italic font-light text-sm">
              Provide overall opinion - the first top of the mind response.
            </p>
            <input type="radio" name="reputation" id="Good" value="Good" />
            <label >Good</label>
            <br /> <input type="radio" name="reputation" id="Okay" value="Okay" />
            <label >Okay</label>
            <br /> <input type="radio" name="reputation" id="Bad" value="Bad" />
            <label >Bad</label>
            <br />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setnhComplaint(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
              Have you heard any specific complaints about people in the society
              ?
            </h4>
            <p className="italic font-light text-sm">
              Capture in single words or adjectives
            </p>
            <input type="radio" name="complaints" id="Yes" value="Yes" />
            <label >Yes</label>
            <br /> <input type="radio" name="complaints" id="No" value="no" />
            <label >No</label>
            <br />
            <Input name="complaints" placeholder="if Yes then Specify" fullWidth type="number" />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
                 onChange={(e) => setnhPeopleInSociety(e.target.value)}
                 required
          >
            <h4 className="font-semibold text-lg">
              Describe people in the society?
            </h4>
            <input
              type="radio" name="peopleinsociety"
              id="Friendly, Social, Helpfull"
              value="Friendly, Social, Helpfull"
            />
            <label>
              Friendly, Social, Helpfull
            </label>
            <br />{" "}
            <input type="radio" name="peopleinsociety" id="Quite and Aloof" value="Quite and Aloof" />
            <label >Quite and Aloof</label>
            <br />{" "}
            <input
              type="radio" name="peopleinsociety"
              id="Quarrelsome and Complaining"
              value="Quarrelsome and Complaining"
            />
            <label >
              Quarrelsome and Complaining
            </label>
            <br />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
                 onChange={(e) => setnhSocietyManagement(Boolean(e.target.value))}
                 required
          >
            <h4 className="font-semibold text-lg">
              Is the society management (secertary, chairman, etc.) friendly?{" "}
            </h4>
            <input type="radio" name="management" id="Yes" value="Yes" />
            <label >Yes</label>
            <br /> <input type="radio" name="management" id="No" value="" />
            <label >No</label>
            {/* <br /> <input type="radio" name="management" id="Not Sure" value="Not Sure" />
            <label >Not Sure</label>
            <br /> */}
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setnhDeliveryServices(Boolean(e.target.value))}
          required
          >
            <h4 className="font-semibold text-lg">
              Are you providing delivery services to building if it is a grocer
              or kirana ?{" "}
            </h4>
            <input type="radio" name="deliveryservices" id="Yes" value="Yes" />
            <label >Yes</label>
            <br /> <input type="radio" name="deliveryservices" id="No" value="" />
            <label >No</label>
            <br />{" "}
            {/* <input type="radio" name="deliveryservices" id="Not Applicable" value="Not Applicable" />
            <label >Not Applicable</label>
            <br /> */}
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
           onChange={(e) => setnhDeliveringEssential(Boolean(e.target.value))}
           required
          >
            <h4 className="font-semibold text-lg">
              Are there a lot of shops delivering essential items to the
              society?{" "}
            </h4>
            <p className="italic font-light text-sm">
              Essential items mean mean milk, bread, butter, grocery, fruits,
              vegetables.
            </p>
            <input type="radio" name="essential" id="Yes" value="Yes" />
            <label >Yes</label>
            <br /> <input type="radio" name="essential" id="No" value="" />
            <label >No</label>
            <br />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
           onChange={(e) => setnhSocialEvents(Boolean(e.target.value))}
           required
          >
            <h4 className="font-semibold text-lg">
              Have you noticed any social events like ganpati, navratri, new
              year, sports day etc often in the society?{" "}
            </h4>
            <input type="radio" name="socialevents" id="Yes" value="Yes" />
            <label >Yes</label>
            <br /> <input type="radio" name="socialevents" id="No" value="" />
            <label >No</label>
            {/* <br /> <input type="radio" name="socialevents" id="Not Sure" value="Not Sure" />
            <label >Not Sure</label>
            <br /> */}
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
             onChange={(e) => setnhChildren(e.target.value)}
             required
          >
            <h4 className="font-semibold text-lg">
              Do you see lot of children playing in the society ?{" "}
            </h4>
            <input type="radio" name="children" id="Teens" value="Teens" />
            <label >Teens</label>
            <br /> <input type="radio" name="children" id="Younger" value="Younger" />
            <label >Younger</label>
            <br /> <input type="radio" name="children" id="No" value="No" />
            <label >No</label>
            <br />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
           onChange={(e) => setnhOlder(e.target.value)}
           required
          >
            <h4 className="font-semibold text-lg">
              Are there a lot of older people in society?{" "}
            </h4>
            <input type="radio" name="older" id="Active" value="Active" />
            <label >Active</label>
            <br /> <input type="radio" name="older" id="Stay Home" value="Stay Home" />
            <label >Stay Home</label>
            <br /> <input type="radio" name="older" id="No" value="No" />
            <label >No</label>
            <br />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
              onChange={(e) => setnhElectricityBreakDown(Boolean(e.target.value))}
              required
          >
            <h4 className="font-semibold text-lg">
              Are there any electricity break down issues in the area?{" "}
            </h4>
            <input type="radio" name="electricitybreakdown" id="Yes" value="Yes" />
            <label>Yes</label>
            <br /> <input type="radio" name="electricitybreakdown" id="No" value="" />
            <label>No</label>
            {/* <br /> <input type="radio" name="electricitybreakdown" id="Not Sure" value="Not Sure" />
            <label >Not Sure</label>
            <br /> */}
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
             onChange={(e) => setnhWaterSupply(Boolean(e.target.value))}
             required
          >
            <h4 className="font-semibold text-lg">
              Are there any water supply problems ?{" "}
            </h4>
            <input type="radio" name="watersupply" id="Yes" value="Yes" />
            <label >Yes</label>
            <br /> <input type="radio" name="watersupply" id="No" value="" />
            <label >No</label>
            {/* <br /> <input type="radio" name="watersupply" id="Not Sure" value="Not Sure" />
            <label >Not Sure</label>
            <br /> */}
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
           onChange={(e) => setnhTraffic(e.target.value)}
           required
          >
            <h4 className="font-semibold text-lg">
              How is the traffic situation around the area ?{" "}
            </h4>
            <input type="radio" name="traffic" id="Peak Hour Jam" value="Peak Hour Jam" />
            <label >Peak Hour Jam</label>
            <br /> <input type="radio" name="traffic" id="Always Jam" value="Always Jam" />
            <label >Always Jam</label>
            <br /> <input type="radio" name="traffic" id="Random Jam" value="Random Jam" />
            <label>Random Jam</label>
            <br />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setnhSellingProperty(Boolean(e.target.value))}
            required
          >
            <h4 className="font-semibold text-lg">
              Are the lot of people selling property in this society?{" "}
            </h4>
            <input type="radio" name="SellingProperty" id="Yes" value="Yes" />
            <label >Yes</label>
            <br /> <input type="radio" name="SellingProperty" id="No" value="" />
            <label >No</label>
            {/* <br /> <input type="radio" name="SellingProperty" id="Not Sure" value="Not Sure" />
            <label>Not Sure</label>
            <br /> */}
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
           onChange={(e) => setnhPoliceComplaints(Boolean(e.target.value))}
           required
          >
            <h4 className="font-semibold text-lg">
              Are there any police complaints in society ?{" "}
            </h4>
            <input type="radio" name="policecomplaint" id="Yes" value="Yes" />
            <label >Yes</label>
            <br /> <input type="radio" name="policecomplaint" id="No" value="" />
            <label >No</label>
            {/* <br /> <input type="radio" name="policecomplaint" id="Not Sure" value="Not Sure" />
            <label >Not Sure</label>
            <br /> */}
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
                onChange={(e) => setnhEasyToGet(Boolean(e.target.value))}
                required
          >
            <h4 className="font-semibold text-lg">
              Is it easy to get maids, helpers, handymen(carpentry, electrical,
              plumbers etc), milk and newpapers ?{" "}
            </h4>
            <input type="radio" name="easytoget" id="Yes" value="Yes" />
            <label >Yes</label>
            <br /> <input type="radio" name="easytoget" id="No" value="" />
            <label >No</label>
            {/* <br /> <input type="radio" name="easytoget" id="Not Sure" value="Not Sure" />
            <label >Not Sure</label> */}
            <br />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
          onChange={(e) => setnhKindOfProfessions (e.target.value)}
          required
          >
            <h4 className="font-semibold text-lg">
              What kind of professions do people come from in the society ?{" "}
            </h4>
            <input type="radio" name="typeofprofession" id="Banker" value="Banker" />
            <label >Banker</label>
            <br /> <input type="radio" name="typeofprofession" id="Engineers" value="Engineers" />
            <label >Engineers</label>
            <br />{" "}
            <input
              type="radio" name="typeofprofession"
              id="Information Technology"
              value="Information Technology"
            />
            <label >Information Technology</label>
            <br />
            <input type="radio" name="typeofprofession" id="Business" value="Business" />
            <label >Business</label>
            <br />{" "}
            <input
              type="radio" name="typeofprofession"
              id="Professionals Doctor/CA"
              value="Professionals Doctor/CA"
            />
            <label >Professionals Doctor/CA</label>
            <br />{" "}
            <input type="radio" name="typeofprofession" id="Entertainment" value="Entertainment" />
            <label >Entertainment</label>
            <br />
            <Input  name="typeofprofession" placeholder="if other Please Specify" fullWidth />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 "
           onChange={(e) => setnhStrayDogs (Boolean(e.target.value))}
           required
          >
            <h4 className="font-semibold text-lg">
              Are stray dogs/ other animals a problem in and around the society?{" "}
            </h4>
            <input type="radio" name="straydogs" id="Yes" value="Yes" />
            <label >Yes</label>
            <br /> <input type="radio" name="straydogs" id="No" value="" />
            <label >No</label>
            <br />
          </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 " >
            <h4 className="font-semibold text-lg">
              Approximate 1 BHK price based on past six months sale.{" "}
            </h4>
            <Input onChange={(e) => setnhOneBHK(Number(e.target.value ))} placeholder="Enter No Only" fullWidth />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Approximate 2 BHK price based on past six months sale.{" "}
            </h4>
            <Input onChange={(e) => setnhTwoBHK(Number(e.target.value ))} placeholder="Enter No Only" fullWidth />
          </div>
          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">
              Approximate 3 BHK price based on past six months sale.{" "}
            </h4>
            <Input onChange={(e) => setnhThreeBHK(Number(e.target.value ))} placeholder="Enter No Only" fullWidth />
          </div>
          {/* {showConfirmation ? <div className="m-5 p-2 text-center bg-green-500 rounded-xl">
              <p className=" text-white" >uploaded Neighbourhood info Successfully</p>
            </div>
          : ''
        } */}
          <div className="border-2  border-sky-400 bg-sky-300 absolute right-5 px-6 py-2 my-4 rounded-md">
            <button className=" text-white font-bold" type="submit">
              Save
            </button>
          </div>
          <div className="border-2 border-sky-600 absolute left-5 bg-white px-6 py-2 my-4  rounded-md">
            <button onClick={()=>  {
               let result= window.confirm("you will you will loose all your data");
               if(result===true){
                 navigate("/form-list");
               }
          }} className="text-sky-600 font-bold" >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Neighbourhood;
