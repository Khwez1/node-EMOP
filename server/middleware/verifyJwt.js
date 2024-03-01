import { logIn } from "../models/database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const auth = async(req,res,next) => {
    const {emailAdd, userPass} = req.body
    const hashedPassword = await logIn(emailAdd)
    bcrypt.compare(userPass, hashedPassword, (err,result)=>{
        if(err) throw err
        if(result === true){
            const {emailAdd} = req.body
            const token = jwt.sign({emailAdd:emailAdd}, process.env.SECRET_KEY,{expiresIn: '1h'})
            
            console.log(token);

            res.send({
                token: token,
                msg: 'You have logged in! YAY!'
            })


            next();

        }else{
            res.send({msg: 'The emailAdd or password is incorrect'})
        }
    })
}

export default auth;