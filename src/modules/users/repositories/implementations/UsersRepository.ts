import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): void {
    const user = new User()

    Object.assign(user, {
      name,
      email 
    })

    this.users.push(user)
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id)

    return user
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => user.email === email)

    return user
  }

  turnAdmin(receivedUser: User): void {

    const user = receivedUser
    user.admin = true
  }

  list(): User[] {
    return this.users
  }
}

export { UsersRepository };
