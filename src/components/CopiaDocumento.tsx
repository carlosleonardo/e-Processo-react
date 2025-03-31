import { useState } from "react";
import ListaDocumentos from "./ListaDocumentos";
import BuscarDocumentos from "./BuscarDocumentos";

export default function CopiaDocumento() {
    const [documentos, setDocumentos] = useState([]);
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
                    numeroProcessoDestinoCopia={""}
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
