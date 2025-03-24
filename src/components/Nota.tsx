import { JSX, useReducer } from "react";
import { ModeloNota } from "../modelo/nota";
import { notasReducer, TipoAcao } from "../reducers/notasReducer";

export interface NotaProps {
    nota: ModeloNota;
    mostrarBotoes: boolean;
    escopoNota: string;
    excluirNota: (id: number) => void;
    alterarNota: (nota: ModeloNota) => void;
}

function Nota({
    nota,
    mostrarBotoes,
    escopoNota,
    excluirNota,
    alterarNota,
}: NotaProps) {
    const painelBotoes: JSX.Element[] = [];

    if (mostrarBotoes) {
        if (nota.permissaoAlteracao) {
            painelBotoes.push(
                <td key="editar">
                    <button className="btn">Editar</button>
                </td>
            );
        }
        if (nota.permissaoExclusao) {
            painelBotoes.push(
                <td key="excluir">
                    <button
                        className="btn"
                        onClick={() => excluirNota(nota.id ?? 0)}
                    >
                        Excluir
                    </button>
                </td>
            );
        }
    }
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
