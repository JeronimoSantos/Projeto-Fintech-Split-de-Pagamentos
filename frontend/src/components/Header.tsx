// Componente do Header para todos as paginas
import { Link } from "react-router-dom";
import Nav from "./Nav";

// Estilos do Header para as paginas
export default function Header() {
    return (
        <header className=" p-4 md:p-6 m-2 flex gap-4 md:gap-0 justify-between items-center bg-white/10 backdrop-blur-md shadow-lg rounded-b-lg">
            <Link to="/" className="text-gray-400 hover:text-amber-600 font-black transition-colors cursor-pointer">TijoloPay</Link>
            <Nav />
        </header>
    );
};
