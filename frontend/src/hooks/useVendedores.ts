import { useState, useEffect } from 'react';
import type { Vendedor } from '../types';
import { vendedorService } from '../services/api';

export const useVendedores = () => {
  const [vendedores, setVendedores] = useState<Vendedor[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const carregarVendedores = async () => {
    try {
      setLoading(true);
      const dados = await vendedorService.listar();
      setVendedores(dados);
    } catch (e) {
      setErro("Erro ao carregar vendedores. O backend está rodando?");
    } finally { setLoading(false); }
  };

  const editarVendedor = async (id: number, nome: string, comissao: number) => {
  try {
    const response = await vendedorService.atualizar(id, { nome, comissao_percentual: comissao });
    setVendedores(prev => prev.map(v => v.id === id ? response.data : v));
    return true;
    } catch (e) { alert("Erro ao atualizar vendedor.");
      return false;
    }
  };

  const adicionarVendedor = async (nome: string, comissao: number) => {
    try {
      const response = await vendedorService.criar({ nome, comissao_percentual: comissao });
      setVendedores(prev => [...prev, response.data]); // Adiciona na lista sem dar refresh
    } catch (e) { alert("Erro ao adicionar vendedor."); }
  };

  const deletarVendedor = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir este parceiro?")) return;

    try {
      await vendedorService.excluir(id)
      setVendedores(prev => prev.filter(v => v.id !== id)); // Remove da lista local
    } catch (e) { alert("Erro ao excluir vendedor."); }
  };

  useEffect(() => { carregarVendedores() }, []);
  return { vendedores, editarVendedor, adicionarVendedor, deletarVendedor, loading, erro, atualizar: carregarVendedores };
};
