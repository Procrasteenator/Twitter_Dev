const express = require('express');
const connect  = require('./config/database')
const app = express();
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment')
app.listen( 3000 , async()=>{
    console.log('server started');
    await connect();
    console.log('mongo db connected');
    const tweetRepo = new TweetRepository();
      const tweet = await tweetRepo.create({content : 'new comment'});
      console.log(tweet);

    // const tweet = await tweetRepo.get('63dbf355730c91abdfdb58c7');
    // console.log(tweet);
    // console.log(tweet.contentWithEmail);  
});