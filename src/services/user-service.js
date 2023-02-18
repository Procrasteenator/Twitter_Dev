import {UserRepository} from '../repository/index.js'
class UserService {
 constructor() {
    this.userRepo = new UserRepository();
 }
  async signup(data){
     const user = await this.userRepo.create(data);
     return user;
  }
}

export default UserService;