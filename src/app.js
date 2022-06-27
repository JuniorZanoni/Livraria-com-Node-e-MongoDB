import express from 'express';
import bodyParser from 'body-parser';
import livrosRouter from './routes/livrosRoute.js';

const app = express();

app.use(bodyParser.json());
app.use('/', livrosRouter);

export default app;
