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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarVendedores();
  }, []);

  return { vendedores, loading, erro, atualizar: carregarVendedores };
};
