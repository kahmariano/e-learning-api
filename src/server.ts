import express from 'express';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

app.get('/category', async (req, res) => {
    const categories = await prisma.category.findMany();

    return res.json(categories)
});

app.post('/category', async (req, res) => {
    const { title } = req.body;

    const category = await prisma.category.create({
        data: {
            title,
        }
    })

    return res.json(category)
});


app.listen(3333, () => {
    console.log('Server rodandoo');
})