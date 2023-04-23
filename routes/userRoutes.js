import { Router } from "express";
import {
  signInController,
  signUpController,
} from "../controllers/userController.js";
import { verifySignIn } from "../utils/auth.js";
const router = Router();

// Sign Up
router.post("/signup", signUpController);

// Sign In
router.post("/signin", signInController);

// Private Route Testing
router.get("/testing", verifySignIn, (req, res) => {
  return res.status(200).json({ ok: true });
});

export default router;
