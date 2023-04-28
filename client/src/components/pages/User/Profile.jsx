import React from "react";
import { useAuth } from "../../context/auth";
import Layout from "../../layout/Layout";
import UserMenu from "../../layout/UserMenu";

const Profile = () => {
  const [auth, setAuth] = useAuth();

  return (
    <>
      <Layout>
        <UserMenu />
        {auth?.token ? (
          <div>
            <img
              className="inline-block w-14 h-14 rounded-full"
              src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
              alt="Dan_Abromov"
            />
            <h1>{auth?.user?.fullName}</h1>
            <button
              className="bg-sky-700 text-white rounded-none"
              onClick={() => {
                localStorage.removeItem("auth");
                setAuth({ user: {}, token: null });
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <p>please login first</p>
        )}
      </Layout>
    </>
  );
};

export default Profile;
