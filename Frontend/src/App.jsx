import { Router, Routes, Route } from "react-router-dom";
import SignUp from "./todofrontend/pages/SignUp";
import SignIn from "./todofrontend/pages/SignIn";
import NavBar from "./todofrontend/components/NavBar";
import SideBar from "./todofrontend/components/SideBar";
import MainContent from "./todofrontend/components/MainContent";
import MyTask from "./todofrontend/components/MyTask";
import VitalTask from "./todofrontend/components/VitalTask";

function App() {
  return (
    <div className="flex flex-col w-full max-h-screen ">
      <NavBar />
      <div className="flex w-full gap-4 mt-4">
        <SideBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/myTask" element={<MyTask />} />
          <Route path="/vital" element={<VitalTask />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
