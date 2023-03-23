import { Express, request, response } from "express";
import { prisma } from "../prisma";

export async function appRoutesUser(app: Express) {
    //rota pegar de aula usuario
    app.get('/classroomuser', async (request, response) => {
        const classroomusers = await prisma.classroomUser.findMany({
            include: {
                user: true,
                classroom: true
            }
        })

        return response.json(classroomusers)
    });

    //rota postar dee aula usuario
    app.post('/classroomuser', async (request, response) => {
        const { userId, classroomId } = request.body;

        const classroomuser = await prisma.classroomUser.create({
            data: {
                userId, classroomId
            }
        })

        return response.json(classroomuser)
    });


}