import { pending_tasks, userIcon } from "../assets/assets";
import TaskCard from "./TaskCard";

const MainContent = () => {
  return (
    <div className="p-4 w-full">
      <div>
        <h1 className="text-2xl font-semibold p-2">Welcome back, User Name</h1>
      </div>
      <div className="flex gap-8 shadow-2xl border border-gray-200 px-8 py-4 rounded-md">
        <div className="flex flex-col gap-2 border-gray-400 shadow-2xl p-2 rounded-lg">
          <div className="border-b-4  border-gray-200 ">
            <div className="flex items-center justify-between rounded-md px-2">
              <div className="flex items-center">
                <img src={pending_tasks} alt="todo-icon" className="w-[30px]" />
                <p className="font-bold px-1 text-teal-300">Todo App</p>
              </div>
              <p className="font-bold">
                <span className="text-2xl font-bold text-teal-300">+</span> Add Task
              </p>
            </div>
            <p className="font-semibold px-3">20 June . <span className="opacity-75">Today</span></p>
            <div className="flex flex-col bg-white items-center  gap-4 p-4 rounded-md">
              <TaskCard />
              <TaskCard />
            </div>
          </div>
          <div className="p-4 rounded-md">
            <TaskCard />
          </div>
        </div>
        <div className="flex flex-col gap-2  border-gray-400 shadow-2xl p-2 rounded-lg">
          <div className="border-b-4  border-gray-200 p-4">
            <div className="flex flex-col border-2 border-gray-500 rounded-xl shadow-lg px-2 py-2 ">
              <div className="flex items-center">
                <img src={userIcon} alt="todo-icon" className="w-[30px]" />
                <p>Task Status</p>
              </div>
              <div className="flex items-center justify-evenly">
                <div>
                  <img
                    src={userIcon}
                    alt="status-1"
                    className="w-[60px] h-[60]"
                  />
                  <p>pending</p>
                </div>
                <div>
                  <img
                    src={userIcon}
                    alt="status-1"
                    className="w-[60px] h-[60]"
                  />
                  <p>pending</p>
                </div>
                <div>
                  <img
                    src={userIcon}
                    alt="status-1"
                    className="w-[60px] h-[60]"
                  />
                  <p>pending</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <TaskCard />
            <TaskCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
