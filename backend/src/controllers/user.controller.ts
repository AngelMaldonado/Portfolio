import { Request, Response } from "express"
import User from "../models/user"

class UserController {
  async Create(req: Request, res: Response) {
    const user = new User(req.body)
    try {
      await user.save()
      res.status(201).send(user)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async All(req: Request, res: Response) {
    try {
      const users = await User.find()
      res.status(200).send(users)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async UpdateOne(req: Request, res: Response) {
    try {
      const user = await User.findById(req.body._id)
      if (user != null) {
        user.set(req.body)
        await user.save()
        res.status(200).send(user)
      }
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async DeleteOne(req: Request, res: Response) {
    try {
      const user = await User.findByIdAndDelete(req.params.id)
      if (user != null) {
        res.status(200).send(user)
      }
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}

export default UserController
