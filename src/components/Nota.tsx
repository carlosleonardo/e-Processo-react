import { JSX } from "react";
import { ModeloNota } from "../modelo/nota";

export interface NotaProps {
    nota: ModeloNota;
    mostrarBotoes: boolean;
    escopoNota: string;
<<<<<<< HEAD
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
=======
}

function Nota({ nota, mostrarBotoes, escopoNota }: NotaProps) {
    let painelBotoes = "";
>>>>>>> ff3747ec79eef0dc87e359c5d08ae0bf539418f2

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
