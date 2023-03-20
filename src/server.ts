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

app.get('/classroom', async (req, res) => {
    const classes =  await prisma.classroom.findMany();

    return res.json(classes)
});

app.post('/classroom', async (req, res) => {
    const { title, numberClasses,time,video,description,idCategory } = req.body;

    const classes = await prisma.classroom.create({
        data: { // nao entendi oq coloca nessa parte, o q é esse data ?
        title,
            numberClasses,
             time,
             video,
             description,
             idCategory,
    }
    })

    return res.json(classes)
});




app.listen(3333, () => {
    console.log('Server rodandoo');
})