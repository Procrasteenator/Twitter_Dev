import multer from "multer";
import multerS3 from "multer-s3";
import aws from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

aws.config.update({
    region : "ap-south-1" ,
    secretAccessKey:"3tMs+n9ygk36GFm0wb8vFvAhA7/5rvFbyHgJpbCM",
    accessKeyId:"AKIATAE7FWB76SYP6IWB"
});

const s3 = new aws.S3();

const upload  = multer({
    storage : multerS3({
        s3:s3,
        bucket :'twitterbucketdemo',
        acl : 'public-read',
        metadata :function(req, file, cb){
            cb(null , {fieldName : file.fieldname});    
        },
        key : function( req, file ,cb){
            cb(null , Date.now().toString());
        }

    })
});
export default upload