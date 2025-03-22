import React from "react";
import { userIcon } from "../assets/assets";

const TaskCard = () => {
  return (
    <div className="flex gap-2 items-start justify-evenly py-1 px-2 border-2 border-gray-500 rounded-xl shadow-lg">
      <img src={userIcon} alt="task-status" className="w-[15px] h-[15px]" />
      <div className="flex flex-col">
        <div className="flex ">
          <div>
            <h1 className="text-xl font-semibold">The task title goes here</h1>
            <p>The long text of the task description goes here</p>
          </div>
          <div>
            <img src={userIcon} alt="task-status" className="w-[100px]" />
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <p>Priority:High</p>
          <p>Status:Pending</p>
          <p>Created at: 21/03/2025</p>
        </div>
      </div>
      <img src={userIcon} alt="task-status" className="w-[15px] h-[15px]" />
    </div>
  );
};

export default TaskCard;
