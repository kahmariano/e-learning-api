import { prisma } from '../prisma';

interface PostClassroomProps {
  title: string;
  numberClasses: number;
  time: number;
  video: string;
  description: string;
  categoryId: number;
}

export default class PostClassroomService {
  public async execute({
    title,
    numberClasses,
    time,
    video,
    description,
    categoryId,
  }: PostClassroomProps) {
    const classroom = await prisma.classroom.create({
      data: {
        title,
        numberClasses,
        time,
        video,
        description,
        categoryId,
      },
    });
    return { classroom };
  }
}
