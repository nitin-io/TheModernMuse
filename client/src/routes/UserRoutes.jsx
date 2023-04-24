import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../components/context/auth";
import Redirect from "../components/pages/Redirect";
import axios from "axios";

const UserRoutes = () => {
  const [auth] = useAuth();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/user/authentication`
      );
      if (data.ok) {
        setOk(true);
      }
    };

    if (auth?.token) checkAuth();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Redirect />;
};

export default UserRoutes;
