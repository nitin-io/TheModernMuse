import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Link to="/login">Login</Link>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Layout>
  );
};

export default Home;
