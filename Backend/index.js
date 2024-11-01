import dotenv from 'dotenv'
import cors from "cors"
import express from 'express'
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

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

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`);
})

//4:00:00