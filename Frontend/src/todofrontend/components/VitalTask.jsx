import TaskDescription from "./TaskDescription";
import TaskCard from "./TaskCard";

const VitalTask = () => {
  return (
    <div className="flex gap-8 rounded-md p-4 shadow-2xl">
      <div className="flex flex-col gap-2">
        <p>Vital Tasks</p>
        <div className="flex flex-col bg-white items-center rounded-xl shadow-lg gap-4 p-4 ">
          <TaskCard />
          <TaskCard />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col rounded-xl shadow-lg px-4 py-2 ">
          <TaskDescription />
        </div>
      </div>
    </div>
  );
};

export default VitalTask;
