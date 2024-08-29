import { Request, Response } from "express"
import Post from "../models/post"

class PostController {
  async Create(req: Request, res: Response) {
    const post = new Post(req.body)
    try {
      await post.save()
      res.status(201).send(post)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async Get(req: Request, res: Response) {
    try {
      const post = await Post.findById(req.params.id)
      res.status(200).send(post)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async All(req: Request, res: Response) {
    try {
      const posts = await Post.find()
      res.status(200).send(posts)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async UpdateOne(req: Request, res: Response) {
    try {
      const post = await Post.findById(req.body._id)
      if (post != null) {
        post.set(req.body)
        await post.save()
        res.status(200).send(post)
      }
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async DeleteOne(req: Request, res: Response) {
    try {
      const post = await Post.findByIdAndDelete(req.params.id)
      if (post != null) {
        res.status(200).send(post)
      }
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}

export default PostController
