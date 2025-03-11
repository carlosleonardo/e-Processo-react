import { Outlet } from "react-router";
import "./App.css";
import MenuPrincipal from "./components/MenuPrincipal";
import Rodape from "./components/Rodape";

function App() {
    return (
        <>
            <MenuPrincipal />
            <Outlet />
            <Rodape />
        </>
    );
}

export default App;
