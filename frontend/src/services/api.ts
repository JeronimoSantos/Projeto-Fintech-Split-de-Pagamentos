import axios from 'axios';
import type { Vendedor } from '../types'; // Importe a interface que definimos antes

const api = axios.create({
  baseURL: 'http://localhost:3000/pagamentos',
});

export const vendedorService = {
  // GET: Listar todos
  listar: async (): Promise<Vendedor[]> => {
    const response = await api.get<Vendedor[]>('/vendedores');
    return response.data;
  },
  
  // Exemplo de POST para o futuro
  processarSplit: async (vendedorId: number, valorTotal: number) => {
    return api.post('/split', { vendedorId, valorTotal });
  }
};
