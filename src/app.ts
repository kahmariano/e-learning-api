import express from 'express';
import { prisma } from './prisma';

export  const app = express();

app.use(express.json());

app.listen(3333, () => {
    console.log('Server rodandoo');
})

//rota pegar de categoria 
// app.get('/category', async (req, res) => {
//     const categories = await prisma.category.findMany({
//         include: {
//             categoryusers: true
//         }// nao sei se é users ou user 
//     })

//     return res.json(categories)
// });

//rota postar de categoria
// app.post('/category', async (req, res) => {
//     const { title } = req.body;

//     const category = await prisma.category.create({
//         data: {
//             title,
//         }
//     })

//     return res.json(category)
// });

// //rota pegar de aula
// app.get('/classroom', async (req, res) => {
//     const classes = await prisma.classroom.findMany({
//         include: {
//             category: true
//         }
//     });

//     return res.json(classes)
// });

// //rota postar de aula
// app.post('/classroom', async (req, res) => {
//     const { title, numberClasses, time, video, description, categoryId } = req.body;

//     const classroom = await prisma.classroom.create({
//         data: {
//             title,
//             numberClasses,
//             time,
//             video,
//             description,
//             categoryId,
//         }
//     })

//     return res.json(classroom)
// });

// //rota pegar de usuario
// app.get('/user', async (req, res) => {
//     const users = await prisma.user.findMany(
//             {
//             include: {
//                 categoryusers:true
//             }
//         }
//     );

//     return res.json(users)
// });

// //rota postar de usuario
// app.post('/user', async (req, res) => {

//     const { idDevice } = req.body;

//     const users = await prisma.user.create({
//         data: {
//             idDevide // nao to entendendo pq ta dando o erro, fala que nao é permitido coolocar ele aqui
//         }
//     })

//     return res.json(users)
// });









// //rota pegar de categoria usuario
// app.get('/categoryuser', async (req, res) => {
//     const categoryusers = await prisma.categoryUser.findMany({
//         include: {
//             category: true,
//             user: true
//         }
//     }); // aqui eu n sei se pus os nomes certos //prisma. nao sei se ta certo 

//     return res.json(categoryusers)
// });

// //rota postar de categoria usuario
// app.post('/categoryuser', async (req, res) => {
//     const { user, userId, category, categoryId } = req.body;

//     const categoryuser = await prisma.categoryUser.create({
//         data: {
//             user, userId, category, categoryId
//         }
//     })

//     return res.json(categoryuser)
// });

// //rota pegar de aula usuario
// app.get('/classroomuser', async (req, res) => {
//     const classroomusers = await prisma.classroomUser.findMany({
//         include: {
//             user: true,
//             classroom: true
//         }
//     })

//     return res.json(classroomusers)
// });

// //rota postar dee aula usuario
// app.post('/classroomuser', async (req, res) => {
//     const { userId, classroomId } = req.body;

//     const classroomuser = await prisma.classroomUser.create({
//         data: {
//             userId, classroomId
//         }
//     })

//     return res.json(classroomuser)
// });

