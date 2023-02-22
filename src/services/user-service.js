import {UserRepository} from '../repository/index.js'
class UserService {
 constructor() {
    this.userRepo = new UserRepository();
 }
  async signup(data){
     const user = await this.userRepo.create(data);
     return user;
  }

  async getUserByEmail(email){
   try {
      console.log('inside user service')
      const user = await this.userRepo.findBy({email});
      return user ;
   } catch (error) {
      console.log('error in user service');
      throw error;
   }
  }

  async signIn(data){
   try {
      const user = await this.getUserByEmail(data.email);
        if(!user){
            throw {
                message :'no user found' ,               
            }
        }
        if(!user.comparePassword(data.password)){
         throw {
            message :'incorrect password' ,
        }
        }
        const token = user.genJWT();
        return token ;
     
      return user ;
   } catch (error) {
      console.log('error in user service');
      throw error;
   
  }
 }
}

export default UserService;