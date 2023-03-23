import { Express, request, response } from "express";
import { prisma } from "../prisma";

export async function appRoutesCategory(app: Express) {
    //rota pegar de categoria
    app.get('/category', async (request, response) => {
        const categories = await prisma.category.findMany({
            include: {
                categoryusers: true
            }
        })
        return response.json(categories)
    })

    //rota postar de categoria
    app.post('/category', async (request, response) => {
        const { title } = request.body;

        const category = await prisma.category.create({
            data: {
                title,
            }
        })

        return response.json(category)
    });

    //rota pegar de categoria usuario
    app.get('/categoryuser', async (request, response) => {
        const categoryusers = await prisma.categoryUser.findMany({
            include: {
                category: true,
                user: true
            }
        })

        return response.json(categoryusers)
    });

    //rota postar de categoria usuario
    app.post('/categoryuser', async (request, response) => {
        const { user, userId, category, categoryId } = request.body;

        const categoryuser = await prisma.categoryUser.create({
            data: {
                user, userId, category, categoryId
            }
        })

        return response.json(categoryuser)
    });

}
