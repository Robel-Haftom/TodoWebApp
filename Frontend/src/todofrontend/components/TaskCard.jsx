import { useNavigate } from "react-router-dom";
import { circle_blue, dots, userIcon, walking_dog } from "../assets/assets";

const TaskCard = ({
  taskId,
  taskTitle,
  taskPriority,
  taskDescription,
  taskStatus,
  TaskCreatedOn,
  taskImage,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/task/${taskId}`)}
      className="flex gap-2 items-start justify-evenly py-1 px-2 border-2 border-gray-300 rounded-xl shadow-lg cursor-pointer"
    >
      <img
        src={circle_blue}
        alt="task-status"
        className="w-[15px] h-[15px] m-1"
      />
      <div className="flex flex-col">
        <div className="flex-1 flex items-start justify-between">
          <div>
            <h1 className="text-xl font-semibold w-50 line-clamp-1">
              {taskTitle}
            </h1>
            <p className=" w-50 line-clamp-4 opacity-75">{taskDescription}</p>
          </div>
          <div className="w-[120px] h-[120px] rounded-lg overflow-hidden self-center m-2 border border-gray-300">
            <img
              src={taskImage}
              alt="task-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex items-center justify-between text-md py-1">
          <p>
            Priority:
            <span className="text-xs text-blue-500"> {taskPriority}</span>
          </p>
          <p>
            Status:<span className="text-xs text-red-500"> {taskStatus}</span>
          </p>
          <p>
            Created on:
            <span className="text-xs opacity-75"> {typeof TaskCreatedOn}</span>
          </p>
        </div>
      </div>
      <img src={dots} alt="task-status" className="w-[15px] h-[15px] m-1" />
    </div>
  );
};

export default TaskCard;
