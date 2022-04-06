import React from "react";
import { Link } from "react-router-dom";

const TodaysTask = ({tasks,handleTodaysTask}) => {

 

  return (
    <div className="">
      <div className="p-2">
        <div className="Title mt-10 flex justify-center text-sky-400 font-bold text-2xl">
          Todays Tasks
        </div>
        <div>
          {tasks?.filter(task=>task.status==='N').map(task => (
           
            <Link key={task.property_id} onClick={()=>{handleTodaysTask(task.property_id)}} to="/form-list">
              <div className="border-2 bg-white py-2 rounded-xl border-sky-600  pl-10 my-5">
                <h6 className="font-bold text-lg">{task.society_name}</h6>
                <p className="font-medium">
                  {task.area} <span>{task.pin_code}</span>
                </p>
                <p>Property ID: {task.property_id}</p>
              </div>
            </Link>
          ))}
        </div>
  
      </div>
    </div>
  );
};

export default TodaysTask;
