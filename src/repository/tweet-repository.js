import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';
class TweetRepository  extends CrudRepository {
    constructor(){
        super(Tweet);
    }
    
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet ;
        } catch (error) {
            console.log(error);
        }
    }
    
    async getWithComments(tweetId){
        try {
            const tweet = Tweet.findById(tweetId).populate({path : 'comments'}).lean();
            return tweet 
        } catch (error) {
            console.log(error);
        }
              
    }
    
    async destroy(id){
        try {
            const tweet = Tweet.findByIdAndRemove(id);
            return true; 
        } catch (error) {
            console.log(error);
        }

    }
    
}
export default TweetRepository;