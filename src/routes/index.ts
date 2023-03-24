import { Router } from 'express';
import { categoryRouter } from './category';
import { classroomRouter } from './classroom';
import { userRouter } from './user';

const appRouter = Router();

appRouter.use('classroom', classroomRouter);
appRouter.use('users', userRouter);
appRouter.use('categories', categoryRouter);

export { appRouter };
