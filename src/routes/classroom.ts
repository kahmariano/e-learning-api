import { Router } from 'express';
import ClassroomController from '../controllers/Classroom';

const classroomRouter = Router();
const classroomController = new ClassroomController();

// rota pegar de aula
classroomRouter.get('/', classroomController.listClassroom);

// rota postar de aula
classroomRouter.post('/', classroomController.createClassroom);

export { classroomRouter };
