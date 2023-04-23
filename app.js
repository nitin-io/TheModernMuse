import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouters from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/api/user", userRouters);

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const BlogPost = new mongoose.model("blogPost", blogPostSchema);

app.get("/", (req, res) => {
  BlogPost.find({}, (err, docs) => {
    if (!err) {
      res.render("home", { posts: docs });
    }
  });
});

app.get("/about", (req, res) => {
  res.render("about", { aboutContent: "Hello We Are Web Developer." });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.get("/posts/:blogID", (req, res) => {
  BlogPost.findOne({ _id: req.params.blogID }, (err, post) => {
    if (!err) {
      res.render("post", { requestedPost: post });
    }
  });
});

app.post("/compose", (req, res) => {
  const title = req.body.postTitle;
  const content = req.body.postBody;

  const blogPost = new BlogPost({
    title: title,
    content: content,
  });

  blogPost.save();

  res.redirect("/");
});

app.listen(port, function () {
  console.log("Server started on port: " + port);
});
