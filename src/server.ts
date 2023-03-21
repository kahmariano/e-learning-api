import express from 'express';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

//rota pegar de categoria 
app.get('/category', async (req, res) => {
    const categories = await prisma.category.findMany();

    return res.json(categories)
});

//rota postar de categoria
app.post('/category', async (req, res) => {
    const { title } = req.body;

    const category = await prisma.category.create({
        data: {
            title,
        }
    })

    return res.json(category)
});

//rota pegar de aula
app.get('/classroom', async (req, res) => {
    const classes =  await prisma.classroom.findMany({
        include: {
            category: true
        }
    });

    return res.json(classes)
});

//rota postar de aula
app.post('/classroom', async (req, res) => {
    const { title, numberClasses,time,video,description,categoryId } = req.body;

    const classroom = await prisma.classroom.create({
        data: { 
        title,
            numberClasses,
             time,
             video,
             description,
             categoryId,
    }
    })

    return res.json(classroom)
});

//rota pegar de usuario
app.get('/user', async (req, res) => {
    const users =  await prisma.classroom.findMany(
    //     {
    //     include: {
    //         category: true
    //     }
    // } acho que nao precisa disso
    );

    return res.json(users)
});

//rota postar de usuario
app.post('/user', async (req, res) => {
    const {idDevice} = req.body;

    const users = await prisma.classroom.create({
        data: { 
        idDevice // nao to entendendo pq ta dando o erro, fala que nao é permitido coolocar ele aqui
    }
    })

    return res.json(users)
});

//rota pegar de categoria usuario
//rota postar de categoria usuario
//rota pegar de aula usuario
//rota postar dee aula usuario


app.listen(3333, () => {
    console.log('Server rodandoo');
})