import { Router } from 'express';
import { UserController } from './controllers/userController';
import { AuthController } from './controllers/authController';
import { ProjectController } from './controllers/projectController';
import { MailController } from './controllers/mailController';
import { ResetController } from './controllers/resetController';
import authMiddleware from './middlewares/auth';

const router = Router();

const userController = new UserController();

const authController = new AuthController();

const projectController = new ProjectController();
const mailController = new MailController();
const resetController = new ResetController();

router.post('/register', userController.create);
router.post('/auth', authController.auth);
router.get('/project', authMiddleware, projectController.project);
router.post('/mail', mailController.mail);
router.post('/reset', resetController.reset);


export { router };