import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;
import connection from './database/db.js';
import dotenv from 'dotenv';
import defaultData from './default';

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username,password);

app.listen(PORT,()=>console.log(`Listening on port no ${PORT}`));

//default data to Database
defaultData();
