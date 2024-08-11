import { Request, Response } from "express"
import Comment from "../models/comment"

class CommentController {
  async Create(req: Request, res: Response) {
    const comment = new Comment(req.body)
    try {
      await comment.save()
      res.status(201).send(comment)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async All(req: Request, res: Response) {
    try {
      const comment = await Comment.find()
      res.status(200).send(comment)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async UpdateOne(req: Request, res: Response) {
    try {
      const comment = await Comment.findById(req.body._id)
      if (comment != null) {
        comment.set(req.body)
        await comment.save()
        res.status(200).send(comment)
      }
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async DeleteOne(req: Request, res: Response) {
    try {
      const comment = await Comment.findByIdAndDelete(req.params.id)
      if (comment != null) {
        res.status(200).send(comment)
      }
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}

export default CommentController
