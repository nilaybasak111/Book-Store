import dotenv from 'dotenv'
import cors from "cors"
import path from "path"
import express from 'express'
const app = express();
dotenv.config();

// Defining Path of Files
const _dirname = path.resolve();

app.use(express.json());
// Using Cors
const corsOptions = {
    origin : "http://localhost:5173",
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

// Serving Frontend Files to Backend
app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`);
})

//4:00:00