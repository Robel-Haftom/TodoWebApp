import TaskDescription from "./TaskDescription";
import TaskCard from "./TaskCard";

const VitalTask = () => {
  return (
    <div className="w-full flex gap-4 rounded-md p-4 shadow-2xl mt-8">
      <div className="flex flex-col gap-2">
        <p>Vital Tasks</p>
        <div className="flex flex-col bg-white items-center rounded-xl shadow-lg gap-4 p-4 ">
          <TaskCard />
          <TaskCard />
        </div>
      </div>
          <TaskDescription />
    </div>
  );
};

export default VitalTask;
