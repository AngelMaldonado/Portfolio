import { Router } from "express"
import UserController from "../controllers/user.controller"
import authMiddleware from "../middleware/auth.middleware"

class UserRoutes {
  private readonly userController: UserController
  public readonly router: Router

  constructor() {
    this.userController = new UserController()
    this.router = Router()
    this.Init()
  }

  private Init() {
    this.router.get("/", this.userController.All.bind(this.userController))
    this.router.post("/", authMiddleware, this.userController.Create.bind(this.userController))
    this.router.put("/", authMiddleware, this.userController.UpdateOne.bind(this.userController))
    this.router.delete("/:id", authMiddleware, this.userController.DeleteOne.bind(this.userController))
  }
}

export default new UserRoutes().router
