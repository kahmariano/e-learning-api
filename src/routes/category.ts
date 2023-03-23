import { Express, request, response } from "express";
import { prisma } from "../prisma";

export async function appRoutesCategory(app: Express) {
    app.get('/category', async request => {
        const categories = await prisma.category.findMany({
            include: {
                categoryusers:true
            }
        })
        return response.json(categories)
    } )

    //rota pegar de categoria usuario
app.get('/categoryuser', async (req, res) => {
    const categoryusers = await prisma.categoryUser.findMany({
        include: {
            category: true,
            user: true
        }
    })

    return res.json(categoryusers)
});

}
