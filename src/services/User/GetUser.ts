import { prisma } from '../../prisma';

export default class GetUsersService {
  public async execute() {
    const users = prisma.user.findMany();
    return { users };
  }
}
