import { verify } from "jsonwebtoken";

export const verifySignIn = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decoded = await verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    req.user = decoded;

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Authorization Error" });
  }
};
