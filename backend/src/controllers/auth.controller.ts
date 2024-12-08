import { Request, Response } from "express"
import User from "../models/user"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class AuthController {
  async Login(req: Request, res: Response) {
    const { email, pswd } = new User(req.body)
    const user = await User.findOne({ email })

    if (user && user.pswd && bcrypt.compareSync(pswd, user.pswd)) {
      res.status(200).send({
        _id: user.id,
        token: jwt.sign(
          { _id: user._id },
          process.env.JWT_SECRET as string,
          { expiresIn: "1h" }
        )
      })
    } else {
      res.status(401).send({ message: "Correo o contraseña inválidos" })
    }
  }

  async Register(req: Request, res: Response) {
    const { email, pswd } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "Email already registered" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(pswd, saltRounds);

    // Create new user
    const newUser = new User({
      email,
      pswd: hashedPassword,
    });

    // Save the new user in the database
    await newUser.save();

    // Return a token upon successful registration
    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res.status(201).send({
      _id: newUser._id,
      token,
    });
  }

  async Logout(req: Request, res: Response) {
    res.status(200).send({ message: "Sesión cerrada" })
  }

  async Validate(request: Request, response: Response) {
    // get token from header
    const token = request.headers.authorization?.split(" ")[1]
    if (!token) return response.status(401).send({ message: "Token no provisto" })

    // validate token
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
      if (err) return response.status(401).send({ message: "Token inválido" })
      response.status(200).send(decoded)
    })
  }
}

export default AuthController
