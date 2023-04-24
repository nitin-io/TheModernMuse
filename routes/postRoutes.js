import { Router } from "express";
import { verifySignIn } from "../utils/auth.js";
import {
  fetchPostController,
  newPostController,
} from "../controllers/postControllers.js";
const router = Router();

// Add new post
router.post("/new", verifySignIn, newPostController);

// Read all posts
router.get("/posts", fetchPostController);
export default router;
