import { JSX } from "react";
import { ModeloNota } from "../modelo/nota";

export interface NotaProps {
    nota: ModeloNota;
    mostrarBotoes: boolean;
    escopoNota: string;
    excluirNota: (id: number) => void;
    alterarNota: (nota: ModeloNota) => void;
    editando: boolean;
}

function Nota({
    nota,
    mostrarBotoes,
    escopoNota,
    excluirNota,
    alterarNota,
    editando,
}: NotaProps) {
    const painelBotoes: JSX.Element[] = [];

    if (mostrarBotoes) {
        if (nota.permissaoAlteracao) {
            painelBotoes.push(
                <td key="editar">
                    <button
                        className="btn"
                        onClick={() => alterarNota(nota)}
                        disabled={editando}
                    >
                        Editar
                    </button>
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
