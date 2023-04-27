import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: {},
    token: null,
  });

  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("auth"));
    console.log("AuthContext: " + data);
    if (data?.token) {
      setAuth(data);
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
