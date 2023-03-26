import { prisma } from '../../prisma';

interface PostUserProps {
  idDevide: string;
}
export default class PostUserService {
  public async execute({ idDevide }: PostUserProps) {
    const user = await prisma.user.create({
      data: {
        idDevide,
      },
    });
    return { user };
  }
}
