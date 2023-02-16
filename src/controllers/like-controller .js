import LikeService from "../services/like-service.js";

const likeService = new LikeService();
 const toggleLike = async(req, res)=>{
    try {
        const resp = await likeService.toggleLike(req.query.modelId , req.query.modelType , req.body.userId);
        return res.status(200).json({
            success: true ,
            data: resp, 
            err:{},
            message : 'successfully toggled like'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success: false,
            message : 'something went wrong',
            err : error
        })
    }

}
export default toggleLike;