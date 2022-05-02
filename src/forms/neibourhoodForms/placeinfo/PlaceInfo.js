import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
const PlaceInfo = ({
  questionCount,
  placeInfo,
  setPlaceInfo,
  isVendorQuestion,
}) => {
  const [pigeoCode, setpiGeocode] = useState("");

  // vendor state
  const [vendorCount, setVendorCount] = useState(1);

  const [v1, setV1] = useState();
  const [v2, setV2] = useState();

  const [mainVendor, setMainVendor] = useState([]);

  const getLoaction = (e) => {
    // e.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(`${ position.coords.latitude} , ${position.coords.longitude}`)
      setPlaceInfo({
        ...placeInfo,
        geoCode: `${ position.coords.latitude} , ${position.coords.longitude}`,
      })
      setPlaceInfo({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  };
  // const updateLoaction = `${placeInfo?.geoCode?.lat} , ${placeInfo?.geoCode?.long}`;
  // setPlaceInfo(updateLoaction);
  const createV1 = (value, of) => {
    switch (of) {
      case "vname":
        setV1({ ...v1, vendorName: value });
        break;
      case "sname":
        setV1({ ...v1, shopName: value });
        break;
      case "pno":
        setV1({ ...v1, phoneNo: value });
        break;

      default:
        break;
    }
  };

  const createV2 = (value, of) => {
    switch (of) {
      case "vname":
        setV2({ ...v2, vendorName: value });
        break;
      case "sname":
        setV2({ ...v2, shopName: value });
        break;
      case "pno":
        setV2({ ...v2, phoneNo: value });
        break;

      default:
        break;
    }
  };

  const createVendor = (from) => {
    if (v1 && questionCount === 9) {
      setMainVendor([...mainVendor, v1, v2]);
    }

    // if (vData.vname && vData.sname && vData.pno) {
    //   setMainVendor([...mainVendor, vData]);
    // }
  };

  return (
    <div className="">
      {questionCount == 1 && (
        <div className="question font-semibold text-xl text-sky-700  ">
          <div className="flex mb-10">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Enter geolocation of society
            </h4>
          </div>
          <p className="italic font-light text-sm">
            Enter comma separated value of geo-coordinates.
          </p>
          <div className="flex">
            <Input
              placeholder="no."
              // onChange={(e) => setpiGeocode(e.target.value)}
              // value={updateLoaction}
              value={placeInfo.geoCode}
              onChange={(e) =>
                setPlaceInfo({
                  ...placeInfo,
                  geoCode: e.target.value,
                })
              }
              required
              fullWidth
              disabled
            />
            <button
              className="border-2 bg-sky-500 text-white  p-1 px-3 rounded-xl  "
              onClick={(event) => getLoaction(event)}
            >
              geoLocation
            </button>
          </div>
        </div>
      )}

      {questionCount == 2 && (
        <div className="question   ">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Number of full time / part time maids/ cooks living near by
            </h4>
          </div>

          <p className="italic font-light text-sm">Please enter in numbers.</p>
          <Input
            placeholder="no."
            value={placeInfo.cookslivingNearby}
            onChange={(e) =>
              setPlaceInfo({
                ...placeInfo,
                cookslivingNearby: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 3 && (
        <div
          className="question  "
          value={placeInfo.surroundingArea}
          onChange={(e) =>
            setPlaceInfo({
              ...placeInfo,
              surroundingArea: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Please check whether the society surrounding area is clean or not
              ?{" "}
            </h4>
          </div>

          <p className="italic font-light text-sm">
            Good means approach road, entrance are clean also no garbage dump is
            visible.
          </p>
          <input
            type="radio"
            className="ml-2"
            name="surrounding"
            id="Good"
            value="1"
          />
          <label className="ml-2">Good</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="surrounding"
            id="Okay"
            value="2"
          />
          <label className="ml-2">Okay</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="surrounding"
            id="Bad"
            value="3"
          />
          <label className="ml-2">Bad</label>
          <br />
        </div>
      )}
      {questionCount == 4 && (
        <div className="question   ">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              How long does it take to reach the highway from society ?{" "}
            </h4>
          </div>

          <p className="italic font-light text-sm">
            Check Google for peak hours. Mention zero in hours when it is under
            an hour
          </p>
          <Input
            value={placeInfo.highwayFromSociety}
            onChange={(e) =>
              setPlaceInfo({
                ...placeInfo,
                highwayFromSociety: e.target.value,
              })
            }
            required
            fullWidth
            placeholder="01:15"
          />
        </div>
      )}

      {questionCount == 5 && (
        <div className="question   ">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Please provide the local market name{" "}
            </h4>
          </div>

          <p className="italic font-light text-sm">
            We should system check on Google.
          </p>
          <Input
            placeholder="Bhindi Bazaar"
            value={placeInfo.localMarketName}
            onChange={(e) =>
              setPlaceInfo({
                ...placeInfo,
                localMarketName: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 6 && (
        <div className="question   ">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Please provide local market distance (in Km){" "}
            </h4>
          </div>

          <p className="italic font-light text-sm">
            We should system check on Google.
          </p>
          <Input
            placeholder="no."
            value={placeInfo.localMarketDistance}
            onChange={(e) =>
              setPlaceInfo({
                ...placeInfo,
                localMarketDistance: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 7 && (
        <div className="question   ">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Please provide top 2 grocery stores' name.{" "}
            </h4>
          </div>

          <Input
            placeholder="no."
            value={placeInfo.groceryStoresName}
            onChange={(e) =>
              setPlaceInfo({ ...placeInfo, groceryStoresName: e.target.value })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 8 && (
        <div className="question   ">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Please provide top 2 vegetables stores' name.{" "}
            </h4>
          </div>

          <button
            type="button"
            onClick={() => {
              setVendorCount(2);
            }}
          >
            add
          </button>
          {/* <button
            type="button"
            onClick={() => {
              createVendor(vendorCount === 1 ? "v1" : "v2");
            }}
          >
            Confirm
          </button> */}
          {vendorCount === 2 && (
            <button
              type="button"
              onClick={() => {
                setVendorCount(1);
              }}
            >
              remove
            </button>
          )}
          <div className="flex space-x-1">
            <Input
              placeholder="Vendor Name"
              onChange={(e) => createV1(e.target.value, "vname")}
              required
            />
            <Input
              placeholder="Shop Name"
              onChange={(e) => createV1(e.target.value, "sname")}
              required
            />
            <Input
              placeholder="Phone No"
              onChange={(e) => createV1(e.target.value, "pno")}
              required
            />
          </div>
          {vendorCount === 2 && (
            <div className="flex space-x-1">
              <Input
                placeholder="Vendor Name"
                onChange={(e) => createV2(e.target.value, "vname")}
                required
              />
              <Input
                placeholder="Shop Name"
                onChange={(e) => createV2(e.target.value, "sname")}
                required
              />
              <Input
                placeholder="Phone No"
                onChange={(e) => createV2(e.target.value, "pno")}
                required
              />
            </div>
          )}
        </div>
      )}

      {questionCount == 9 && (
        <div
          className="question "
          value={placeInfo.commercialEstablishments}
          onChange={(e) =>
            setPlaceInfo({
              ...placeInfo,
              commercialEstablishments: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Are there shops and commercial establishments within the society ?{" "}
            </h4>
          </div>

          <p className="italic font-light text-sm">
            Check if the groundfloor has shops with general access to public or
            offices being run from the society.
          </p>
          <input
            type="radio"
            className="ml-2"
            name="commercial"
            id="Yes"
            value="true"
          />
          <label className="ml-2">Yes</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="commercial"
            id="No"
            value=""
          />
          <label className="ml-2">No</label>
          <br />
        </div>
      )}

      {questionCount == 10 && (
        <div
          className="question   "
          value={placeInfo.vicinity}
          onChange={(e) =>
            setPlaceInfo({
              ...placeInfo,
              vicinity: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Describe the vicinity/surroundings of the society ?
            </h4>
          </div>

          <input
            type="radio"
            className="ml-2"
            name="cleanliness"
            id="Clean"
            value="1"
          />
          <label className="ml-2">Clean</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="cleanliness"
            id="Slums & Stalls"
            value="2"
          />
          <label className="ml-2">Slums & Stalls</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="cleanliness"
            id="Trees & Greenery"
            value="3"
          />
          <label className="ml-2">Trees & Greenery</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="cleanliness"
            id="Garbage & Dirt"
            value="4"
          />
          <label className="ml-2">Garbage & Dirt</label>
          <br />
        </div>
      )}

      {questionCount == 11 && (
        <div
          className="question   "
          value={placeInfo.accessForVehicles}
          onChange={(e) =>
            setPlaceInfo({
              ...placeInfo,
              accessForVehicles: Boolean(e.target.value),
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Is the approach road easy to access for vehicles?{" "}
            </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="vehicle"
            id="Yes"
            value="true"
          />
          <label className="ml-2">Yes</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="vehicle"
            id="No"
            value=""
          />
          <label className="ml-2">No</label>
          <br />
        </div>
      )}

      {questionCount == 12 && (
        <div
          className="question   "
          value={placeInfo.maintained}
          onChange={(e) =>
            setPlaceInfo({
              ...placeInfo,
              maintained: Boolean(e.target.value),
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Please check whether the society is maintained well like cleaning,
              staircase, lift, amenities, external painting, leakages etc.
            </h4>
          </div>
          <p className="italic font-light text-sm">
            Ok means clean and no painting or leakage damage.Bad means unclean,
            unmaintained and with paint & leakage damages externally.
          </p>
          <input
            className="ml-2"
            type="radio"
            name="maintained"
            id="Good"
            value="1"
          />
          <label className="ml-2">Good</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="maintained"
            id="Ok"
            value="2"
          />
          <label className="ml-2">Ok</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="maintained"
            id="Bad"
            value="3"
          />
          <label className="ml-2">Bad</label>
          <br />
        </div>
      )}
      {questionCount == 13 && (
        <div
          className="question   "
          value={placeInfo.anyRepair}
          onChange={(e) =>
            setPlaceInfo({
              ...placeInfo,
              anyRepair: Boolean(e.target.value),
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Do you see any repair and maintenance work going on in society?{" "}
            </h4>
          </div>
          <input
            type="radio"
            className="ml-2"
            name="anyrepair"
            id="Yes"
            value="true"
          />
          <label className="ml-2">Yes</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="anyrepair"
            id="No"
            value=""
          />
          <label className="ml-2">No</label>

          <br />
        </div>
      )}

      {questionCount == 14 && (
        <div
          className="question   "
          value={placeInfo.structureQuality}
          onChange={(e) =>
            setPlaceInfo({
              ...placeInfo,
              structureQuality: e.target.value,
            })
          }
          required
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Is the building structure quality?{" "}
            </h4>
          </div>

          <p className="italic font-light text-sm">
            Ok means minor visible cracks and/or plant growth on walls. Bad
            means large cracks and plaster holes and/or large leakages.
          </p>
          <input
            type="radio"
            className="ml-2"
            name="quality"
            id="Good"
            value="1"
          />
          <label className="ml-2">Good</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="quality"
            id="Okay"
            value="2"
          />
          <label className="ml-2">Okay</label>
          <br />
          <input
            type="radio"
            className="ml-2"
            name="quality"
            id="bad"
            value="3"
          />
          <label className="ml-2">bad</label>
          <br />
        </div>
      )}
      {questionCount == 15 && (
        <div className="question   ">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">Your Remarks</h4>
          </div>
          <Input
            placeholder="Your Answer"
            value={placeInfo.remark}
            onChange={(e) =>
              setPlaceInfo({
                ...placeInfo,
                remark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
    </div>
  );
};

export default PlaceInfo;
