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
 export const login = async(req ,res ) => {
    try {
        const token = await userService.signIn(req.body); 
        return res.status(200).json({
            success :true,
            message : 'successfully logged in' ,
            data : token , 
            err : {}
        });

    } catch (error) {
        console.log('something went wrong in the auth controller ');
        res.status(500).json({
            message : 'something went wrong in auth controller' ,
            success : false ,
            err : error 
            })       
    }
 }