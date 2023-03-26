import { Router } from 'express';
import { categoryRouter, categoryUserRouter } from './category';
import { classroomRouter } from './classroom';
import { userRouter } from './user';

const appRouter = Router();

appRouter.use('/classroom', classroomRouter);
appRouter.use('/users', userRouter);
appRouter.use('/categories', categoryRouter);
appRouter.use('/categories/user', categoryUserRouter);

export { appRouter };
