import { prisma } from '../../prisma';

export default class GetCategoriesService {
  public async execute() {
    const categories = await prisma.category.findMany({
      include: {
        categoryusers: true,
      },
    });

    return { categories };
  }
}
