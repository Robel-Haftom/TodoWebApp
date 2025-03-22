import TaskCard from "./TaskCard";
import TaskDescription from "./TaskDescription";

const MyTask = () => {
  return (
    <div className="w-full flex gap-4 rounded-md p-4 shadow-2xl mt-8">
      <div className="flex flex-col gap-2 shadow-2xl px-4">
        <p>My Tasks</p>
        <div className="flex flex-col bg-white items-center shadow-xl rounded-xl gap-4 p-4 ">
          <TaskCard />
          <TaskCard />
        </div>
      </div>
      <TaskDescription />
    </div>
  );
};

export default MyTask;
