const express = require('express');
const connect  = require('./config/database')
const {TweetRepository} = require('./repository/index');
const TweetService = require('./services/tweetService');
const app = express();
app.listen( 3000 , async()=>{
    console.log('server started');
    await connect();
    console.log('mongo db connected');
   let service = new TweetService();
   const tweet = await service.create({ content : 'First Concert with #friends #fun '});
   console.log(tweet);


});