import 'dotenv/config';
import db from './src/config/dbConnect.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => { console.log('Conexão com o banco feita com sucesso'); });

