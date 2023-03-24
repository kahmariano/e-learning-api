import { Router } from 'express';
import CategoryController from '../controllers/Category';
import { prisma } from '../prisma';

const categoryRouter = Router();
const categoryController = new CategoryController();

// rota pegar de categoria
categoryRouter.get('/', categoryController.list);

// rota postar de categoria
categoryRouter.post('/', categoryController.create);

// rota pegar de categoria usuario
categoryRouter.get('/', categoryController.list);
// nao sei se isso ta certo

// rota postar de categoria usuario
categoryRouter.post('/', categoryController.create);
// nao sei se isso ta certo

export { categoryRouter };
