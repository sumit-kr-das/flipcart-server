import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;
import connection from './database/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';

import dotenv from 'dotenv';
import defaultData from './default';
import Routes from './routes/routes';

app.use(bodyParser.json({ extended:true }));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());

app.use("/",Routes);

//Environment config and variables
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username,password);

app.listen(PORT,()=>console.log(`Listening on port no ${PORT}`));

//default data to Database
defaultData();
