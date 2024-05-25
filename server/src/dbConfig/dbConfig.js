import mongoose from "mongoose"

const connect = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then( ()=> {
        console.log("Mongo Db is connected ");
    }).catch((err) => {
        console.log("Database Connection Failed ");
        console.log(err);
    });
}

export default connect;