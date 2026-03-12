import { useState } from 'react';
import { useVendedores } from '../hooks/useVendedores';

export function Dashboard() {
  const { vendedores, adicionarVendedor, deletarVendedor, editarVendedor } = useVendedores();

  const [novoNome, setNovoNome] = useState(""); // Estados para o formulário de criação
  const [novaComissao, setNovaComissao] = useState<number>(10);

  const [editandoId, setEditandoId] = useState<number | null>(null); // Estados para o controle de edição dos cards
  const [nomeEditado, setNomeEditado] = useState("");
  const [comissaoEditada, setComissaoEditada] = useState<number>(0);

  const handleSalvarEdicao = async (id: number) => {
    const sucesso = await editarVendedor(id, nomeEditado, comissaoEditada);
    if (sucesso) setEditandoId(null);
  };

  const iniciarEdicao = (vendedor: any) => {
    setEditandoId(vendedor.id);
    setNomeEditado(vendedor.nome);
    setComissaoEditada(vendedor.comissao_percentual);
  };

  return (
    <section className="min-h-screen bg-slate-900 text-white p-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold border-b-2 border-orange-500 pb-2 inline-block">
          Gerenciamento de Vendedores
        </h1>
      </header>

      {/* Formulário de Cadastro com Comissão Dinâmica */}
      <section className="bg-slate-800 p-6 rounded-lg mb-10 flex gap-4 items-end shadow-xl">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Nome do Vendedor</label>
          <input
            type="text"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            className="w-full bg-slate-700 p-2 rounded border border-slate-600 focus:border-orange-500 outline-none"
            placeholder="Ex: João Silva"
          />
        </div>

        <div className="w-32">
          <label className="block text-sm font-medium mb-2">Comissão (%)</label>
          <input
            type="number"
            value={novaComissao}
            onChange={(e) => setNovaComissao(Number(e.target.value))}
            className="w-full bg-slate-700 p-2 rounded border border-slate-600 focus:border-orange-500 outline-none"
          />
        </div>

        <button
          onClick={() => {
            adicionarVendedor(novoNome, novaComissao);
            setNovoNome("");
            setNovaComissao(10);
          }}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded font-bold transition-colors"
        > Adicionar +
        </button>
      </section>

      {/* Listagem de Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendedores.map((v) => (
          <section key={v.id} className="bg-slate-800 p-6 rounded-lg border-l-4 border-orange-500 shadow-lg transition-all">
            {editandoId === v.id ? ( /* MODO EDIÇÃO */
              <section className="space-y-4">
                <input
                  className="w-full bg-slate-700 p-2 rounded border border-orange-500 outline-none"
                  value={nomeEditado}
                  onChange={(e) => setNomeEditado(e.target.value)}
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm">Comissão %:</span>
                  <input
                    type="number"
                    className="w-20 bg-slate-700 p-1 rounded border border-orange-500 outline-none"
                    value={comissaoEditada}
                    onChange={(e) => setComissaoEditada(Number(e.target.value))}
                  />
                </div>

                <div className="flex gap-2 justify-end pt-2">
                  <button onClick={() => handleSalvarEdicao(v.id)} className="text-green-400 hover:text-green-300 font-bold">Salvar</button>
                  <button onClick={() => setEditandoId(null)} className="text-slate-400 hover:text-white">Cancelar</button>
                </div>
              </section>
            
            ) : ( /* MODO VISUALIZAÇÃO */
              <>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{v.nome}</h3>
                    <span className="text-xs text-slate-400 uppercase tracking-widest">Taxa: {v.comissao_percentual}%</span>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => iniciarEdicao(v)} className="text-slate-400 hover:text-blue-400 transition-colors">✏️</button>
                    <button onClick={() => deletarVendedor(v.id)} className="text-slate-400 hover:text-red-500 transition-colors">🗑️</button>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-slate-400">Saldo Atual</p>
                  <p className="text-2xl font-bold text-orange-400">R$ {v.saldo.toFixed(2)}</p>
                </div>
              </>
            )}
          </section>
        ))}
      </section>
    </section>
  );
};
