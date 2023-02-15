import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository {
    constructor(){
        super(Like);
    }
    async findByUserLikeable(data){
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log('something went wrong in the like repo');
            throw error;
        }
    }
    
}
export default LikeRepository;