import { Router } from "express"
import ProjectController from "../controllers/project.controller"
import authMiddleware from "../middleware/auth.middleware"

class ProjectRoutes {
  private readonly projectController: ProjectController
  public readonly router: Router

  constructor() {
    this.projectController = new ProjectController()
    this.router = Router()
    this.Init()
  }

  private Init() {
    this.router.get("/", this.projectController.All.bind(this.projectController))
    this.router.post("/", authMiddleware, this.projectController.Create.bind(this.projectController))
    this.router.put("/", authMiddleware, this.projectController.UpdateOne.bind(this.projectController))
    this.router.delete("/:id", authMiddleware, this.projectController.DeleteOne.bind(this.projectController))
  }
}

export default new ProjectRoutes().router
