import { Router } from "express"
import AuthController from "../controllers/auth.controller"

class AuthRoutes {
  private readonly authController: AuthController
  public readonly router: Router

  constructor() {
    this.authController = new AuthController()
    this.router = Router()
    this.Init()
  }

  private Init() {
    this.router.post("/login", this.authController.Login.bind(this.authController))
    this.router.post("/logout", this.authController.Logout.bind(this.authController))
    this.router.get("/validate", this.authController.Validate.bind(this.authController))
  }
}

export default new AuthRoutes().router
