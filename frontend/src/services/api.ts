import axios from 'axios';
import type { Transacao, Vendedor } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000/pagamentos',
});

// Lógica de Negócio
export const vendedorService = {
  // GET: Listar todos
  listar: async (): Promise<Vendedor[]> => {
    const response = await api.get<Vendedor[]>('/vendedores');
    return response.data;
  },

  // GET: Listar todos os extratos
  listarTransacoes: async (): Promise<Transacao[]> => {
    const response = await api.get('/transacoes');
    return response.data;
  },
  
  // POST para criar
  criar: async (dados: { nome: string; comissao_percentual: number }) => {
    return api.post('/vendedores', dados);
  },

  atualizar: async (id: number, dados: { nome: string; comissao_percentual: number }) => {
  return api.put(`/vendedores/${id}`, dados); //
  },

  // DELETE para remover
  excluir: async (id: number) => {
    return api.delete(`/vendedores/${id}`);
  },

  // Exemplo de POST para o futuro
  processarSplit: async (vendedorId: number, valorTotal: number) => {
    return api.post('/split', { vendedorId, valorTotal });
  }
};
