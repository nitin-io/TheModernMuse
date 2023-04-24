import PostModel from "../models/postModel.js";

export const newPostController = async (req, res) => {
  console.log(req.body);
  const { title, content } = req.body.values;

  try {
    if (!title && !content) {
      return res.status(400).json({ message: "Invalid Input" });
    }

    await PostModel.create({ user: req.user.id, title, content });
    res.status(201).json({ message: "New post created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while adding new post" });
  }
};

export const fetchPostController = async (req, res) => {
  try {
    const posts = await PostModel.find({}).populate("user", "-password");
    console.log(posts);
    return res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while fetching posts" });
  }
};
