import { Router } from 'express';
import UserController from '../controllers/User';

const userRouter = Router();
const userController = new UserController();

// rota pegar de aula usuario
userRouter.get('/', userController.listUser);

// rota postar dee aula usuario
userRouter.post('/', userController.createUser);

export { userRouter };
