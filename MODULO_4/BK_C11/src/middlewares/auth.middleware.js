import jwt from "jsonwebtoken";
import "dotenv/config";

export function verifyToken(req, res, next) {
  const token = req.headers?.token;

  if (!token) {
    return res
      .status(403)
      .json({ error: "User have not access to this gateway" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    req.user = decoded;
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: "Invalid Token" });
  }

  return next();
}
