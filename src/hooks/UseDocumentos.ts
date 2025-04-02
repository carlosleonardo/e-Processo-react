import { useState } from "react";
import { ModeloDocumento } from "../modelo/documento.modelo";

const listaDocumentos: ModeloDocumento[] = [
    // {
    //     id: 1,
    //     nome: "Documento 1",
    //     copiaSimples: "S",
    //     codigoDocNPG: 0,
    //     copiaOutroProcesso: "",
    // },
    // {
    //     id: 2,
    //     nome: "Documento 2",
    //     copiaSimples: "N",
    //     codigoDocNPG: 1,
    //     copiaOutroProcesso: "",
    // },
    {
        id: 3,
        nome: "Ficha de Identificação",
        copiaSimples: "N",
        codigoDocNPG: 1,
        copiaOutroProcesso: "",
    },
];

export default function useDocumentos() {
    const [documentos, setDocumentos] = useState(listaDocumentos);
    return { documentos };
}
