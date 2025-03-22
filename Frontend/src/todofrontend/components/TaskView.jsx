import { Link } from "react-router-dom"
import { userIcon } from "../assets/assets"
import TaskDescription from "./TaskDescription"

const TaskView = () => {
  return (
     <div className="flex flex-col px-8 py- w-full mt-8 rounded-xl shadow-2xl">
        <div className="w-full flex justify-end p-4">
        <Link to="/">
          <p>Go Back</p>
        </Link>
        </div>
          <TaskDescription/>
      </div>    
  )
}

export default TaskView
