import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import {router} from './route/web.js';

const app = express();
const port = 2000;

app.use(cors());
app.use(express.json());

app.use('', router);



app.listen(port ,()=>{
  console.log(`hi you can run server in localhost:${port}`);
})
