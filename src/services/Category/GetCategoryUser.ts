import { prisma } from '../../prisma';

// interface GetCategoriesProps {
//   category: string;
//   user: string;
// }

export default class GetCategoryUserService {
  public async execute() {
    const categoryusers = await prisma.categoryUser.findMany({
      include: {
        category: true,
        user: true,
      },
    });
    return { categoryusers };
  }
}

// { category, user }: GetCategoriesProps
