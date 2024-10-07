import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" })
  }

  try {
    const secretKey = process.env.JWT_SECRET_KEY as string
    if (!secretKey) {
      throw new Error("Secret key not defined")
    }

    const decoded = jwt.verify(token, secretKey)
    console.log(decoded)

    next()
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" })
  }
}

export default authMiddleware
