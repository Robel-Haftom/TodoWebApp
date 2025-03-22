import { useNavigate } from "react-router-dom";
import { circle_blue, dots, userIcon, walking_dog } from "../assets/assets";

const TaskCard = () => {

  const navigate = useNavigate()
  return (
    <div onClick={() =>navigate("/task")} className="flex gap-2 items-start justify-evenly py-1 px-2 border-2 border-gray-300 rounded-xl shadow-lg cursor-pointer">
      <img src={circle_blue} alt="task-status" className="w-[15px] h-[15px] m-1" />
      <div className="flex flex-col">
        <div className="flex-1 flex items-start justify-between">
          <div>
            <h1 className="text-xl font-semibold">The task title goes here</h1>
            <p className=" w-50 line-clamp-4 opacity-75">The long text of the task description goes here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae a eveniet quod, nemo maxime aspernatur aut quibusdam. Aliquam culpa quos dolores tenetur ducimus eum laudantium earum sequi? Quia, commodi iusto!
            Aliquam provident illo, molestiae eligendi aut quae, dignissimos quas deserunt id maiores, numquam nam neque? Necessitatibus beatae ullam eum exercitationem cumque autem repellat, mollitia tempore, impedit quo, incidunt quam dolore.</p>
          </div>
          <div className="w-[120px] h-[120px] rounded-lg overflow-hidden self-center m-2">
            <img src={walking_dog} alt="task-status" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex items-center justify-between text-md py-1">
          <p >Priority:<span className="text-xs text-blue-500"> High</span></p>
          <p>Status:<span className="text-xs text-red-500"> Pending</span></p>
          <p>Created at:<span className="text-xs opacity-75"> 21/03/2025</span></p>
        </div>
      </div>
      <img src={dots} alt="task-status" className="w-[15px] h-[15px] m-1" />
    </div>
  );
};

export default TaskCard;
