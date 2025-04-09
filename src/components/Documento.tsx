import { ChangeEvent, JSX, useState } from "react";
import { ModeloDocumento } from "../modelo/documento.modelo";

export interface PropsDocumento {
    documento: ModeloDocumento;
    marcado: boolean;
    aoSelecionar: (evento: ChangeEvent<HTMLInputElement>) => void;
}

export default function Documento(props: PropsDocumento) {
    let conteudo: JSX.Element | null = null;

    conteudo = (
        <>
            <td style={{ textAlign: "left" }}>
                {props.documento.nome.toLocaleLowerCase() !==
                    "ficha de identificação" && (
                    <input
                        type="checkbox"
                        name="documento"
                        checked={props.marcado}
                        onChange={props.aoSelecionar}
                    />
                )}
            </td>

            <td style={{ textAlign: "left" }}>{props.documento.nome}</td>
            <td style={{ textAlign: "center" }}>
                {props.documento.copiaSimples}
            </td>
            <td style={{ textAlign: "center" }}>
                <a href="#" title="Abrir documento">
                    <img src="img/Diversos/lupa.png" />
                </a>
            </td>
            <td style={{ textAlign: "center" }}>
                {props.documento.codigoDocNPG != 0 && (
                    <a href="#" title="Clique para download">
                        <img style={{ cursor: "pointer" }} src="img/zip.png" />
                    </a>
                )}
                &nbsp;
                <a href="#" title="Palavras-Chave">
                    <center>
                        <img src="img/Diversos/palavraChave.png" />
                    </center>
                </a>
            </td>
        </>
    );

    return <>{conteudo}</>;
}
