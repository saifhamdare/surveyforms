import { Input } from "@mui/material";

import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
const Neighbourhood = ({
  neighbourhoodInfo,
  questionCount,
  setNeighbourhoodInfo,
}) => {
  return (
    <div className="">
      {questionCount == 1 && (
        <div className="question font-semibold text-xl text-sky-700 ">
          <div className="flex mb-10">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">Full Name </h4>
          </div>
          <Input
            placeholder="John Doe"
            value={neighbourhoodInfo.fullName}
            onChange={(e) =>
              setNeighbourhoodInfo({
                ...neighbourhoodInfo,
                fullName: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 2 && (
        <div className="question font-semibold text-xl text-sky-700 ">
          <div className="flex mb-10">
            <h1 className="mr-2 ">{questionCount}.</h1>

            <h4 className="font-semibold text-lg">Mobile Number </h4>
          </div>
          <Input
            placeholder="9876543211"
            value={neighbourhoodInfo.mobileNo}
            onChange={(e) =>
              setNeighbourhoodInfo({
                ...neighbourhoodInfo,
                mobileNo: e.target.value,
              })
            }
            required
            fullWidth
            type="number"
          />
        </div>
      )}
      {questionCount == 3 && (
        <div
          className="question bg-white  "
          value={neighbourhoodInfo.gender}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              gender: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">Gender </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="gender"
            id="male"
            value="M"
          />
          <label className="ml-2">Male</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="gender"
            id="female"
            value="F"
          />
          <label className="ml-2">Female</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="gender"
            id="female"
            value="O"
          />
          <label className="ml-2">Other</label>
        </div>
      )}
      {questionCount == 4 && (
        <div
          className="question bg-white  "
          value={neighbourhoodInfo.profession}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              profession: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>

            <h4 className="">Profession</h4>
          </div>
          <input
            className="ml-2"
            type="radio"
            name="profession"
            id="General Stores/Kirana"
            value="1"
          />
          <label className="ml-2">General Stores/Kirana</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="profession"
            id="Convenience Store/Mini Mart"
            value="2"
          />
          <label className="ml-2">Convenience Store/Mini Mart</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="profession"
            id="Grocer"
            value="Grocer"
          />
          <label className="ml-2">Grocer</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="profession"
            id="Beauty Salon"
            value="3"
          />
          <label className="ml-2">Beauty Salon</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="profession"
            id="General Hair Salon"
            value="4"
          />
          <label className="ml-2">General Hair Salon</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="profession"
            id="Restaurant"
            value="5"
          />
          <label className="ml-2">Restaurant</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="profession"
            id="Laundry"
            value="6"
          />
          <label className="ml-2">Laundry</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="profession"
            id="Bakery"
            value="Bakery"
          />
          <label className="ml-2">Bakery</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="profession"
            id="Newspaper/Magazine"
            value="7"
          />
          <label className="ml-2">Newspaper/Magazine</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="profession"
            id="Hardware/Electrical"
            value="8"
          />
          <label className="ml-2">Hardware/Electrical</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="profession"
            id="Medical Stores"
            value="9"
          />
          <label className="ml-2">Medical Stores</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="profession"
            id="Snacks & Beverages"
            value="10"
          />
          <label className="ml-2">Snacks & Beverages</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="profession"
            id="Stationery"
            value="11"
          />
          <label className="ml-2">Stationery</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="profession"
            id="Meat & Poultry"
            value="12"
          />
          <label className="ml-2">Meat & Poultry</label>
          <br />
          <Input
            name="profession"
            placeholder="if other Please specify"
            fullWidth
          />
        </div>
      )}
      {questionCount == 5 && (
        <div
          className=""
          value={neighbourhoodInfo.redevelopment}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              redevelopment: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              {" "}
              Have you heard, this society is going for redevelopment?
            </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="redevelopment"
            id="Yes"
            value="1"
          />
          <label className="ml-2">Yes</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="redevelopment"
            id="No"
            value="2"
          />
          <label className="ml-2">No</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="redevelopment"
            id="not sure"
            value="3"
          />
          <label className="ml-2">Not sure</label>
          <br />
        </div>
      )}
      {questionCount == 6 && (
        <div
          className=""
          value={neighbourhoodInfo.reputation}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              reputation: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">How is the reputation of the building?</h4>
          </div>
          <p className="italic font-light text-sm">
            Provide overall opinion-the first top of the mind response.
          </p>
          <input
            type="radio"
            className="ml-2"
            name="reputation"
            id="Good"
            value="1"
          />
          <label className="ml-2">Good</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="reputation"
            id="Okay"
            value="2"
          />
          <label className="ml-2">Okay</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="reputation"
            id="Bad"
            value="3"
          />
          <label className="ml-2">Bad</label>
          <br />
        </div>
      )}
      {questionCount == 7 && (
        <div
          className=""
          value={neighbourhoodInfo.complaint}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              complaint: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Have you heard any specific complaints about people in the society
              ?
            </h4>
          </div>
          <p className="italic font-light text-sm">
            Capture in single words or adjectives
          </p>
          <input
            type="radio"
            className="ml-2"
            name="complaints"
            id="Yes"
            value="1"
          />
          <label className="ml-2">Yes</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="complaints"
            id="No"
            value="2"
          />
          <label className="ml-2">No</label>
          <br />
          <Input
            name="complaints"
            placeholder="if Yes then Specify"
            fullWidth
          />
        </div>
      )}
      {questionCount == 8 && (
        <div
          className=""
          value={neighbourhoodInfo.peopleInSociety}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              peopleInSociety: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">Describe people in the society?</h4>
          </div>
          <input
            className="ml-2"
            type="radio"
            name="peopleinsociety"
            id="Friendly, Social, Helpfull"
            value="1"
          />
          <label className="ml-2">Friendly, Social, Helpfull</label>
          <br />{" "}
          <input
            className="ml-2"
            type="radio"
            name="peopleinsociety"
            id="Quite and Aloof"
            value="2"
          />
          <label className="ml-2">Quite and Aloof</label>
          <br />{" "}
          <input
            className="ml-2"
            type="radio"
            name="peopleinsociety"
            id="Quarrelsome and Complaining"
            value="3"
          />
          <label className="ml-2">Quarrelsome and Complaining</label>
          <br />
        </div>
      )}
      {questionCount == 9 && (
        <div
          className=""
          value={neighbourhoodInfo.societyManagement}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              societyManagement: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Is the society management (secertary, chairman, etc.) friendly?
            </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="management"
            id="Yes"
            value="1"
          />
          <label className="ml-2">Yes</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="management"
            id="No"
            value="2"
          />
          <label className="ml-2">No</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="management"
            id="Not Sure"
            value="3"
          />
          <label className="ml-2">Not Sure</label>
          <br />
        </div>
      )}
      {questionCount == 10 && (
        <div
          className=""
          value={neighbourhoodInfo.deliveryServices}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              deliveryServices: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Are you providing delivery services to building if it is a grocer
              or kirana ?
            </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="deliveryservices"
            id="Yes"
            value="1"
          />
          <label className="ml-2">Yes</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="deliveryservices"
            id="No"
            value="2"
          />
          <label className="ml-2">No</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="deliveryservices"
            id="Not Applicable"
            value="3"
          />
          <label className="ml-2">Not Applicable</label>
          <br />
        </div>
      )}
      {questionCount == 11 && (
        <div
          className=""
          value={neighbourhoodInfo.deliveringEssential}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              deliveringEssential: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Are there a lot of shops delivering essential items to the
              society?
            </h4>
          </div>
          <p className="italic font-light text-sm">
            Essential items mean mean milk, bread, butter, grocery, fruits,
            vegetables.
          </p>
          <input
            type="radio"
            className="ml-2"
            name="essential"
            id="Yes"
            value="1"
          />
          <label className="ml-2">Yes</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="essential"
            id="No"
            value="2"
          />
          <label className="ml-2">No</label>
          <br />
        </div>
      )}
      {questionCount == 12 && (
        <div
          className=""
          value={neighbourhoodInfo.socialEvents}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              socialEvents: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Have you noticed any social events like ganpati, navratri, new
              year, sports day etc often in the society?
            </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="socialevents"
            id="Yes"
            value="1"
          />
          <label className="ml-2">Yes</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="socialevents"
            id="No"
            value="2"
          />
          <label className="ml-2">No</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="socialevents"
            id="Not Sure"
            value="3"
          />
          <label className="ml-2">Not Sure</label>
          <br />
        </div>
      )}
      {questionCount == 13 && (
        <div
          className=""
          value={neighbourhoodInfo.children}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              children: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Do you see lot of children playing in the society ?{" "}
            </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="children"
            id="Teens"
            value="1"
          />
          <label className="ml-2">Teens</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="children"
            id="Younger"
            value="2"
          />
          <label className="ml-2">Younger</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="children"
            id="No"
            value="3"
          />
          <label className="ml-2">No</label>
          <br />
        </div>
      )}
      {questionCount == 14 && (
        <div
          className=""
          value={neighbourhoodInfo.older}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              older: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">Are there a lot of older people in society?</h4>
          </div>
          <h4 className="font-semibold text-lg"></h4>
          <input
            type="radio"
            className="ml-2"
            name="older"
            id="Active"
            value="1"
          />
          <label className="ml-2">Active</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="older"
            id="Stay Home"
            value="2"
          />
          <label className="ml-2">Stay Home</label>
          <br />{" "}
          <input type="radio" className="ml-2" name="older" id="No" value="3" />
          <label className="ml-2">No</label>
          <br />
        </div>
      )}
      {questionCount == 15 && (
        <div
          className=""
          value={neighbourhoodInfo.electricityBreakDown}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              electricityBreakDown: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Are there any electricity break down issues in the area?
            </h4>
          </div>
          <input
            className="ml-2"
            type="radio"
            name="electricitybreakdown"
            id="Yes"
            value="1"
          />
          <label className="ml-2">Yes</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="electricitybreakdown"
            id="No"
            value="2"
          />
          <label className="ml-2">No</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="electricitybreakdown"
            id="Not Sure"
            value="3"
          />
          <label className="ml-2">Not Sure</label>
          <br />
        </div>
      )}
      {questionCount == 16 && (
        <div
          className=""
          value={neighbourhoodInfo.waterSupply}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              waterSupply: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">Are there any water supply problems ? </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="watersupply"
            id="Yes"
            value="1"
          />
          <label className="ml-2">Yes</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="watersupply"
            id="No"
            value="2"
          />
          <label className="ml-2">No</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="watersupply"
            id="Not Sure"
            value="3"
          />
          <label className="ml-2">Not Sure</label>
          <br />
        </div>
      )}
      {questionCount == 17 && (
        <div
          className=""
          value={neighbourhoodInfo.traffic}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              traffic: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              How is the traffic situation around the area ?{" "}
            </h4>
          </div>
          <input
            className="ml-2"
            type="radio"
            name="traffic"
            id="Peak Hour Jam"
            value="1"
          />
          <label className="ml-2">Peak Hour Jam</label>
          <br />{" "}
          <input
            className="ml-2"
            type="radio"
            name="traffic"
            id="Always Jam"
            value="2"
          />
          <label className="ml-2">Always Jam</label>
          <br />{" "}
          <input
            className="ml-2"
            type="radio"
            name="traffic"
            id="Random Jam"
            value="3"
          />
          <label className="ml-2">Random Jam</label>
          <br />
        </div>
      )}
      {questionCount == 18 && (
        <div
          className=""
          value={neighbourhoodInfo.sellingProperty}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              sellingProperty: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Are the lot of people selling property in this society?{" "}
            </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="SellingProperty"
            id="Yes"
            value="1"
          />
          <label className="ml-2">Yes</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="SellingProperty"
            id="No"
            value="2"
          />
          <label className="ml-2">No</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="SellingProperty"
            id="Not Sure"
            value="3"
          />
          <label className="ml-2">Not Sure</label>
          <br />
        </div>
      )}
      {questionCount == 19 && (
        <div
          className=""
          value={neighbourhoodInfo.policeComplaints}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              policeComplaints: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">Are there any police complaints in society ? </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="policecomplaint"
            id="Yes"
            value="1"
          />
          <label className="ml-2">Yes</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="policecomplaint"
            id="No"
            value="2"
          />
          <label className="ml-2">No</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="policecomplaint"
            id="Not Sure"
            value="3"
          />
          <label>Not Sure</label>
          <br />
        </div>
      )}
      {questionCount == 20 && (
        <div
          className=""
          value={neighbourhoodInfo.easyToGet}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              easyToGet: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Is it easy to get maids, helpers, handymen (carpentry, electrical,
              plumbers etc), milk and newpapers ?
            </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="easytoget"
            id="Yes"
            value="1"
          />
          <label className="ml-2">Yes</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="easytoget"
            id="No"
            value="2"
          />
          <label className="ml-2">No</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="easytoget"
            id="Not Sure"
            value="3"
          />
          <label className="ml-2">Not Sure</label>
          <br />
        </div>
      )}
      {questionCount == 21 && (
        <div
          className=""
          value={neighbourhoodInfo.kindOfProfessions}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              kindOfProfessions: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              What kind of professions do people come from in the society ?{" "}
            </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="typeofprofession"
            value="1"
          />
          <label className="ml-2">Business</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="typeofprofession"
            value="2"
          />
          <label className="ml-2">Banker</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="typeofprofession"
            value="3"
          />
          <label className="ml-2">IT Engineer</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="typeofprofession"
            value="4"
          />
          <label className="ml-2">Other Engineer</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="typeofprofession"
            value="5"
          />
          <label className="ml-2">Doctor</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="typeofprofession"
            value="6"
          />
          <label className="ml-2">CA/CS</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="typeofprofession"
            value="7"
          />
          <label className="ml-2">Teacher</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="typeofprofession"
            value="8"
          />
          <label className="ml-2">Entertainment</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="typeofprofession"
            value="9"
          />
          <label className="ml-2">Scientist</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="typeofprofession"
            value="10"
          />
          <label className="ml-2">Lawyer</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="typeofprofession"
            value="11"
          />
          <label className="ml-2">Athelete</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="typeofprofession"
            value="12"
          />
          <label className="ml-2">Chef</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="typeofprofession"
            value="13"
          />
          <label className="ml-2">Aviation</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="typeofprofession"
            value="14"
          />
          <label className="ml-2">Not Working</label>
          <Input
            name="typeofprofession"
            placeholder="if other Please Specify"
            fullWidth
          />
        </div>
      )}

      {questionCount == 22 && (
        <div
          className=""
          value={neighbourhoodInfo.strayDogs}
          onChange={(e) =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              strayDogs: Boolean(e.target.value),
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Are stray dogs/ other animals a problem in and around the society?{" "}
            </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="straydogs"
            id="Yes"
            value="1"
          />
          <label className="ml-2">Yes</label>
          <br />{" "}
          <input
            type="radio"
            className="ml-2"
            name="straydogs"
            id="No"
            value=""
          />
          <label className="ml-2">No</label>
          <br />
        </div>
      )}

      {questionCount == 23 && (
        <div className="">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Approximate 1 BHK price based on past six months sale.
            </h4>
          </div>
          <Input
            value={neighbourhoodInfo.oneBHK}
            onChange={(e) =>
              setNeighbourhoodInfo({
                ...neighbourhoodInfo,
                oneBHK: e.target.value,
              })
            }
            placeholder="Enter No Only"
            fullWidth
          />
        </div>
      )}
      {questionCount == 24 && (
        <div className="">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              {" "}
              Approximate 2 BHK price based on past six months sale.
            </h4>
          </div>

          <Input
            value={neighbourhoodInfo.twoBHK}
            onChange={(e) =>
              setNeighbourhoodInfo({
                ...neighbourhoodInfo,
                twoBHK: e.target.value,
              })
            }
            placeholder="Enter No Only"
            fullWidth
          />
        </div>
      )}
      {questionCount == 25 && (
        <div className="">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              {" "}
              Approximate 3 BHK price based on past six months sale.
            </h4>
          </div>
          <h4 className="font-semibold text-lg"></h4>
          <Input
            value={neighbourhoodInfo.threeBHK}
            onChange={(e) =>
              setNeighbourhoodInfo({
                ...neighbourhoodInfo,
                threeBHK: e.target.value,
              })
            }
            placeholder="Enter No Only"
            fullWidth
          />
        </div>
      )}
    </div>
  );
};

export default Neighbourhood;

{
  /* <div className="flex justify-around">
<div className="border-2 border-sky-600  bg-white px-6 py-2 my-4  rounded-md">
  <button
    onClick={() => {
      let result = window.confirm(
        "you will you will loose all your data"
      );
      if (result === true) {
        navigate("/form-list", { replace: true });
      }
    }}
    className="text-sky-600 font-bold"
  >
    Back
  </button>
</div>
<div className="border-2  border-sky-400 bg-sky-300 px-6 py-2 my-4 rounded-md">
  <button className=" text-white font-bold" type="submit">
    Save
  </button>
</div>
</div> */
}
