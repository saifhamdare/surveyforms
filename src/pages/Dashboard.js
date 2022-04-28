import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className=" grid grid-rows-1 ">
      <div className="container justify-center p-2 mt-5 grid grid-cols-2 gap-4 md:px-10 lg:px-36">
        <Link to={"/todays-task"}>
          <div className="border-2  bg-white border-slate-800 rounded-lg text-center px-5 py-16 font-bold   ">
            Todays's Survey
          </div>
        </Link>
        <Link to={"/history-task"}>
          <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-6 py-16  font-bold  ">
            Task History
          </div>
        </Link>
        <Link to={"/pending-task"}>
          <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-5 py-16 font-bold  ">
            Pending Survey
          </div>
        </Link>
        <div    onClick={() => {
            navigate("/communityleader-form", { replace: true });
          }}>
          <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-1 py-16 font-bold  ">
           Add Channel Partner
          </div>
        </div>
        <Link to={"/searchseller"}>
          <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-3 py-16 font-bold  ">
            Know Your Seller
          </div>
        </Link>
        <Link to={"/dashboard"}>
          <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-4 py-16 font-bold  ">
            Know Your Home
          </div>
        </Link>
        <Link to={"/knowyoursociety-form"}>
          <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-2 py-16 font-bold  ">
            Know Your Society
          </div>
        </Link>
        <Link to={"/searchproperty"}>
          <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-4 py-16 font-bold  ">
            Search Property
          </div>
        </Link>
        <Link to={"/dashboard"}>
          <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-4 py-16 font-bold  ">
            Add Property
          </div>
        </Link>
        <Link to={"/addseller"}>
          <div className="border-2 bg-white border-slate-800 rounded-lg text-center px-4 py-16 font-bold  ">
            Add Seller
          </div>
        </Link>

      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
