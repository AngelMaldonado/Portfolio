import { Router } from "express"
import CommentController from "../controllers/comment.controller"

class CommentRoutes {
  private readonly commentController: CommentController
  public readonly router: Router

  constructor() {
    this.commentController = new CommentController()
    this.router = Router()
    this.Init()
  }

  private Init() {
    this.router.get("/", this.commentController.All.bind(this.commentController))
    this.router.post("/", this.commentController.Create.bind(this.commentController))
    this.router.put("/", this.commentController.UpdateOne.bind(this.commentController))
    this.router.delete("/:id", this.commentController.DeleteOne.bind(this.commentController))
  }
}

export default new CommentRoutes().router
