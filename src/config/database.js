import mongoose  from 'mongoose';
mongoose.set('strictQuery', false);
 export const connect = async()=>{
    await mongoose.connect('mongodb://localhost/twitter_Dev');
}