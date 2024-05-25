import mongoose from "mongoose"

const user = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
})

const User = mongoose.model('User',user);

export default User;