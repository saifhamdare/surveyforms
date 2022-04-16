import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="">
      <div className="container justify-center p-1 mt-5 grid grid-rows-2 grid-flow-col gap-4">
        <Link to={"/todays-task"}>
          <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-7 py-16 font-bold   ">
            Todays's Tasks
          </div>
        </Link>
        <Link to={"/history-task"}>
          <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-6 py-16  font-bold  ">
            Task History
          </div>
        </Link>
        <Link to={"/pending-task"}>
          <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-5 py-16 font-bold  ">
            Pending Tasks
          </div>
        </Link>
        <Link to={"/dashboard"}>
          <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-4 py-16 font-bold  ">
            Community Leader
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
