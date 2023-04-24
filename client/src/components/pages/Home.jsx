import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { useAuth } from "../context/auth";
import axios from "axios";

const Home = () => {
  const [auth] = useAuth();
  const [posts, setPosts] = useState();

  const fetchAllPosts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/post/posts`
    );
    setPosts(data.posts);
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);
  return (
    <Layout>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {posts?.map((item) => (
          <div
            key={item.id}
            className="rounded overflow-hidden shadow-lg dark:shadow-gray-800"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                {item.content.substring(0, 100) + "..."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
