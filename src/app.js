import express from 'express';
import livrosRouter from './routes/livrosRoute.js';

const app = express();

app.use('/', livrosRouter);

export default app;
