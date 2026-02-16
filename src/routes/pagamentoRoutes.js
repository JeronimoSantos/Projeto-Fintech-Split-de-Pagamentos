import express from 'express';
import * as Controller from '../controller/pagamentoController.js';

const router = express.Router();

// Rotas de Gerenciamento de Vendedores
router.get('/vendedores', Controller.listarVendedores);
router.get('/vendedores/:id', Controller.buscarVendedor);
router.put('/vendedores/:id', Controller.atualizarVendedor);
router.delete('/vendedores/:id', Controller.excluirVendedor);

router.post('/split', Controller.processarPagamento);

export default router;
