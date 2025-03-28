import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/dbConfig.js';
import userRoute from '../server/Routes/routes.js'


dotenv.config()

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/',userRoute);

app.listen(4000, () => {
    console.log("Server started at http://localhost:4000");

})