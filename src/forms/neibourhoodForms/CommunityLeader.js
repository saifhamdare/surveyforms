import { Input } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CommunityLeader = () => {
  const [clfullName, setclFullName] = useState("");
  const [clmobileNo, setclMobileNo] = useState("");
  const [clemailId, setclEmailId] = useState("");
  const [clgender, setclGender] = useState("");
  const [clprofession, setclProfession] = useState("");
  const [clliveInSociety, setclLiveInSociety] = useState("");
  const [clgroup, setclGroup] = useState("");
  const [clkeyPositionInSociety, setclKeyPositionInSociety] = useState("");
  const [clduration, setclDuration] = useState("");

  const navigate = useNavigate();
  const successNotify = () =>
    toast.success("form filled Successfully", {
      position: "bottom-center",
    });
  const failedNotify = () =>
    toast.error("something went wrong... try again!", {
      position: "bottom-center",
    });
  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      full_name: clfullName,
      mobile_number: clmobileNo,
      gender: clgender,
      profession: clprofession,
      email: clemailId,
      society_resident: clliveInSociety,
      society_key_member: clkeyPositionInSociety,
      member_of_group: clgroup,
      visiting_society_since: clduration,
    };
    const data = {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    axios
      .post(
        `https://operations.roushik.com/api/tasks/${localStorage.getItem(
          "property_id"
        )}/community-leader/`,
        body,
        { headers: data }
      )
      .then((res) => {
        successNotify();
        navigate("/form-list", { replace: true });
        const status = { status: "P" };
        axios.patch(`tasks/${localStorage.getItem("property_id")}/`, status, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
      })
      .catch((err) => failedNotify());
  };

  return (
    <div className="">
      <ToastContainer autoClose={1500} />
      <div className="form-container  m-1 mt-5  ">
        <h2 className="text-lg font-bold text-sky-500  px-1 py-6">
          Community Leader
        </h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          action=""
        >
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Full Name </h4>
            <Input
              placeholder="eg. ramesh Kumar"
              onChange={(e) => setclFullName(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Mobile No. </h4>
            <Input
              placeholder="eg. 9876543211"
              onChange={(e) => setclMobileNo(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Email id </h4>
            <Input
              placeholder="eg. rameshk@gmail.com"
              onChange={(e) => setclEmailId(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4"
            required
            onChange={(e) => setclGender(e.target.value)}
          >
            <h4 className="font-semibold text-lg">Gender </h4>
            <input type="radio" id="Male" name="gender" value="M" />
            <label>Male</label>
            <br />
            <input type="radio" id="Female" name="gender" value="F" />
            <label>Female</label>
            <br />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            required
            onChange={(e) => setclProfession(e.target.value)}
          >
            <h4 className="font-semibold text-lg">Profession : </h4>
            <input
              type="radio"
              id="IT Professional"
              name="profession"
              value="IT Professional"
            />
            <label>IT Professional</label>
            <br />
            <input type="radio" id="Banker" name="profession" value="Banker" />
            <label>Banker</label>
            <br />
            <input
              type="radio"
              id="Entertainment Professional"
              value="Entertainment Professional"
              name="profession"
            />
            <label>Entertainment Professional</label>
            <br />
            <input
              type="radio"
              id="Other Professional"
              value="Other Professional"
              name="profession"
            />
            <label>Other Professional</label>
            <br />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            required
            onChange={(e) => setclLiveInSociety(Boolean(e.target.value))}
          >
            <h4 className="font-semibold text-lg">
              Do you live in this society ?{" "}
            </h4>
            <input type="radio" id="Yes" name="liveinsociety" value="Yes" />
            <label>Yes</label>
            <br />
            <input type="radio" id="No" name="liveinsociety" value="" />
            <label>No</label>
            <br />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            required
            onChange={(e) => setclKeyPositionInSociety(Boolean(e.target.value))}
          >
            <h4 className="font-semibold text-lg">
              Do you hold any key position in the society ?{" "}
            </h4>
            <input type="radio" name="key" id="Yes" value="Yes" />
            <label>Yes</label>
            <br />
            <input type="radio" name="key" id="No" value="" />
            <label>No</label>
            <br />
          </div>

          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            required
            onChange={(e) => setclGroup(e.target.value)}
          >
            <h4 className="font-semibold text-lg">
              Are you a member of any social group formed in the society ?{" "}
            </h4>
            <p className="italic font-light text-sm">
              Ladies group, sports group, cultural group etc .Enter name of
              groups comma separated
            </p>
            <Input type="texr" placeholder="group name" fullWidth required />
          </div>
          <div
            className="question bg-white border-2 border-slate-400 rounded-lg mt-2 p-4 "
            required
            onChange={(e) => setclDuration(e.target.value)}
          >
            <h4 className="font-semibold text-lg">
              Since when you are living in the society or visiting the society ?{" "}
            </h4>
            <p className="italic font-light text-sm">Please mention year.</p>
            <Input type="date" placeholder="dd-mm-yyyy" fullWidth required />
          </div>
       
             <div className="flex justify-around">
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommunityLeader;
