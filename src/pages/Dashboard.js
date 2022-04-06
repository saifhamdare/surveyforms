
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  

  return (
    <div>
      <div className="container justify-center p-1 mt-5 grid grid-rows-2 grid-flow-col gap-4">
        <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-7 py-16 font-bold   ">
          <Link to={"/todays-task"} >Todays's Tasks</Link>
        </div>
        <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-6 py-16  font-bold  ">
          <Link to={"/history-task"}>Task History</Link>
        </div>
        <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-5 py-16 font-bold  ">
          <Link to={"/pending-task"}>Pending Tasks</Link>
        </div>
        <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-4 py-16 font-bold  ">
          <Link to={"/"}>Community Leader</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
