//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { text } = require("body-parser");
const lodash = require("lodash");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/blogPostsDB");

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const BlogPost = new mongoose.model("blogPost", blogPostSchema);

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  BlogPost.find({}, (err, docs)=>{
    if(!err){
      res.render("home", { posts: docs });
    }
  });
});

app.get("/about", (req, res) => {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.get("/posts/:blogID", (req, res) => {
  
  BlogPost.findOne({_id: req.params.blogID}, (err, post)=> {
    if(!err){
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

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
