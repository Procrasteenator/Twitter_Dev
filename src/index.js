import express from 'express';
import {connect} from './config/database.js'
const app = express();
import TweetService from './services/tweetService.js';
app.listen( 3000 , async()=>{
    console.log('server started');
    await connect();
    console.log('mongo db connected');
   let service = new TweetService();
   const tweet = await service.create({ content : '#LIVELAUGHLOVE'});
   console.log(tweet);


});