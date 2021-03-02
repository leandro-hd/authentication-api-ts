import { Router } from 'express';
import { UserController } from './controllers/userController';
import { AuthController } from './controllers/authController';
import { ProjectController } from './controllers/projectController';
import authMiddleware from './middlewares/auth';

const router = Router();

const userController = new UserController();

const authController = new AuthController();

const projectController = new ProjectController();

router.post('/register', userController.create);
router.post('/auth', authController.auth);
router.get('/project', authMiddleware, projectController.project);

export { router };