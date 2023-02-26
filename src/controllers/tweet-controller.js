import TweetService from "../services/tweetService.js";
import upload from "../config/file-upload-s3-config.js";
const singleUploader = upload.single('image');
 const tweetService = new TweetService();
export const createTweet = async(req ,res)=>{
    try {
        singleUploader(req ,res , async  function(err , data){
            if(err) {return res.status(500).json({error : err })}
            console.log('Image url is ' ,req.file)
                const payload = {...req.body};
                payload.image = req.file.location;            
                const response = await tweetService.create(payload);
                return res.status(201).json({
                success:true,
                message : 'successfully created a new tweet',
                err : {} ,
                data : response
       })
        });
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false ,
            message : 'something went wrong' ,
             err : error ,
             data : {}
        })        
    }
}
export const getTweet = async (req, res)=>{
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success:true,
            message : 'successfully fetched a  tweet',
            err : {} ,
            data : response
        })
    } catch (error) {
        return res.status(500).json({
            success : false ,
            message : 'something went wrong' ,
             err : error ,
             data : {}
        })        
    }

}