import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/auth/Signup";
import Write from "./components/pages/User/Write";
import UserRoutes from "./routes/UserRoutes";
import Profile from "./components/pages/User/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user" element={<UserRoutes />}>
        <Route path="write" element={<Write />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route
        path="/*"
        element={
          <>
            <h1>404!</h1>
            <p>Page Not Found!</p>
          </>
        }
      />
    </Routes>
  );
}

export default App;
