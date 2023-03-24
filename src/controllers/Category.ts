import { Request, Response } from 'express';
import { prisma } from '../prisma';
import GetCategoriesService from '../services/GetCategories';

export default class CategoryController {
  public async list(request: Request, response: Response) {
    const getCategories = new GetCategoriesService();

    const { categories } = await getCategories.execute();

    return response.json(categories);
  }
}
