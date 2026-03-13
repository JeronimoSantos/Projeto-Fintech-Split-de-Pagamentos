import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section className="w-full min-h-screen bg-linear-to-br from-orange-600 via-bg-amber-200 to-black">
      
      {/* Header ocupando 100% da largura */}
      <header className=" p-6 m-2 flex justify-between items-center shadow-lg rounded-b-lg">
        <h1 className="text-amber-300 text-3xl font-bold italic">TijoloPay</h1>

        <nav className="flex gap-4">
          <Link to="/dashboard" className="text-white hover:text-amber-300 transition-colors">Ver Vendedores</Link>
          <Link to="/vendas" className="text-white hover:text-amber-300 transition-colors">Simular Venda</Link>
          <Link to="/transacoes" className="text-white hover:text-amber-300 transition-colors">Extratos</Link>
        </nav>
      </header>

      {/* Conteúdo centralizado mas com fundo que expande */}
      <main className="w-full p-10 min-h-[calc(100vh-88px)]">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-black mb-4">Fintech TijoloPay</h1>
          <p className="text-xl mb-6 font-medium text-amber-900">
            Bem-vindo ao motor de gerenciamento financeiro de alta performance.
          </p>
          
          <section className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-amber-600">
              <h3 className="font-bold text-2xl mb-2 text-amber-950">Gestão de Vendedores</h3>
              <p className="text-slate-600">Controle total de parceiros e comissões dinâmicas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-amber-600">
              <h3 className="font-bold text-2xl mb-2 text-amber-950">Split Inteligente</h3>
              <p className="text-slate-600">Divisão automatizada entre plataforma e parceiro.</p>
            </div>
          </section>
        </section>
      </main>

      <footer className="p-6 text-center text-amber-900 font-semibold">
        © 2026 Fintech Split API - Todos os direitos reservados.
      </footer>
    </section>
  );
};
