import express from 'express';
import { appRouter } from './routes';

export const app = express();

app.use(express.json());

app.use('/', appRouter);

app.listen(3333, () => {
  console.log('Server rodandoo');
});
