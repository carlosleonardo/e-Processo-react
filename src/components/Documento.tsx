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
                        <td>
                            <input type="checkbox" />
                        </td>
                    ) : (
                        <td>
                            <input type="checkbox" />
                        </td>
                    )}
                </>
            );
        } else {
            conteudo = <></>;
        }
    }

    return <>{conteudo}</>;
}
