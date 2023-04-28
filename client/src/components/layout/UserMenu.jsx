import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaThList } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col mt-6">
          <nav className="flex-1 -mx-3 space-y-3 ">
            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              to={"/user/profile"}
            >
              <CgProfile className="w-5 h-5" />
              <span className="mx-2 text-sm font-medium">Profile</span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              to={"/user/blogs"}
            >
              <FaThList className="w-5 h-5" />
              <span className="mx-2 text-sm font-medium">Your blogs</span>
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default UserMenu;
