import { Request, Response } from 'express';
import GetCategoriesService from '../services/GetCategories';
import PostCategoryService from '../services/PostCategory';

export default class CategoryController {
  public async list(request: Request, response: Response) {
    const getCategories = new GetCategoriesService(); // instancia da class

    const { categories } = await getCategories.execute();

    return response.json(categories);
  }

  public async create(request: Request, response: Response) {
    const { title } = request.body;
    const postCategory = new PostCategoryService();

    const { category } = await postCategory.execute({ title });

    return response.json(category);
  }
}
