import { Router } from "express"
import SkillController from "../controllers/skill.controller"
import authMiddleware from "../middleware/auth.middleware"

class SkillRoutes {
  private readonly skillController: SkillController
  public readonly router: Router

  constructor() {
    this.skillController = new SkillController()
    this.router = Router()
    this.Init()
  }

  private Init() {
    this.router.get("/", this.skillController.All.bind(this.skillController))
    this.router.post("/", authMiddleware, this.skillController.Create.bind(this.skillController))
    this.router.put("/", authMiddleware, this.skillController.UpdateOne.bind(this.skillController))
    this.router.delete("/:id", authMiddleware, this.skillController.DeleteOne.bind(this.skillController))
  }
}

export default new SkillRoutes().router
