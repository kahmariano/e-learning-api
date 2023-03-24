import { prisma } from '../prisma';

interface PostCategoryUserProps {
  user: string;
  userId: string;
  category: string;
  categoryId: string;
}

export default class PostCategoryUserService {
  public async execute({
    user,
    userId,
    category,
    categoryId,
  }: PostCategoryUserProps) {
    const categoryuser = await prisma.categoryUser.create({
      data: {
        user,
        userId,
        category,
        categoryId,
      },
    });
    return { categoryuser };
  }
}
