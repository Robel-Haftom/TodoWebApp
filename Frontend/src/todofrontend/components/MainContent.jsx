import { useNavigate } from "react-router-dom";
import {
  checkmark,
  circle_blue,
  circle_green,
  circle_red,
  pending_tasks,
} from "../assets/assets";
import TaskCard from "./TaskCard";
import { useTaskStore } from "../../../store/tasks";
import { useEffect } from "react";

const MainContent = () => {
  const navigate = useNavigate();

  const { tasks, fetchTasks } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="py-4 px-2 w-full">
      <div>
        <h1 className="text-2xl font-semibold p-2">Welcome back, User Name</h1>
      </div>
      <div className="flex gap-8 shadow-2xl border border-gray-200 px-8 py-4 rounded-md">
        <div className="border-gray-400 shadow-2xl px-8 py-2 rounded-lg min-w-11/20">
          <div className="border-b-4  border-gray-200">
            <div className="flex items-center justify-between rounded-md px-2">
              <div className="flex items-center">
                <img src={pending_tasks} alt="todo-icon" className="w-[30px]" />
                <p className="font-bold px-1 text-teal-300">Todo App</p>
              </div>
              <p
                className="font-bold cursor-pointer"
                onClick={() => navigate("/createTask")}
              >
                <span className="text-2xl font-bold text-teal-300">+</span> Add
                Task
              </p>
            </div>
            <p className="font-semibold px-3">
              20 June . <span className="opacity-75">Today</span>
            </p>
            <div className="max-h-[600px] flex flex-col bg-white items-center  gap-4 p-4 rounded-md  overflow-y-auto">
              {tasks.map((task) => (
                <TaskCard
                  key={task._id}
                  taskTitle={task.title}
                  taskDescription={task.description}
                  taskStatus={task.status}
                  taskPriority={task.priority}
                  TaskCreatedOn={String(task.createdAt)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2  border-gray-400 shadow-2xl p-2 rounded-lg px-8 py-2 w-[1/3]">
          <div className="border-b-4  border-gray-200 p-4">
            <div className="flex flex-col border-2 border-gray-500 rounded-xl shadow-lg px-2 py-2 gap-2">
              <div className="flex items-center gap-2">
                <img src={checkmark} alt="todo-icon" className="w-[30px]" />
                <p className="font-bold px-1 text-teal-300">Task Status</p>
              </div>
              <div className="flex items-center justify-evenly px-2 py-4">
                <div>
                  <img
                    src={circle_green}
                    alt="status-1"
                    className="w-[60px] h-[60]"
                  />
                  <p>Completed</p>
                </div>
                <div>
                  <img
                    src={circle_blue}
                    alt="status-1"
                    className="w-[60px] h-[60]"
                  />
                  <p>Inprogress</p>
                </div>
                <div>
                  <img
                    src={circle_red}
                    alt="status-1"
                    className="w-[60px] h-[60]"
                  />
                  <p>Not started</p>
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
