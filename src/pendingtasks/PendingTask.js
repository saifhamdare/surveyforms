
import React from "react";
import { Link } from "react-router-dom";

const PendingTask = ({ tasks, handlePendingTask }) => {

  return (
    <div>
      <div className="p-2">
        <div className="Title mt-10 flex justify-center text-sky-400 font-bold text-2xl">
          Pending Tasks
        </div>
          <div className="lg:grid-cols-8  sm:grid-cols-12">
          {tasks?.filter(task=>task.type==='survey' && task.status==='P').map(task => (
           
            <Link key={task.property_id} onClick={()=>{handlePendingTask(task.task_id)}} to="/form-list">
              <div className="border-2 bg-white py-2 rounded-xl border-sky-600  px-6 my-5">
                <div className="flex justify-between">
                <h6 className="font-bold text-lg">{task.society_name}</h6>
                <h6 className="font-bold text-base text-violet-700 uppercase " >{task.type}</h6>
                </div>
                <p className="font-medium"> {task.address} </p>
                <p className="font-semibold text-sm">Property ID: {task.property}</p>
              </div>
            </Link>
          ))}
        </div>
        <div>
          {tasks?.filter(task=>task.type==='know_your_society' && task.status==='P').map(task => (
           
            <Link key={task.property_id} onClick={()=>{handlePendingTask(task.task_id)}} to="/knowyoursociety-form">
              <div className="border-2 bg-white py-2 rounded-xl border-sky-600  px-6 my-5">
                <div className="flex justify-between">
                <h6 className="font-bold text-lg">{task.society_name}</h6>
                <h6 className="font-bold text-base text-violet-700 uppercase " >{task.type}</h6>
                </div>
                <p className="font-medium"> {task.address} </p>
                <p className="font-semibold text-sm">Property ID: {task.property}</p>
              </div>
            </Link>
          ))}
        </div>
        <div>
          {tasks?.filter(task=>task.type==='know_your_seller' && task.status==='P').map(task => (
           
            <Link key={task.property_id} onClick={()=>{handlePendingTask(task.task_id)}} to="/sellerinfo-form">
              <div className="border-2 bg-white py-2 rounded-xl border-sky-600  px-6 my-5">
                <div className="flex justify-between">
                <h6 className="font-bold text-lg">{task.society_name}</h6>
                <h6 className="font-bold text-base text-violet-700 uppercase " >{task.type}</h6>
                </div>
                <p className="font-medium"> {task.address} </p>
                <p className="font-semibold text-sm">Property ID: {task.property}</p>
              </div>
            </Link>
          ))}
        </div>
        <div>
          {tasks?.filter(task=>task.type==='know_your_home' && task.status==='P').map(task => (
           
            <Link key={task.property_id} onClick={()=>{handlePendingTask(task.task_id)}} to="/homeinfo-form">
              <div className="border-2 bg-white py-2 rounded-xl border-sky-600  px-6 my-5">
                <div className="flex justify-between">
                <h6 className="font-bold text-lg">{task.society_name}</h6>
                <h6 className="font-bold text-base text-violet-700 uppercase " >{task.type}</h6>
                </div>
                <p className="font-medium"> {task.address} </p>
                <p className="font-semibold text-sm">Property ID: {task.property}</p>
              </div>
            </Link>
          ))}
        </div>
        <div>
          {tasks?.filter(task=>task.type==='home_inspection' && task.status==='P').map(task => (
           
            <Link key={task.property_id} onClick={()=>{handlePendingTask(task.task_id)}} to="/homeinspection-form">
              <div className="border-2 bg-white py-2 rounded-xl border-sky-600  px-6 my-5">
                <div className="flex justify-between">
                <h6 className="font-bold text-lg">{task.society_name}</h6>
                <h6 className="font-bold text-base text-violet-700 uppercase " >{task.type}</h6>
                </div>
                <p className="font-medium"> {task.address} </p>
                <p className="font-semibold text-sm">Property ID: {task.property}</p>
              </div>
            </Link>
          ))}
        </div>
     
      </div>
    </div>
  );
};

export default PendingTask;
