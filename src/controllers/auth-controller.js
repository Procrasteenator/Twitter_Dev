 import UserService from "../services/user-service.js";
 const userService =new UserService();
 export const signup = async(req ,res)=>{
    try {
        const response = await userService.signup({
            email : req.body.email,
            password : req.body.password,
            name : req.body.name 
        });
        return res.status(200).json({
            success :true,
            data : response ,
            err : {} ,
            message : 'successfully signed up'
        })
    } catch (error) {
        res.status(500).json({
            message : 'error in signing up',
            success : false ,
            data:{},
            err:error
        })
    }
 }