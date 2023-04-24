import { fileURLToPath } from "url";
import path, { dirname } from "path";
import PostModel from "../models/postModel.js";
import fs from "fs";

export const newPostController = async (req, res) => {
  const { title, content } = req.body;
  const __dirname = dirname(fileURLToPath(import.meta.url));

  try {
    if (!title && !content) {
      return res.status(400).json({ message: "Invalid Input" });
    }

    await PostModel.create({
      user: req.user.id,
      title,
      content,
      coverImage: {
        data: fs.readFileSync(
          path.join(__dirname + "/../uploads/" + req.file.filename)
        ),
        contentType: req.file.mimetype,
      },
    });
    res.status(201).json({ message: "New post created successfully" });

    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        return;
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while adding new post" });
  }
};

export const fetchPostController = async (req, res) => {
  try {
    const posts = await PostModel.find({})
      .select("-coverImage")
      .populate("user", "-password");
    return res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while fetching posts" });
  }
};

export const fetchImage = async (req, res) => {
  try {
    const { coverImage } = await PostModel.findById(req.params.pid).select(
      "coverImage"
    );
    res.set("Content-Type", coverImage.contentType);
    return res.status(200).send(coverImage.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updatePostController = async (req, res) => {
  try {
  } catch (error) {}
};

export const fetchUserPost = async (req, res) => {};
