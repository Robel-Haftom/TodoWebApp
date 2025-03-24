import TaskCard from "./TaskCard";
import TaskDescription from "./TaskDescription";
import { useTaskStore } from "../../../store/tasks";

const MyTask = () => {
  const { tasks, fetchTasks } = useTaskStore();
  return (
    <div className="w-full flex gap-4 rounded-md p-4 shadow-2xl mt-8">
      <div className="flex flex-col gap-2 ">
        <p>My Tasks</p>
        <div className="flex flex-col bg-white items-center shadow-lg rounded-xl gap-4 p-4 ">
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
      <TaskDescription />
    </div>
  );
};

export default MyTask;
