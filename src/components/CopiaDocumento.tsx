import { ChangeEvent, useState } from "react";
import ListaDocumentos from "./ListaDocumentos";
import BuscarDocumentos from "./BuscarDocumentos";

export default function CopiaDocumento() {
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
                    tipoProcesso={""}
                />
                <ListaDocumentos />
            </div>
        </>
    );
}
