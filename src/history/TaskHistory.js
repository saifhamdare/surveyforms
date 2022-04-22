import moment from "moment";
import React from "react";

const TaskHistory = ({ tasks }) => {
  return (
    <div>
      <div className="p-2">
        <div className="Title mt-10 flex justify-center text-sky-400 font-bold text-2xl">
          Tasks History
        </div>
        <div className="lg:grid-cols-8  sm:grid-cols-12">
          {tasks
            ?.filter(
              (task) => task.type === "survey" && task.status === "C"
            )
            .map((task) => (
              <div>
                <div className="border-2 bg-white py-2 rounded-xl border-sky-600  px-8 my-5">
                  <div className="flex justify-between">
                    <div className="">
                      <h6 className="font-bold text-lg">{task.society_name}</h6>
                      <h6 className="font-bold text-base text-violet-700 uppercase ">
                        {task.type}
                      </h6>
                    </div>
                    <div className="">
                      <p className="text-green-500 font-bold text-lg">
                        Completed
                      </p>
                      <p className="font-semibold">
                        On: {moment(task.updated_at).format("Do MMM  YY")}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium"> {task.address} </p>
                  <p className="font-semibold text-sm">
                    Property ID: {task.property_id}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div>
          {tasks
            ?.filter(
              (task) =>
                task.type === "know_your_society" && task.status === "C"
            )
            .map((task) => (
              <div>
                <div className="border-2 bg-white py-2 rounded-xl border-sky-600  px-8 my-5">
                  <div className="flex justify-between">
                    <div className="">
                      <h6 className="font-bold text-lg">{task.society_name}</h6>
                      <h6 className="font-bold text-base text-violet-700 uppercase ">
                        {task.type}
                      </h6>
                    </div>
                    <div className="">
                      <p className="text-green-500 font-bold text-lg">
                        Completed
                      </p>
                      <p className="font-semibold">
                        On: {moment(task.updated_at).format("Do MMM  YY")}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium"> {task.address} </p>
                  <p className="font-semibold text-sm">
                    Property ID: {task.property_id}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div>
          {tasks
            ?.filter(
              (task) =>
                task.type === "know_your_seller" && task.status === "C"
            )
            .map((task) => (
              <div>
                <div className="border-2 bg-white py-2 rounded-xl border-sky-600  px-8 my-5">
                  <div className="flex justify-between">
                    <div className="">
                      <h6 className="font-bold text-lg">{task.society_name}</h6>
                      <h6 className="font-bold text-base text-violet-700 uppercase ">
                        {task.type}
                      </h6>
                    </div>
                    <div className="">
                      <p className="text-green-500 font-bold text-lg">
                        Completed
                      </p>
                      <p className="font-semibold">
                        On: {moment(task.updated_at).format("Do MMM  YY")}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium"> {task.address} </p>
                  <p className="font-semibold text-sm">
                    Property ID: {task.property_id}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div>
          {tasks
            ?.filter(
              (task) =>
                task.type === "know_your_home" && task.status === "C"
            )
            .map((task) => (
              <div>
                <div className="border-2 bg-white py-2 rounded-xl border-sky-600  px-8 my-5">
                  <div className="flex justify-between">
                    <div className="">
                      <h6 className="font-bold text-lg">{task.society_name}</h6>
                      <h6 className="font-bold text-base text-violet-700 uppercase ">
                        {task.type}
                      </h6>
                    </div>
                    <div className="">
                      <p className="text-green-500 font-bold text-lg">
                        Completed
                      </p>
                      <p className="font-semibold">
                        On: {moment(task.updated_at).format("Do MMM  YY")}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium"> {task.address} </p>
                  <p className="font-semibold text-sm">
                    Property ID: {task.property_id}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div>
          {tasks
            ?.filter(
              (task) =>
                task.type === "home_inspection" && task.status === "C"
            )
            .map((task) => (
              <div>
                <div className="border-2 bg-white py-2 rounded-xl border-sky-600  px-8 my-5">
                  <div className="flex justify-between">
                    <div className="">
                      <h6 className="font-bold text-lg">{task.society_name}</h6>
                      <h6 className="font-bold text-base text-violet-700 uppercase ">
                        {task.type}
                      </h6>
                    </div>
                    <div className="">
                      <p className="text-green-500 font-bold text-lg">
                        Completed
                      </p>
                      <p className="font-semibold">
                        On: {moment(task.updated_at).format("Do MMM  YY")}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium"> {task.address} </p>
                  <p className="font-semibold text-sm">
                    Property ID: {task.property_id}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskHistory;
