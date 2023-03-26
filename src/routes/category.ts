import { Router } from 'express';
import CategoryController from '../controllers/Category';
import { prisma } from '../prisma';

const categoryRouter = Router();
const categoryUserRouter = Router();
const categoryController = new CategoryController();

// rota pegar de categoria
categoryRouter.get('/', categoryController.listCategory);

// rota postar de categoria
categoryRouter.post('/', categoryController.createCategory);

// rota pegar de categoria usuario
categoryUserRouter.get('/', categoryController.listCategoryUser);
// nao sei se isso ta certo

// rota postar de categoria usuario
categoryUserRouter.post('/', categoryController.createCategoryUser);
// nao sei se isso ta certo

export { categoryRouter };
export { categoryUserRouter };
