import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <nav class="relative px-8 py-4 flex justify-between items-center border-y border-gray-400 dark:border-gray-700">
        <a
          class="text-3xl font-bold leading-none flex items-center space-x-4"
          href="#"
        >
          <span
            class="text-gray-600 dark:text-gray-300 text-xl"
            onClick={() => {
              navigate("/");
            }}
          >
            TheMordernMuse
          </span>
        </a>
        <div class="lg:hidden">
          <button class="navbar-burger flex items-center text-gray-600 dark:text-gray-300 p-3">
            <svg
              class="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul class="hidden lg:flex lg:items-center lg:justify-end grow mr-4">
          <li>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                class="py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search"
              />
            </div>
          </li>
          {auth?.token ? (
            <li>
              <Link
                to={"/write"}
                class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
                href="#"
                title="Write"
              >
                Write
              </Link>
            </li>
          ) : (
            <div className="space-x-2 hidden lg:block">
              <button
                className="rounded-md border border-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-indigo-600 hover:bg-indigo-500 hover:text-white"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 "
              >
                SignUp
              </button>
            </div>
          )}
        </ul>
        {auth?.token && (
          <div class="hidden lg:block">
            <div class="flex items-center space-x-2">
              <img
                class="inline-block w-12 h-12 rounded-full"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="John Doe"
              />
              <span class="flex flex-col">
                <span class="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {auth?.user?.fullName}
                </span>
                <Link
                  to="/profile"
                  class="text-sm font-medium text-gray-500 dark:text-gray-400 cursor-pointer"
                >
                  View Profile
                </Link>
              </span>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
