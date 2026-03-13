import { vendedorService } from '../services/api'; // Importe seu serviço
import { useState } from 'react';
import { useVendedores } from '../hooks/useVendedores';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const SimuladorVenda = () => {
  const { vendedores, loading } = useVendedores();
  const [vendedorSelecionado, setVendedorSelecionado] = useState<number | null>(null);
  const [valorVenda, setValorVenda] = useState<number>(0);

  {loading ? (
    <p className="text-orange-400">Carregando parceiros...</p>
    ) : ( <div className="grid"> {/* Renderiza os cards */} </div> )
  }

  // Encontra os dados do vendedor selecionado para pegar a comissão
  const vendedor = vendedores.find(v => v.id === vendedorSelecionado);
  
  // Lógica do Split (Espelhando seu Backend)
  const comissaoPercentual = vendedor?.comissao_percentual || 0;
  const valorPlataforma = valorVenda * (comissaoPercentual / 100);
  const valorVendedor = valorVenda - valorPlataforma;

  // Validação básica antes de enviar
  const handleConfirmar = async () => {
  if (!vendedorSelecionado || valorVenda <= 0) {
    alert("Por favor, selecione um vendedor e insira um valor válido.");
    return;
  }

  try {
    // Chama a rota POST /split que você testou no Insomnia
    const response = await vendedorService.processarSplit(
      vendedorSelecionado, valorVenda
    );

    if (response.status === 201) {
      alert(`✅ Sucesso! R$ ${valorVendedor.toFixed(2)} foi adicionado ao saldo do vendedor.`);
      setValorVenda(0); // Opcional: Limpar o campo de valor após o sucesso
    }

  } catch (error) {
      console.error("Erro ao processar split:", error);
      alert("Houve um erro ao processar o pagamento.");
    }
  };

  return (
    <section className="min-h-screen bg-tijolo-fundo bg-cover bg-center bg-no-repeat">
      <Header />

      <section className="p-8">
        <section className="max-w-md mx-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">Simulador de Split 💸</h2>

          <div className="space-y-4"> {/* Seleção do Vendedor */}
            <section>
              <label className="block text-sm mb-1">Selecione o Vendedor:</label>
              <select className="w-full p-2 rounded bg-slate-800 border border-slate-700"
                onChange={(e) => setVendedorSelecionado(Number(e.target.value))}
              >
                <option value="">Escolha um parceiro...</option>
                {vendedores.map(v => ( <option key={v.id} value={v.id}>{v.nome}</option> ))}
              </select>
            </section>

            <section> {/* Input de Valor */}
              <label className="block text-sm mb-1">Valor da Venda (R$):</label>
              <input 
                type="number" 
                className="w-full p-2 rounded bg-slate-800 border border-slate-700"
                placeholder="Ex: 200"
                onChange={(e) => setValorVenda(Number(e.target.value))}
              />
            </section>

            <hr className="border-white/10 my-6" />

            <section className="space-y-2 bg-black/30 p-4 rounded-lg"> {/* Resultado em Tempo Real */}
              <div className="flex justify-between">
                <span>Taxa Plataforma ({comissaoPercentual}%):</span>
                <span className="text-orange-400 font-bold">R$ {valorPlataforma.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Líquido Vendedor:</span>
                <span className="text-green-400 font-bold">R$ {valorVendedor.toFixed(2)}</span>
              </div>
            </section>
  
            <button onClick={handleConfirmar} className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold transition-all cursor-pointer shadow-lg shadow-orange-500/20 active:scale-95 hover:scale-90 duration-500">
                Confirmar Transação na API
            </button>
          </div>
        </section>
      </section>

      <Footer />
    </section>
  );
};
