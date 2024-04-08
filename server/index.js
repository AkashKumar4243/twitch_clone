import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import http from "http"


import authRoutes from "./src/routes/authRoutes.js"


dotenv.config();

console.log(process.env.PORT);

const PORT = 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/auth',authRoutes);

const server = http.createServer(app);


app.get('/', (req,res) => {
    return res.send("this is home Page")
})

server.listen(PORT, () => {
    console.log(`Server is listening at port : ${PORT}`);
})
