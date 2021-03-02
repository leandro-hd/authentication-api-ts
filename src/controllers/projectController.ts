import { Request, Response } from 'express';

class ProjectController {
  async project(request: Request, response: Response) {
    response.status(200).json('Authorized...')
  }
}

export { ProjectController };