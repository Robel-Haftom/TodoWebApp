import { alert_white, delete_icon, edit_2 } from "../assets/assets";

const TaskDescription = ({
  taskId,
  taskTitle,
  TaskDescription,
  taskPriority,
  taskStatus,
  taskDueDate,
  taskCreatedAt,
  taskImage,
}) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-evenly py-4 px-6 rounded-xl shadow-2xl overflow-y-scroll">
      <div className="flex items-end gap-4 ">
        <div className="w-[150px] rounded-md overflow-hidden bg-teal-300">
          <img
            src={taskImage}
            alt="task-status"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-xl font-semibold">{taskTitle}</h1>
          <p>Priority: {taskPriority}</p>
          <p>Status: {taskStatus}</p>
          <p>Created at: {taskCreatedAt}</p>
        </div>
      </div>
      <p>
        <span className="font-bold">Task Title:</span> {taskTitle}
      </p>
      <p className="max-w-[700px]">
        <span className="font-bold">Task Description:</span> {TaskDescription}{" "}
      </p>
      <p>
        <span className="font-bold">Task Deadline:</span>End of Day:{" "}
        {taskDueDate}
      </p>
      <div className="flex w-full items-center justify-end gap-4 py-2">
        <button className="bg-teal-300 p-2 rounded-md cursor-pointer hover:scale-110 ease-in-out transition-all">
          <img src={delete_icon} alt="delete-icon" className="w-[20px]" />
        </button>
        <button className="bg-teal-300 p-2 rounded-md cursor-pointer hover:scale-110 ease-in-out transition-all">
          <img src={edit_2} alt="delete-icon" className="w-[20px]" />
        </button>
        <button className="bg-teal-300 p-2 rounded-md cursor-pointer hover:scale-110 ease-in-out transition-all">
          <img src={alert_white} alt="delete-icon" className="w-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default TaskDescription;
