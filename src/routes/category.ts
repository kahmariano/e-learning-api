import { Router } from 'express';
import CategoryController from '../controllers/Category';

const categoryRouter = Router();
const categoryController = new CategoryController();

// rota pegar de categoria
categoryRouter.get('/', categoryController.listCategory);

// rota postar de categoria
categoryRouter.post('/', categoryController.createCategory);

// rota pegar de categoria usuario
categoryRouter.get('/user', categoryController.listCategoryUser);
// nao sei se isso ta certo

// rota postar de categoria usuario
categoryRouter.post('/user', categoryController.createCategoryUser);
// nao sei se isso ta certo

export { categoryRouter };
