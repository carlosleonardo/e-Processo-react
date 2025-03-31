import { JSX } from "react";
import { ModeloDocumento } from "../modelo/documento.modelo";

export interface PropsDocumento {
    documento: ModeloDocumento;
    verificaClasse: boolean;
}

export default function Documento(props: PropsDocumento) {
    let contador = 0;
    let conteudo: JSX.Element | null = null;

    if (
        props.documento.copiaSimples !== "S" &&
        props.documento.copiaSimples !== "N"
    ) {
        props.documento.copiaSimples = "NI";
    }

    if (
        props.documento.nome.toLocaleLowerCase() !== "ficha de identificação" &&
        props.documento.nome.toLocaleLowerCase() !== "termo de desentranhamento"
    ) {
        if (props.verificaClasse) {
            conteudo = (
                <>
                    {props.documento.codigoDocNPG !== 0 ? (
                        <td style={{ textAlign: "center" }}>
                            <input type="checkbox" name="documento" />
                        </td>
                    ) : (
                        <td style={{ textAlign: "center" }}>
                            <input type="checkbox" name="documento" />
                        </td>
                    )}
                    <td style={{ textAlign: "center" }}>
                        {props.documento.nome}
                    </td>
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
                            <img
                                style={{ cursor: "pointer" }}
                                src="img/zip.png"
                                title="Clique para download"
                            />
                        )}
                        &nbsp;
                        <a href="#">
                            <center>
                                <img
                                    src="img/Diversos/palavraChave.png"
                                    title="Palavras-Chave"
                                />
                            </center>
                        </a>
                    </td>
                </>
            );
        } else {
            conteudo = <></>;
        }
        contador++;
    }

    let rodape = null;
    if (contador > 0) {
        rodape = (
            <form>
                <table style={{ textAlign: "center" }}>
                    <tbody>
                        <tr>
                            <td>
                                <button type="button" className="btn">
                                    Copiar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }

    return <>{conteudo}</>;
}
