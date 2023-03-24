import { Router } from 'express';
import { prisma } from '../prisma';

// export async function appRoutesClassroom(app: Express){

const classroomRouter = Router();

// rota pegar de aula
classroomRouter.get('/', async (request, response) => {
  const classes = await prisma.classroom.findMany({
    include: {
      category: true,
    },
  });

  return response.json(classes);
});

// rota postar de aula
classroomRouter.post('/', async (request, response) => {
  const { title, numberClasses, time, video, description, categoryId } =
    request.body;

  const classroom = await prisma.classroom.create({
    data: {
      title,
      numberClasses,
      time,
      video,
      description,
      categoryId,
    },
  });

  return response.json(classroom);
});

// }
export { classroomRouter };
