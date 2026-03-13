// Componente da Navegação para todos as paginas
import { Link } from "react-router-dom";

// Estilos do Footer para as paginas
export default function Footer() {
    return (
        <footer className="p-6 text-center text-amber-900 font-semibold cursor-pointer hover:text-amber-600">
           <Link to="https://github.com/JeronimoSantos/Projeto-Fintech-Split-de-Pagamentos" text-gray-400 hover:text-amber-600 font-black transition-colors text-center>© 2026 Fintech TijoloPay - Todos os direitos reservados. Desenvolvido por Jerônimo Santos</Link> 
        </footer>
    );
};
