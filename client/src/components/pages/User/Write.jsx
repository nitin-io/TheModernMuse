import React, { useState } from "react";
import Layout from "../../layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageInput, setImageInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = new FormData();
      postData.append("title", title);
      postData.append("content", content);
      postData.append("coverImage", imageInput);
      console.log(postData);

      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/post/new`,
        postData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Successfully Added New Article");
      setContent("");
      setTitle("");
      setImageInput("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <form className="p-4" onSubmit={handleSubmit}>
        <input
          className="flex h-10 w-full rounded-none my-3 border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="18"
          className="flex w-full rounded-none my-3 border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
          type="text"
          placeholder="Content..."
          name="content"
          value={content}
          required
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          type="button"
          className="flex w-full rounded-none my-3 border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        >
          <label>
            {imageInput ? imageInput.name : "Upload An Image"}
            <input
              type="file"
              name="coverImage"
              accept="image/*"
              onChange={(e) => {
                setImageInput(e.target.files[0]);
                console.log(e.target.files);
              }}
              hidden
            />
          </label>
        </button>
        {imageInput && (
          <img
            src={URL.createObjectURL(imageInput)}
            width={"200px"}
            alt="Product Image"
            className="img img-responsive"
          />
        )}

        <button
          type="submit"
          className="bg-sky-700 rounded-none text-white px-4 py-2 mt-3"
        >
          Publish
        </button>
      </form>
    </Layout>
  );
};

export default Write;
