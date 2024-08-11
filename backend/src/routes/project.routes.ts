import { Router } from "express"
import ProjectController from "../controllers/project.controller"

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
    this.router.post("/", this.projectController.Create.bind(this.projectController))
    this.router.put("/", this.projectController.UpdateOne.bind(this.projectController))
    this.router.delete("/:id", this.projectController.DeleteOne.bind(this.projectController))
  }
}

export default new ProjectRoutes().router
