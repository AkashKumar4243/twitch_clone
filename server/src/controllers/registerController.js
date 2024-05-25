import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const Register = async (req,res) => {


   // const user = await User.create({
   //    username : "Akash",
   //    email : "test@gmail.com",
   //    password : "123456"
   // })

   try {
      const {username,email,password} = req.body;

      const userExist = await User.findOne({email});

      if(userExist) {
         return res.status(409).send("Email already registered...");
      } 

      const hashedPassword = await bcrypt.hash(password,10);

      await User.create({
         username,
         email,
         password : hashedPassword
      });

      const token = jwt.sign({
         username,
         email
      },
      process.env.MYJWTTOKEN,
      {
         expiresIn : "7h"
      });

      return res.status(201).json({
         email,
         username,
         token
      });

   } catch (error) {
      console.log(error);
      return res.send("Try again....").status(500);
   }
}

export default Register

