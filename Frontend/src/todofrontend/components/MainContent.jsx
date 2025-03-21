import { userIcon } from "../assets/assets";
import TaskCard from "./TaskCard";

const MainContent = () => {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-2xl font-semibold p-2">Welcome back, User Name</h1>
      </div>
      <div className="flex gap-8 shadow-2xl border border-gray-500 px-8 py-3  rounded-md">
        <div className="flex flex-col gap-2 border-gray-400 shadow-2xl p-2 rounded-lg">
          <div className="border-b-4  border-gray-200 ">
            <div className="flex items-center justify-between rounded-md ">
              <div className="flex items-center">
                <img src={userIcon} alt="todo-icon" className="w-[30px]" />
                <p>Todo App</p>
              </div>
              <p>
                <span className="text-2xl font-bold">+</span> Add Task
              </p>
            </div>
            <p>20 June . Today</p>
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
