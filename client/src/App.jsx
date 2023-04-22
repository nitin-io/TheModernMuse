import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/auth/Signup";
import Write from "./components/pages/User/Write";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/write" element={<Write />} />
    </Routes>
  );
}

export default App;
