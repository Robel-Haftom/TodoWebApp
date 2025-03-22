import { Router, Routes, Route } from "react-router-dom";
import SignUp from "./todofrontend/pages/SignUp";
import SignIn from "./todofrontend/pages/SignIn";
import NavBar from "./todofrontend/components/NavBar";
import SideBar from "./todofrontend/components/SideBar";
import MainContent from "./todofrontend/components/MainContent";
import MyTask from "./todofrontend/components/MyTask";
import VitalTask from "./todofrontend/components/VitalTask";
import AccountInfo from "./todofrontend/components/AccountInfo";
import ChangePassword from "./todofrontend/components/ChangePassword";
import UpdateInfo from "./todofrontend/components/UpdateInfo";
import TaskView from "./todofrontend/components/TaskView";

function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <NavBar />
      <div className="flex w-full max-h-[650px] gap-4 mt-4">
        <SideBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/myTask" element={<MyTask />} />
          <Route path="/task" element={<TaskView />} />
          <Route path="/vital" element={<VitalTask />} />
          <Route path="/account" element={<AccountInfo />} />
          <Route path="/updateInfo" element={<UpdateInfo />} />
          <Route path="/changePassword" element={<ChangePassword />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
