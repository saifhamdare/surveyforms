import { Input } from "@mui/material";
import React from "react";

const AddSeller = ({addsellerDetail, questionCount, setAddSellerDetail}) => {

  return (
    <div className="">
       {questionCount == 0 && (
              <Input
                className="" fullWidth required
                placeholder="John Wick"
                value={addsellerDetail.fullname}
                onChange={(e) => setAddSellerDetail({...addsellerDetail ,fullname: e.target.value})}
                
              />
            )}
            {questionCount == 1 && (
              <Input className="" fullWidth required placeholder="98745621" 
              value={addsellerDetail.contactno}
              onChange={(e) => setAddSellerDetail({...addsellerDetail ,contactno: e.target.value})}
              
              />
            )}
            {questionCount == 2 && (
              <Input
                className=""fullWidth required
                placeholder="johnwick123@gmail.com"
                type="email"
                value={addsellerDetail.email}
                onChange={(e) => setAddSellerDetail({...addsellerDetail ,email: e.target.value})}
                
              />
            )}
            {questionCount == 3 && (
              <Input
                className=""fullWidth required
                placeholder="102 B wing shanti Apartment Gandhi Nagar borivali 400009"
                value={addsellerDetail.address}
                onChange={(e) => setAddSellerDetail({...addsellerDetail ,address: e.target.value})}
                
              />
            )}
            {questionCount == 4 && (
              <div className="" 
              value={addsellerDetail.gender}
                onChange={(e) => setAddSellerDetail({...addsellerDetail ,gender: e.target.value})}
                
              >
                <input
                  className="ml-2"
                  type="radio"
                  name="gender"
                  value="M"
                />
                <label className="ml-2">Male</label> <br />
                <input
                  className="ml-2"
                  type="radio"
                  name="gender"
                  value="F"
                />
                <label className="ml-2">Female</label> <br />
                <input
                  className="ml-2"
                  type="radio"
                  name="gender"
                  value="O"
                />
                <label className="ml-2">Other</label>
              </div>
            )}
            {questionCount == 5 && (
              <Input className="" fullWidth required placeholder="eg 50" 
              value={addsellerDetail.age}
              onChange={(e) => setAddSellerDetail({...addsellerDetail ,age: e.target.value})}
              
              />
            )}
    </div>
  );
};

export default AddSeller;

// <div>
// <div className="quesion border-2 border-slate-500 p-3 rounded-lg" >
// <h2 className="font-semibold" >Seller's Name ?</h2>
// <Input placeholder="Enter Full Name" fullWidth />

// </div>
// </div>
