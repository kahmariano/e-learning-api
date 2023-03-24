import { Request, Response } from 'express';
import GetCategoriesService from '../services/GetCategories';
import PostCategoryService from '../services/PostCategory';
import GetCategoryUserService from '../services/GetCategoryUser';
import PostCategoryUserService from '../services/PostCategoryUser';

export default class CategoryController {
  public async listCategory(request: Request, response: Response) {
    const getCategories = new GetCategoriesService(); // instancia da class

    const { categories } = await getCategories.execute();

    return response.json(categories);
  }

  public async createCategory(request: Request, response: Response) {
    const { title } = request.body;
    const postCategory = new PostCategoryService();

    const { category } = await postCategory.execute({ title });

    return response.json(category);
  }

  public async listCategoryUser(request: Response, response: Response) {
    const getCategoryUser = new GetCategoryUserService(); // instancia da class

    const { categoryusers } = await getCategoryUser.execute();

    return response.json(categoryusers);
  }

  public async createCategoryUser(request: Request, response: Response) {
    const { user, userId, category, categoryId } = request.body;
    const postCategoryUser = new PostCategoryUserService();

    const { categoryuser } = await postCategoryUser.execute({
      user,
      userId,
      category,
      categoryId,
    });

    return response.json(categoryuser);
  }
}
