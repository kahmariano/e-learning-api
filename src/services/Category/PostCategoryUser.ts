import { prisma } from '../../prisma';

interface PostCategoryUserProps {
  userId: number;
  categoryId: number;
}

export default class PostCategoryUserService {
  public async execute({ userId, categoryId }: PostCategoryUserProps) {
    const categoryuser = await prisma.categoryUser.create({
      data: {
        userId,
        categoryId,
      },
    });
    return { categoryuser };
  }
}
