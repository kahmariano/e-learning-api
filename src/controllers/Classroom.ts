import { Request, Response } from 'express';
import GetClassroomService from '../services/GetClassroom';
import PostClassroomService from '../services/PostClassroom';

export default class classroomController {
  public async listClassroom(request: Request, response: Response) {
    const getClassroom = new GetClassroomService(); // intanciando class
    const { classes } = await getClassroom.execute();

    return response.json(classes);
  }

  public async createClassroom(request: Request, response: Response) {
    const { title, numberClasses, time, video, description, categoryId } =
      request.body;
    const postClassroom = new PostClassroomService();

    const { classroom } = await postClassroom.execute({
      title,
      numberClasses,
      time,
      video,
      description,
      categoryId,
    });

    return response.json(classroom);
  }
}
