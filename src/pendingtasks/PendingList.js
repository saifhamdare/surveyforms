import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PendingList = () => {
    const [nhFormCount, setnhFormCount] = useState("");
    const [piFormCount, setpiFormCount] = useState("");
    const [puFormCount, setpuFormCount] = useState("");
    const [clFormCount, setclFormCount] = useState("");
  
    const getData = () => {
        axios
          .get(
            `https://operations.roushik.com/api/tasks/${localStorage.getItem(
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
            `https://operations.roushik.com/api/tasks/${localStorage.getItem(
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
            `https://operations.roushik.com/api/tasks/${localStorage.getItem(
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
            `https://operations.roushik.com/api/tasks/${localStorage.getItem(
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
        <div className='forms p-2'>
                <h2 className='font-bold text-center text-xl my-2' >Property ID: {localStorage.getItem("property_id")}</h2>
            {/* {nhFormCount?.map(item=>(
                <p>{item.id}</p>
            ))} */}
            <div className='form border-2 py-2 rounded-xl border-sky-600  pl-10 my-5 '>
                <h2 className='font-semibold ' >Form ID: {nhFormCount[0]?.id} </h2>
                <p className='font-semibold ' > Surveyor Name: {nhFormCount[0]?.full_name} </p>
                <p className='font-semibold ' > Mobile No : {nhFormCount[0]?.mobile_number}  </p>
            </div>
        </div>
    </div>
  )
}

export default PendingList