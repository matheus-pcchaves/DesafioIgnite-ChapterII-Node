import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IUsersRequest{
  user_id: string
}

class ListAllUsersUseCase {
  
    constructor(
      private usersRepository: IUsersRepository
    ) {}

    execute({user_id}: IUsersRequest): User[] {

      const userId = this.usersRepository.findById(user_id)

      if(!userId.admin){
        throw new Error('Unauthorized')
      }
      
      const users = this.usersRepository.list()

      return users
    }
}

export { ListAllUsersUseCase };
