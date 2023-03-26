import { prisma } from '../prisma';

export default class GetClassroomService {
  public async execute() {
    const classes = await prisma.classroom.findMany({
      include: {
        category: true,
      },
    });
    return { classes };
  }
}
