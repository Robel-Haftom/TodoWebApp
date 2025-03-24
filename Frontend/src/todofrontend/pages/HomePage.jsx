import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen bg-teal-300">
      <div className=" bg-white p-16 flex flex-col items-center justify-center rounded-xl border border-gray-300 shadow-2xl gap-4">
        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-2xl font-bold">
            Welcome to the <span className="text-teal-300">Todo App</span>
          </h1>
          <h3 className="max-w-[500px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ut
            voluptates iste rerum unde cum! Sequi aperiam amet alias facere
            dolorem nihil, cumque nam accusantium iure sint excepturi molestiae.
            Optio. Nihil, a cumque fugit placeat dolore quo possimus numquam
            blanditiis provident nesciunt similique sint iusto soluta minus in
            eius illo aut! Ad, quia necessitatibus vitae culpa repellendus sequi
            facere quas!
          </h3>
        </div>
        <div className="flex gap-4 items-center mt-2">
          <button
            onClick={() => navigate("/login")}
            className="rounded bg-teal-300 text-white font-semibold px-5 py-2 hover:text-teal-300 hover:bg-white hover:shadow-md border-teal-300 border transition-all cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="rounded bg-teal-300 text-white font-semibold px-5 py-2 hover:text-teal-300 hover:bg-white hover:shadow-md border-teal-300 border transition-all cursor-pointer"
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
