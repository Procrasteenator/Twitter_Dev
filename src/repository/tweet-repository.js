const Tweet = require('../models/tweet');
class TweetRepository {
    
    async create(data) {
        try {
            const tweet = Tweet.create(data);
            return tweet 
        } catch (error) {
            console.log(error);
        }
    }
    async get(tweetId){
        try {
            const tweet = Tweet.findById(tweetId);
            return tweet 
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
    async update(tweetId , data) {
        try {
            const tweet = Tweet.findByIdAndUpdate(tweetId, data ,{new : true});
            return tweet ;
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
    async getAll(offset , limit){
        try {
            const tweet = Tweet.find().skip(offset).limit(limit);
            return tweet; 
        } catch (error) {
            console.log(error);    
        }

    }
}
module.exports = TweetRepository