import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./todofrontend/pages/SignUp";
import SignIn from "./todofrontend/pages/SignIn";
import ProfilePage from "./todofrontend/pages/ProfilePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile/*" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
