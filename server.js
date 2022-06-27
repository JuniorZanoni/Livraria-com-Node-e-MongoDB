/* eslint-disable no-console */
import 'dotenv/config';
import db from './src/config/dbConnect.js';
import app from './src/app.js';

db.once('open', () => {
  console.log('Conectado no banco');
});

const PORTA = process.env.PORTA || 3000;

app.listen(PORTA, () => {
  console.log(`App escutando na porta: ${PORTA}`);
});
