import dotenv from 'dotenv'
import cors from "cors"
import path from "path"
import express from 'express'
const app = express();
dotenv.config();
//app.use(cors());
app.use(express.json());

const _dirname = path.resolve()

const corsOptions = {
    origin : process.env.API_PATH_BACK,
    credentials : true
}
app.use(cors(corsOptions));

// Importing Routes
import bookRoute from "./route/BookRoute.js"
import userRoute from "./route/UserRoute.js"

const PORT = process.env.PORT || 4000;

// Initiateing Database Connection
import ConnectDB from './Database/ConnectDB.js';
ConnectDB();

// Defining Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Serving Files Backend to Frontend
app.use(express.static(path.join(_dirname, "Frontend/dist")));
app.get('*', (req, res)=>{
    res.sendFile(path.join(_dirname, "Frontend", "dist", "index.html"))
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`);
})