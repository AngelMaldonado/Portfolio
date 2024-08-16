import express, { Application } from "express"
import mongoose from "mongoose"
import cors from "cors"
import skillRoutes from "./routes/skill.routes"
import userRoutes from "./routes/user.routes"
import projectRoutes from "./routes/project.routes"
import postRoutes from "./routes/post.routes"
import commentRoutes from "./routes/comment.routes"
import authRoutes from "./routes/auth.routes"

class App {
  private readonly app: Application
  private readonly port: number

  constructor() {
    this.app = express()
    this.port = parseInt(process.env.PORT || "3000")
    this.Init()
  }

  public Start() {
    this.app.listen(this.port, () => {
      console.log(`[server] Server is running at http://localhost:${this.port}`)
    })
  }

  private Init() {
    this.InitMiddlewares()
    this.InitRoutes()
    this.db()
  }

  private InitMiddlewares() {
    this.app.use(express.json())
    this.app.use(cors())
  }

  private InitRoutes() {
    this.app.use("/api/skills", skillRoutes)
    this.app.use("/api/users", userRoutes)
    this.app.use("/api/projects", projectRoutes)
    this.app.use("/api/posts", postRoutes)
    this.app.use("/api/comments", commentRoutes)
    this.app.use("/api/auth", authRoutes)
  }

  async db() {
    try {
      await mongoose.connect(process.env.DATABASE_URL as string)
      console.log("[db] MongoDB is connected")
    } catch (error) {
      console.error("[db] Error connecting to MongoDB")
      console.error(error)
    }
  }
}

export default App
