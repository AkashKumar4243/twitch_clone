import express from "express"
import Register from "../controllers/registerController.js"
import Login from "../controllers/loginController.js"
import ExpressValidation from "express-joi-validation"
import joi from "joi"

const router = express.Router();

const validator = ExpressValidation.createValidator({})

const RegisterSchema = joi.object({
    username : joi.string().min(3).max(12).required(),
    password : joi.string().min(6).max(12).required(),
    email : joi.string().email().required()
})

const LoginSchema = joi.object({
    email : joi.string().min(6).max(12).required(),

})

router.post('/register',validator.body(RegisterSchema), Register)

router.post('/login',Login)

export default router;