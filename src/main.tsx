import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Notas from "./components/Notas.tsx";
import Principal from "./components/Principal.tsx";
import CopiaDocumento from "./components/CopiaDocumento.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Principal />} />
                    <Route path="notas" element={<Notas />} />
                    <Route path="copiar" element={<CopiaDocumento />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
