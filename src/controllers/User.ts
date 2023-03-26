import { Request, Response } from 'express';
import GetUsersService from '../services/User/GetUser';
import PostUserService from '../services/User/PostUser';

export default class UserController {
  public async listUser(request: Request, response: Response) {
    const getUsers = new GetUsersService();
    const { users } = await getUsers.execute();

    return response.json(users);
  }

  public async createUser(request: Request, response: Response) {
    const { idDevide } = request.body;
    const postUser = new PostUserService();

    const { user } = await postUser.execute({ idDevide });

    return response.json(user);
  }
}
