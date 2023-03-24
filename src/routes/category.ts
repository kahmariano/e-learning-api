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
categoryRouter.get('/users', async (request, response) => {
  const categoryusers = await prisma.categoryUser.findMany({
    include: {
      category: true,
      user: true,
    },
  });

  return response.json(categoryusers);
});

// rota postar de categoria usuario
categoryRouter.post('/users', async (request, response) => {
  const { user, userId, category, categoryId } = request.body;

  const categoryuser = await prisma.categoryUser.create({
    data: {
      user,
      userId,
      category,
      categoryId,
    },
  });

  return response.json(categoryuser);
});

export { categoryRouter };
