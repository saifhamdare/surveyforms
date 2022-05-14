import { Input } from "@mui/material";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
const CommunityLeader = ({
  questionCount,
  communityLeaderInfo,
  setCommunityLeaderInfo,
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
            placeholder="eg. ramesh Kumar"
            value={communityLeaderInfo.fullName}
            onChange={(e) =>
              setCommunityLeaderInfo({
                ...communityLeaderInfo,
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
            <h4 className="font-semibold text-lg">Mobile No. </h4>
          </div>

          <Input
            placeholder="eg. 9876543211"
            value={communityLeaderInfo.mobileNo}
            onChange={(e) =>
              setCommunityLeaderInfo({
                ...communityLeaderInfo,
                mobileNo: e.target.value,
              })
            }
            type='number'
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 3 && (
        <div className="question font-semibold text-xl text-sky-700 ">
          <div className="flex mb-10">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">Email id </h4>
          </div>

          <Input
            placeholder="eg. rameshk@gmail.com"
            value={communityLeaderInfo.emailId}
            onChange={(e) =>
              setCommunityLeaderInfo({
                ...communityLeaderInfo,
                emailId: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 4 && (
        <div
          className="question "
          required
          value={communityLeaderInfo.gender}
          onChange={(e) =>
            setCommunityLeaderInfo({
              ...communityLeaderInfo,
              gender: e.target.value,
            })
          }
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">Gender </h4>
          </div>

          <input
            className="ml-2"
            type="radio"
            id="Male"
            name="gender"
            value="M"
            checked={communityLeaderInfo.gender === "M"}
          />
          <label className="ml-2">Male</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            id="Female"
            name="gender"
            value="F"
            checked={communityLeaderInfo.gender === "F"}
          />
          <label className="ml-2">Female</label>
          <br />
        </div>
      )}
     {questionCount == 5 && (
        <div className="question font-semibold text-xl text-sky-700 ">
          <div className="flex mb-10">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">Address </h4>
          </div>

          <Input
            placeholder="eg. rameshk@gmail.com"
            value={communityLeaderInfo.address}
            onChange={(e) =>
              setCommunityLeaderInfo({
                ...communityLeaderInfo,
                address: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 6 && (
        <div className="question font-semibold text-xl text-sky-700 ">
          <div className="flex mb-10">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">RERA Number </h4>
          </div>

          <Input
            placeholder="eg. rameshk@gmail.com"
            value={communityLeaderInfo.reraNumber}
            onChange={(e) =>
              setCommunityLeaderInfo({
                ...communityLeaderInfo,
                reraNumber: e.target.value,
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

export default CommunityLeader;
