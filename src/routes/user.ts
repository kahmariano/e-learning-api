import { Router } from 'express';
import { prisma } from '../prisma';

const userRouter = Router();

// rota pegar de aula usuario
userRouter.get('/', async (request, response) => {
  const classroomusers = await prisma.classroomUser.findMany({
    include: {
      user: true,
      classroom: true,
    },
  });

  return response.json(classroomusers);
});

// rota postar dee aula usuario
userRouter.post('/', async (request, response) => {
  const { userId, classroomId } = request.body;

  const classroomuser = await prisma.classroomUser.create({
    data: {
      userId,
      classroomId,
    },
  });

  return response.json(classroomuser);
});

export { userRouter };
