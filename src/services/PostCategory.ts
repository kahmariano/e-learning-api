import { prisma } from '../prisma';

interface PostCategoryProps {
  title: string;
}

export default class PostCategoryService {
  public async execute({ title }: PostCategoryProps) {
    const category = await prisma.category.create({
      data: {
        title,
      },
    });
    return { category };
  }
}
