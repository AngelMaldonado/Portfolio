import { Request, Response } from "express"
import User from "../models/user"
import bcrypt from "bcrypt"
import jwd from "jsonwebtoken"

class AuthController {
  async Login(req: Request, res: Response) {
    const { email, pswd } = new User(req.body)
    const user = await User.findOne({ email })

    if (user && user.pswd && bcrypt.compareSync(pswd, user.pswd)) {
      res.status(200).send({
        token: jwd.sign(
          { email: user.email },
          process.env.JWT_SECRET as string,
          { expiresIn: "1h" }
        )
      })
    } else {
      res.status(401).send({ message: "Invalid email or password" })
    }
  }
}

export default AuthController
