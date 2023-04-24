import { Field, Form, Formik } from "formik";
import React from "react";
import Layout from "../../layout/Layout";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Formik
        initialValues={{ fullName: "", email: "", password: "" }}
        onSubmit={async (values) => {
          await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/signup`, {
            values,
          });
          navigate("/login");
        }}
      >
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                Sign Up
              </h2>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
                >
                  Sign In
                </Link>
              </p>
              <Form className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-gray-900 dark:text-gray-200"
                    >
                      Full Name
                    </label>
                    <div className="mt-2.5">
                      <Field
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        placeholder="Enter You Full Name"
                        id="name"
                        name="fullName"
                      ></Field>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900 dark:text-gray-200"
                    >
                      Email address
                    </label>
                    <div className="mt-2.5">
                      <Field
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="email"
                        placeholder="Enter Your Email"
                        id="email"
                        name="email"
                      ></Field>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900 dark:text-gray-200"
                    >
                      Password
                    </label>
                    <div className="mt-2.5">
                      <Field
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="password"
                        placeholder="Enter Your Password"
                        id="password"
                        name="password"
                      ></Field>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </Form>
              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-500 bg-white px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none dark:text-gray-400"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="h-6 w-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </div>
                  Sign up with Google
                </button>

                <p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Read our{" "}
                    <span className="capitalize text-indigo-600">
                      privacy policy
                    </span>{" "}
                    and{" "}
                    <span className="capitalize text-indigo-600">
                      terms of service
                    </span>{" "}
                    to learn more
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </Layout>
  );
};

export default SignUp;
