import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import router from './routes/index.js'


dotenv.config();
const app = express();

//configs
app.use(cors());
app.use(express.json());

app.use(router);


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Connected to port: ${port}`);
});
