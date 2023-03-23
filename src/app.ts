import express from 'express';
import { prisma } from './prisma';

export  const app = express();

app.use(express.json());

app.listen(3333, () => {
    console.log('Server rodandoo');
})

