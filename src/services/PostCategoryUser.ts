import { prisma } from '../prisma';

interface PostCategoryUserProps {
  user: string;
  userId: number;
  category: string;
  categoryId: number;
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
