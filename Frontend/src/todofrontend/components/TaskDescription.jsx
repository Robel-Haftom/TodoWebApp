import { userIcon } from "../assets/assets";

const TaskDescription = () => {
  return (
    <div className="flex flex-col gap-2 items-start justify-evenly py-1 px-2 rounded-xl">
      <div className="flex items-end gap-4 ">
        <div className="w-[150px] rounded-md overflow-hidden bg-red-400">
          <img
            src={userIcon}
            alt="task-status"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-xl font-semibold">The task title goes here</h1>
          <p>Priority:High</p>
          <p>Status:Pending</p>
          <p>Created at: 21/03/2025</p>
        </div>
      </div>
      <p>
        <span className="font-bold">Task Title:</span> Task Title here
      </p>
      <p>
        <span className="font-bold"> Objective: </span>the objective of the task
        is here
      </p>
      <p className="max-w-[500px]">
        <span className="font-bold">Task Description:</span> Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Cum molestias quo atque, placeat
        omnis tempora, dolore autem, blanditiis dolores itaque incidunt
        reprehenderit temporibus. Doloribus distinctio aperiam pariatur ipsum
        ipsa non soluta sed, voluptas adipisci corrupti, eum facilis. Ipsum
        dolorum alias vel eius nostrum quaerat veritatis similique explicabo
        doloremque molestias perferendis rem, blanditiis maiores corrupti,
        officia dicta? Accusamus voluptatibus hic, ex veritatis excepturi
        molestias fugiat sed quasi iure possimus sint aspernatur cum numquam
        beatae, magnam debitis ut omnis esse soluta illum reiciendis aliquid
        maiores quia id! Ducimus consectetur dicta obcaecati officiis error
        perspiciatis voluptate quos, eligendi saepe facere hic totam
        necessitatibus!
      </p>
      <p>
        <span className="font-bold">Additional Notes:</span>
        <ul className="list-disc">
          <li className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, odio.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, odio.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, odio.
          </li>
        </ul>
      </p>
      <p>
        <span className="font-bold">Task Deadline:</span>End of Day
      </p>
      <div className="flex w-full items-center justify-end gap-4 py-2">
        <button>
          <img src={userIcon} alt="delete-icon" className="w-[20px]" />
        </button>
        <button>
          <img src={userIcon} alt="delete-icon" className="w-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default TaskDescription;
