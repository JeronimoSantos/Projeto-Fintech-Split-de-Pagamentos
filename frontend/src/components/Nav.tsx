// Componente da Navegação para todos as paginas
import { Link } from "react-router-dom";

// Estilos do Nav para as paginas
export default function Nav() {
    return (
        <nav className="flex items-center gap-4">
            <Link to="/dashboard" className="text-gray-400 hover:text-amber-600 font-black transition-colors text-center cursor-pointer">Ver Vendedores</Link>
            <Link to="/vendas" className="text-gray-400 hover:text-amber-600 font-black transition-colors text-center cursor-pointer">Simular Venda</Link>
            <Link to="/transacoes" className="text-gray-400 hover:text-amber-600 font-black transition-colors cursor-pointer">Extratos</Link>
        </nav>
    );
};
