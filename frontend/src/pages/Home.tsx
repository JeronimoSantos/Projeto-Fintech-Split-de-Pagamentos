import Footer from '../components/Footer';
import Header from '../components/Header';

export const Home = () => {
  return (
    <section className="w-full min-h-screen bg-tijolo-fundo bg-cover bg-center bg-no-repeat">
      <Header />

      {/* Conteúdo centralizado mas com fundo que expande */}
      <main className="w-full min-h-[calc(100vh-88px)]">
          <section className="pt-40 md:pt-60 pb-40 md:pb-60 m-2 bg-tijolo-primeiro bg-cover bg-center bg-no-repeat">
            <h1 className="text-6xl md:text-8xl text-center font-black bg-linear-to-r p-4 from-orange-500 via-amber-800 to-white bg-clip-text text-transparent">Fintech TijoloPay</h1>
            <p className="text-xl text-center mb-6 font-medium text-amber-700">
              Bem-vindo ao motor de Gerenciamento financeiro de Alta performance.
            </p>
          </section>
        

          <section className="pt-40 pb-40">
            <h2 className="text-5xl md:text-7xl text-center mask-l-from-neutral-100 text-amber-600 mb-8">Nossa História</h2>
            <p className="text-slate-400 md:text-2xl m-2 text-center">TijoloPay surgiu como uma aposta na tangibilidade usando a A Psicologia do Nome.</p>
            <p className="text-slate-400 md:text-2xl m-2 text-center">tijolo remete à construção da casa própria, à segurança e ao esforço do brasileiro. Partindo 
              do conceito: "Cada venda é um tijolo no seu patrimônio".
            </p>
          </section>

          <section className="pt-40 pb-40">
            <h2 className="text-5xl md:text-7xl text-center mask-radial-from-neutral-50 text-amber-600 mb-8">Nosso Objetivo</h2>
            <p className="text-slate-400 md:text-2xl m-2 text-center">
              O objetivo principal da TijoloPay é oferecer uma infraestrutura sólida 
              e tecnológica para a gestão financeira de parceiros, focando especialmente no split de pagamentos.
            </p>
          </section>

          <section className="flex flex-col md:flex-row items-center justify-center gap-20 md:mb-60 mb-20 md:m-40">
            <h2 className="text-5xl md:text-8xl text-center md:text-left mask-l-from-neutral-100 text-amber-600 ">Qual desafio Enfrentamos</h2>
            <p className="text-center :mb-0 text-gray-400">As plataformas de marketplace precisam dividir os pagamentos automaticamente. 
              Esta Aplicação resolve esse problema calculando a comissão da plataforma e o saldo líquido do 
              vendedor no momento da transação, garantindo a integridade dos dados financeiros.
            </p>
          </section>
          
          <h2 className="text-5xl md:text-7xl text-center mask-radial-from-neutral-50 text-amber-600 mb-12">Principais Funcionalidades</h2>

          <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-amber-600">
              <h3 className="font-bold text-2xl mb-2 text-amber-950">Gestão de Vendedores</h3>
              <p className="text-slate-600">Controle total de parceiros e comissões dinâmicas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-amber-600">
              <h3 className="font-bold text-2xl mb-2 text-amber-950">Split Inteligente</h3>
              <p className="text-slate-600">Divisão automatizada entre plataforma e parceiro.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-amber-600">
              <h3 className="font-bold text-2xl mb-2 text-amber-950">Gestão de Saldos</h3>
              <p className="text-slate-600">Atualização automática do saldo do vendedor após cada confirmação de venda.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-amber-600">
              <h3 className="font-bold text-2xl mb-2 text-amber-950">Extrato Global</h3>
              <p className="text-slate-600">Histórico detalhado de transações para auditoria e controle de lucro.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-amber-600">
              <h3 className="font-bold text-2xl mb-2 text-amber-950">UI/UX Premium</h3>
              <p className="text-slate-600">Interface inspirada na Inter.co, efeitos de glassmorphism e alta responsividade.</p>
            </div>
          </section>
      </main>

      <Footer />
    </section>
  );
};
