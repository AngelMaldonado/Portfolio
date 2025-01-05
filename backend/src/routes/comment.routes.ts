import { Router } from "express"
import CommentController from "../controllers/comment.controller"
import authMiddleware from "../middleware/auth.middleware"

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
    this.router.post("/", authMiddleware, this.commentController.Create.bind(this.commentController))
    this.router.put("/", authMiddleware, this.commentController.UpdateOne.bind(this.commentController))
    this.router.delete("/:id", authMiddleware, this.commentController.DeleteOne.bind(this.commentController))
  }
}

export default new CommentRoutes().router
