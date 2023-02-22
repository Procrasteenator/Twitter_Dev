import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository {
    constructor(){
        super(User);
    }
    async findBy(data) {
        try {
            console.log('inside user repo') 
            const respo = await User.findOne(data);
            return respo;
        } catch (error) {
            console.log('error in user repo');
            throw error;
        }
    }
    
}
export default UserRepository;