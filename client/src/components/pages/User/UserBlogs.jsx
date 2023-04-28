import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import UserMenu from "../../layout/UserMenu";
import axios from "axios";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/post/user/posts`
      );
      setBlogs(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <Layout>
      <UserMenu />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {blogs?.map((item) => (
          <div
            key={item._id}
            className="rounded overflow-hidden shadow-lg dark:shadow-gray-800"
          >
            <div className="px-6 py-4">
              <img
                className="w-full"
                src={`${import.meta.env.VITE_BASE_URL}/api/post/image/${
                  item._id
                }`}
                alt="Article Cover"
              />
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

export default UserBlogs;
