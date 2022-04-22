import axios from "axios";
import React, { useEffect, useState } from "react";

const EditFormList = () => {
  const [nhForms, setnhForms] = useState("");
  const [piForms, setpiForms] = useState("");
  const [puForms, setpuForms] = useState("");
  const [clForms, setclForms] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  
  const getData = () => {
    axios
      .get(`tasks/${localStorage.getItem("property_id")}/neighbourhood/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setnhForms(res.data);
        setIsLoaded(true);
      });
    //place info length
    axios
      .get(`tasks/${localStorage.getItem("property_id")}/place-info/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setpiForms(res.data);
        setIsLoaded(true);
      });
    //photo upload info
    axios
      .get(`tasks/${localStorage.getItem("property_id")}/photos/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setpuForms(res.data);
      });
    //community leader info
    axios
      .get(`tasks/${localStorage.getItem("property_id")}/community-leader/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setclForms(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, [performance]);
  return (
    <div className="page">
      <div className="container p-2  ">
        {isLoaded ? (
          nhForms.map((nhForm) => (
            <div
              key={nhForm.id}
              className="item border-2 border-sky-400 p-2 my-2 rounded-lg"
            >
              <p>Neibourhood form</p>
              <h2 className="font-bold">Form id : {nhForm.id}</h2>
              <p className="font-semibold">Name : {nhForm.full_name}</p>
              <p className="font-semibold">
                Mobile no.: {nhForm.mobile_number}
              </p>
            </div>
          ))
        ) : (
          <p>reload Page</p>
        )}
      </div>
      <div className="container p-2  ">
        {isLoaded ? (
          (piForms) => (
            <div className="item border-2 border-sky-400 p-2 my-2 rounded-lg">
              <p className="font-semibold">Task : {piForms.task}</p>
              <p className="font-semibold">
                Mobile no.: {piForms.o}
              </p>
            </div>
          )
        ) : (
          <p>reload Page</p>
        )}
      </div>
      <div className="container p-2  ">
        {isLoaded ? (
          clForms.map((clForm) => (
            <div
              key={clForm.id}
              className="item border-2 border-sky-400 p-2 my-2 rounded-lg"
            >
                 <p>Community Leader form</p>
              <p className="font-semibold">Name : {clForm.full_name}</p>
              <p className="font-semibold">
                Mobile no.: {clForm.mobile_number}
              </p>
            </div>
          ))
        ) : (
          <p>reload Page</p>
        )}
      </div>
    </div>
  );
};

export default EditFormList;
