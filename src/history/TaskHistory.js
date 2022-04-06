import moment from "moment";
import React from "react";

const TaskHistory = ({ tasks }) => {
  return (
    <div>
      <div className="p-2">
        <div className="Title mt-10 flex justify-center text-sky-400 font-bold text-2xl">
          Tasks History
        </div>
        <div>
          {tasks
            ?.filter((task) => task.status === "C")
            .map((task) => (
              <div key={task.property_id}>
                <div className="border-2 bg-white py-2 rounded-xl border-sky-600  pl-5 my-5 flex">
                  <div>
                    <h6 className="font-bold text-lg">{task.society_name}</h6>
                    <p className="font-medium">
                      {task.area} <span>{task.pin_code}</span>
                    </p>
                    <p>Property ID: {task.property_id}</p>
                  </div>
                  <div className="">
                    <p className="text-green-500 font-medium">Completed</p>
                    <p>On: {moment(task.updated_at).format("Do MMM  YY")}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskHistory;
