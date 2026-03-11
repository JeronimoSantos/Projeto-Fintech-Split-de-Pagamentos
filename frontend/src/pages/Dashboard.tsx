import { useVendedores } from '../hooks/useVendedores';

export const Dashboard = () => {
  const { vendedores, loading, erro } = useVendedores();

  if (loading) return <p>Carregando dados da Fintech...</p>;
  if (erro) return <p style={{ color: 'red' }}>{erro}</p>;

  return (
    <div className="flex flex-col min-h-screen p-5">
      <h1 className="text-amber-300">💰 Painel de Vendedores</h1>
      <div className="grid">
        {vendedores.map(vendedor => (
          <div key={vendedor.id} className="card">
            <h3>{vendedor.nome}</h3>
            <p>Saldo: <strong>R$ {vendedor.saldo.toFixed(2)}</strong></p>
            <span>Comissão: {vendedor.comissao_percentual}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
