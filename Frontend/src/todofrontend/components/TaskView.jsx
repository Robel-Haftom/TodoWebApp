import { Link, useParams } from "react-router-dom";
import TaskDescription from "./TaskDescription";
import { useTaskStore } from "../../../store/tasks";

const TaskView = () => {
  const { id } = useParams();
  const { tasks } = useTaskStore();
  const taskToDisplay = tasks.filter((task) => task._id === id);
  const task = taskToDisplay[0];
  return (
    <div className="flex flex-col px-8 py- w-full mt-8 rounded-xl shadow-2xl">
      <div className="w-full flex justify-end p-4">
        <Link to="/">
          <p>Go Back</p>
        </Link>
      </div>
      <TaskDescription
        taskId={task._id}
        taskTitle={task.title}
        TaskDescription={task.description}
        taskPriority={task.priority}
        taskStatus={task.status}
        taskDueDate={task.dueDate}
        taskCreatedAt={task.createdAt}
        taskImage={task.image}
      />
    </div>
  );
};

export default TaskView;
