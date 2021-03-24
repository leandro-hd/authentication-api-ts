import { Router } from 'express';
import { pageLanding, pageLogin, pageAbout } from './pages';
import { UserController } from './controllers/userController';
import { AuthController } from './controllers/authController';
import { MailController } from './controllers/mailController';
import { ResetController } from './controllers/resetController';
import authMiddleware from './middlewares/auth';

const router = Router();

const userController = new UserController();
const authController = new AuthController();
const mailController = new MailController();
const resetController = new ResetController();

router.get('/', pageLanding)
router.post('/register', userController.create);
router.get('/login', pageLogin)
router.post('/auth', authController.auth);
router.get('/about', authMiddleware, pageAbout);
router.post('/mail', mailController.mail);
router.post('/reset', resetController.reset);


export { router };