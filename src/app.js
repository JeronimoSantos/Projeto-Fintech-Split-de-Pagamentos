import express from 'express';
import cors from 'cors';
import { processarPagamento } from './controller/pagamentoController.js';

const app = express();
app.use(cors());

app.use(express.json());

app.use('/pagamentos', processarPagamento);

const PORT = 3000;
app.listen(PORT, () => console.log("Fintech API está rodando na porta: " + PORT))
