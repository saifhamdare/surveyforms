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
          />
          <label className="ml-2">Male</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            id="Female"
            name="gender"
            value="F"
          />
          <label className="ml-2">Female</label>
          <br />
        </div>
      )}
      {questionCount == 5 && (
        <div
          className="question  "
          required
          value={communityLeaderInfo.profession}
          onChange={(e) =>
            setCommunityLeaderInfo({
              ...communityLeaderInfo,
              profession: e.target.value,
            })
          }
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">Profession : </h4>
          </div>

          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="1"
          />
          <label className="ml-2">Business</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="2"
          />
          <label className="ml-2">Banker</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="3"
          />
          <label className="ml-2">IT Engineer</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="4"
          />
          <label className="ml-2">Other Engineer</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="5"
          />
          <label className="ml-2">Doctor</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="6"
          />
          <label className="ml-2">CA/CS</label>

          <br />
          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="7"
          />
          <label className="ml-2">Teacher</label>

          <br />
          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="8"
          />
          <label className="ml-2">Entertainment</label>

          <br />
          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="9"
          />
          <label className="ml-2">Scientist</label>

          <br />
          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="10"
          />
          <label className="ml-2">Lawyer</label>

          <br />
          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="11"
          />
          <label className="ml-2">Athelete</label>

          <br />
          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="12"
          />
          <label className="ml-2">Chef</label>

          <br />
          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="13"
          />
          <label className="ml-2">Aviation</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            name="clprofessionType"
            value="14"
          />
          <label className="ml-2">Not Working</label>
        </div>
      )}
      {questionCount == 6 && (
        <div
          className="question  "
          required
          value={communityLeaderInfo.liveInSociety}
          onChange={(e) =>
            setCommunityLeaderInfo({
              ...communityLeaderInfo,
              liveInSociety: Boolean(e.target.value),
            })
          }
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Do you live in this society ?{" "}
            </h4>
          </div>

          <input
            className="ml-2"
            type="radio"
            id="Yes"
            name="liveinsociety"
            value="Yes"
          />
          <label className="ml-2">Yes</label>
          <br />
          <input
            className="ml-2"
            type="radio"
            id="No"
            name="liveinsociety"
            value=""
          />
          <label className="ml-2">No</label>
          <br />
        </div>
      )}
      {questionCount == 7 && (
        <div
          className="question  "
          required
          value={communityLeaderInfo.keyPositionInSociety}
          onChange={(e) =>
            setCommunityLeaderInfo({
              ...communityLeaderInfo,
              keyPositionInSociety:Boolean(e.target.value),
            })
          }
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Do you hold any key position in the society ?{" "}
            </h4>
          </div>

          <input
            className="ml-2"
            type="radio"
            name="key"
            id="Yes"
            value="Yes"
          />
          <label className="ml-2">Yes</label>
          <br />
          <input className="ml-2" type="radio" name="key" id="No" value="" />
          <label className="ml-2">No</label>
          <br />
        </div>
      )}

      {questionCount == 8 && (
        <div
          className="question  "
          required
          value={communityLeaderInfo.group}
          onChange={(e) =>
            setCommunityLeaderInfo({
              ...communityLeaderInfo,
              group: e.target.value,
            })
          }
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Are you a member of any social group formed in the society ?{" "}
            </h4>
          </div>

          <p className="italic font-light text-sm">
            Ladies group, sports group, cultural group etc .Enter name of groups
            comma separated
          </p>
          <Input type="texr" placeholder="group name" fullWidth required />
        </div>
      )}
      {questionCount == 9 && (
        <div
          className="question  "
          required
          value={communityLeaderInfo.duration}
          onChange={(e) =>
            setCommunityLeaderInfo({
              ...communityLeaderInfo,
              duration: e.target.value,
            })
          }
        >
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Since when you are living in the society or visiting the society ?{" "}
            </h4>
          </div>

          <p className="italic font-light text-sm">Please mention year.</p>
          <Input type="date" placeholder="dd-mm-yyyy" fullWidth required />
        </div>
      )}
    </div>
  );
};

export default CommunityLeader;
