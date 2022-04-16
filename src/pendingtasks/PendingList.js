import axios from "axios";
import React, { useEffect, useState } from "react";


const PendingList = ({ tasks }) => {
  const [nhFormCount, setnhFormCount] = useState("");
  const [piFormCount, setpiFormCount] = useState("");
  const [puFormCount, setpuFormCount] = useState("");
  const [clFormCount, setclFormCount] = useState("");

  const getData = () => {
    axios
      .get(
        `tasks/${localStorage.getItem(
          "property_id"
        )}/neighbourhood/`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setnhFormCount(res.data);
      });
    //place info length
    axios
      .get(
        `tasks/${localStorage.getItem(
          "property_id"
        )}/place-info/`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setpiFormCount(res.data);
      });
    //photo upload info
    axios
      .get(
        `tasks/${localStorage.getItem(
          "property_id"
        )}/photos/`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setpuFormCount(res.data);
      });
    //community leader info
    axios
      .get(
        `tasks/${localStorage.getItem(
          "property_id"
        )}/community-leader/`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setclFormCount(res.data);
      });
  };
  useEffect(() => {
    // neighbourhood length info
    const update = getData();
    return update;
  }, [localStorage.getItem("property_id")]);

  return (
    <div>
      <div className="forms p-2">
        <h2 className="font-bold text-center text-xl my-2">
          Property ID: {localStorage.getItem("property_id")}
        </h2>
        
      </div>
    </div>
  );
};

export default PendingList;
