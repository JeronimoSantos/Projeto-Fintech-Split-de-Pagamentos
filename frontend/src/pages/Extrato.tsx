import { useEffect, useState } from 'react';
import { vendedorService } from '../services/api';
import type { Transacao } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Extrato = () => {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);

  useEffect(() => {
    vendedorService.listarTransacoes().then(res => setTransacoes(res.reverse())) // Mais recentes primeiro
  }, []);

  return (
    <section className="min-h-screen bg-tijolo-fundo bg-cover bg-center bg-no-repeat">
      <Header />

      <section className="p-8">
        <section className="max-w-5xl mx-auto">
          <header className="flex justify-between items-end mb-10">
            <div>
              <h1 className="text-3xl font-black text-orange-500">EXTRATO GLOBAL</h1>
              <p className="text-slate-400">Acompanhe todos os tijolos assentados no sistema.</p>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl">
              <span className="text-xs uppercase text-orange-400 font-bold block">Lucro Total Plataforma</span>
              <span className="text-2xl font-black text-gray-400">
                R$ {transacoes.reduce((acc, t) => acc + t.split.plataforma, 0).toFixed(2)}
              </span>
            </div>
          </header>

          <section className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead className="bg-white/5 text-slate-400 text-sm uppercase">
                <tr>
                  <th className="p-4 font-medium">Data</th>
                  <th className="p-4 font-medium">Vendedor</th>
                  <th className="p-4 font-medium">Valor Bruto</th>
                  <th className="p-4 font-medium">Split Plataforma</th>
                  <th className="p-4 font-medium text-green-400">Líquido Vendedor</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {transacoes.map(t => (
                  <tr key={t.id || t.vendedorId} className="hover:bg-white/2 transition-colors group">
                    <td className="p-4 text-slate-400 text-sm">
                      {new Date(t.data).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="p-4 font-bold text-orange-100">ID: {t.vendedorId}</td>
                    <td className="p-4 font-mono text-slate-300">R$ {t.valorBruto.toFixed(2) || "0.00"}</td>
                    <td className="p-4 text-orange-500 font-bold">- R$ {t.split?.plataforma.toFixed(2) || "0.00"}</td>
                    <td className="p-4 text-green-400 font-black">R$ {t.split?.vendedor.toFixed(2) || "0.00"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          
            {transacoes.length === 0 && (
              <div className="p-20 text-center text-slate-500">
                Nenhuma transação encontrada. Comece a construir! 🏗️
              </div>
            )}
          </section>
        </section>
      </section>

      <Footer />
    </section>
  );
};
