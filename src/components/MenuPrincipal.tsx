import { Link } from "react-router";

function MenuPrincipal() {
    return (
        <div>
            <nav>
                <Link to={"/"}>Principal</Link>&nbsp;
                <Link to={"/notas"}>Notas</Link>&nbsp;
                <Link to={"/copiar"}>Copiar Documentos</Link>&nbsp;
            </nav>
        </div>
    );
}

export default MenuPrincipal;
