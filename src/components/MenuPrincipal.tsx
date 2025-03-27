import { Link } from "react-router";

function MenuPrincipal() {
    return (
        <div>
            <nav>
                <Link to={"/"}>Principal</Link>
                <Link to={"/notas"}>Notas</Link>
                <Link to={"/copiar"}>Copiar Documentos</Link>
            </nav>
        </div>
    );
}

export default MenuPrincipal;
