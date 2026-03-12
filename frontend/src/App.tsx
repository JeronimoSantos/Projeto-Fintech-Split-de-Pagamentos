import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { SimuladorVenda } from './pages/SimuladorVendas';
import { Extrato } from './pages/Extrato';

export default function App() {
  return (
    <BrowserRouter>
      <main className="flex flex-col min-h-screen">
        {/* Este h1 apareceria em todas as páginas se ficar fora do Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vendas" element={<SimuladorVenda />} />
          <Route path='/transacoes' element={<Extrato />} />
          {/* Adicione outras rotas conforme criar as páginas */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
