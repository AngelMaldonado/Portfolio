import { Request, Response } from "express"
import Project from "../models/project"

class ProjectController {
  async Create(req: Request, res: Response) {
    const project = new Project(req.body)
    try {
      await project.save()
      res.status(201).send(project)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async All(req: Request, res: Response) {
    try {
      const project = await Project.find()
      res.status(200).send(project)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async UpdateOne(req: Request, res: Response) {
    try {
      const project = await Project.findById(req.body._id)
      if (project != null) {
        project.set(req.body)
        await project.save()
        res.status(200).send(project)
      }
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async DeleteOne(req: Request, res: Response) {
    try {
      const project = await Project.findByIdAndDelete(req.params.id)
      if (project != null) {
        res.status(200).send(project)
      }
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}

export default ProjectController
