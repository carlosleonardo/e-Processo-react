import { useState } from "react";
import ListaDocumentos from "./ListaDocumentos";
import BuscarDocumentos from "./BuscarDocumentos";
import { ModeloDocumento } from "../modelo/documento.modelo";

const listaDocumentos: ModeloDocumento[] = [
    {
        id: 1,
        nome: "Documento 1",
        copiaSimples: "S",
        codigoDocNPG: 0,
        copiaOutroProcesso: "",
    },
    {
        id: 2,
        nome: "Documento 2",
        copiaSimples: "N",
        codigoDocNPG: 1,
        copiaOutroProcesso: "",
    },
];

export default function CopiaDocumento() {
    const [documentos, setDocumentos] = useState(listaDocumentos);
    const [tipoProcesso, setTipoProcesso] = useState("D");
    const [numeroProcessoDestino, setNumeroProcessoDestino] = useState("");

    if (tipoProcesso === "P") {
        alert(
            "Apenas processos digitais podem copiar documentos de outros processos. "
        );
    }
    function buscarDocumentos(numeroProcesso: string) {
        if (numeroProcesso === numeroProcessoDestino) {
            alert(
                "A cópia de documento(s) só é permitida entre processos diferentes."
            );
            return;
        }
        console.log(numeroProcesso);
    }

    return (
        <>
            <div id="main">
                <p className="titulo">Copiar Documento(s) de outro Processo</p>
                <BuscarDocumentos
                    chaveEquipeAtividade={""}
                    numeroProcessoDestinoCopia={numeroProcessoDestino}
                    responsavelProcesso={""}
                    nomeEquipeAtual={""}
                    nomeAtividadeAtual={""}
                    tipoProcesso={tipoProcesso}
                    buscarDocumentos={buscarDocumentos}
                />
                <ListaDocumentos documentos={documentos} />
            </div>
        </>
    );
}
