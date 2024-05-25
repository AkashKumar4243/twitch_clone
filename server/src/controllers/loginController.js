import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const Login = async (req,res) => {
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email});

        // console.log(user);

        if(!user) {
            return res.status(400).send("email is not registered!!!")
        }

        const checkPassword = await bcrypt.compare(password,user.password)

        if(!checkPassword) {
            res.status(401).send("Incorrect Email or password!!!");
        }

        const token = jwt.sign({
            username : user.username,
            email
         },
         process.env.MYJWTTOKEN,
         {
            expiresIn : "7h"
         });

         return res.status(200).json({
            email,
            username : user.username,
            token
         })
    } catch (error) {
        console.log("try again....");
        return res.status(500).send(error)
    }
}

export default Login