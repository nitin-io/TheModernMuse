import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../components/context/auth";
import axios from "axios";
import Layout from "../components/layout/Layout";

const UserRoutes = () => {
  const [auth, setAuth] = useAuth();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/user/authentication`
        );
        if (data.ok) {
          setOk(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (auth?.token) checkAuth();
  }, [auth?.token]);
  return ok ? (
    <Outlet />
  ) : (
    <Layout>
      <h1>Unauthorized Route</h1>
    </Layout>
  );
};

export default UserRoutes;
