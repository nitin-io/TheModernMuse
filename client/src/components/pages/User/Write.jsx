import { Formik, Form, Field } from "formik";
import React from "react";
import Layout from "../../layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Formik
        initialValues={{ title: "", content: "" }}
        onSubmit={async (values) => {
          await axios.post(`${import.meta.env.VITE_BASE_URL}/api/post/new`, {
            values,
          });
          navigate("/");
        }}
      >
        <Form className="p-4">
          <Field
            className="flex h-10 w-full rounded-none my-3 border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
            type="text"
            placeholder="Title"
            name="title"
            required
          />
          <Field
            rows="20"
            className="flex h-10 w-full rounded-none my-3 border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
            type="text"
            placeholder="Content"
            name="content"
            required
            as="textarea"
          />
          <button
            type="submit"
            className="bg-sky-700 rounded-none text-white px-4 py-2 mt-3"
          >
            Publish
          </button>
        </Form>
      </Formik>
    </Layout>
  );
};

export default Write;
