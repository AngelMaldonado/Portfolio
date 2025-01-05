import { Router } from "express"
import PostController from "../controllers/post.controller"
import authMiddleware from "../middleware/auth.middleware"

class PostRoutes {
  private readonly postController: PostController
  public readonly router: Router

  constructor() {
    this.postController = new PostController()
    this.router = Router()
    this.Init()
  }

  private Init() {
    this.router.get("/", this.postController.All.bind(this.postController))
    this.router.get("/:id", this.postController.Get.bind(this.postController))
    this.router.get("/:id/comments", this.postController.Comments.bind(this.postController))
    this.router.post("/", authMiddleware, this.postController.Create.bind(this.postController))
    this.router.put("/", authMiddleware, this.postController.UpdateOne.bind(this.postController))
    this.router.delete("/:id", authMiddleware, this.postController.DeleteOne.bind(this.postController))
  }
}

export default new PostRoutes().router
