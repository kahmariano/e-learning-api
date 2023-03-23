import { Express, request, response } from "express";
import { prisma } from "../prisma";

export async function appRoutesClassroom(app: Express){

//rota pegar de aula
app.get('/classroom', async (request, response) => {
    const classes = await prisma.classroom.findMany({
        include: {
            category: true
        }
    });

    return response.json(classes)
});

//rota postar de aula
app.post('/classroom', async (request, response) => {
    const { title, numberClasses, time, video, description, categoryId } = request.body;

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

    return response.json(classroom)
});

}