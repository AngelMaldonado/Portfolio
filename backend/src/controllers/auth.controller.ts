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
          { expiresIn: "60s" }
        )
      })
    } else {
      res.status(401).send({ message: "Correo o contraseña inválidos" })
    }
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
