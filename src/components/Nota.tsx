import { JSX, useReducer } from "react";
import { ModeloNota } from "../modelo/nota";
import { notasReducer, TipoAcao } from "../reducers/notasReducer";

export interface NotaProps {
    nota: ModeloNota;
    mostrarBotoes: boolean;
    escopoNota: string;
}

function Nota({ nota, mostrarBotoes, escopoNota }: NotaProps) {
    let painelBotoes = "";

    if (mostrarBotoes) {
        if (nota.permissaoAlteracao) {
            painelBotoes.push(
                <td key="editar">
                    <button className="btn">Editar</button>
                </td>
            );
        } else painelBotoes = "";
        if (nota.permissaoExclusao) {
            painelBotoes += (
                <td>
                    <button className="btn">Excluir</button>
                </td>
            );
        }
    } else painelBotoes = "";
    return (
        <>
            <td>{nota.nota}</td>
            <td>{nota.dataRegistro.toLocaleDateString()}</td>
            {escopoNota !== "NM" ? <td>{nota.autor}</td> : <td></td>}
            {painelBotoes}
        </>
    );
}
export default Nota;
