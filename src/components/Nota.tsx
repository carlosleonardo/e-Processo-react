import { ModeloNota } from "../modelo/nota";

export interface NotaProps {
    nota: ModeloNota;
    mostrarBotoes: boolean;
    escopoNota: string;
    excluirNota: (id: number) => void;
}

function Nota({ nota, mostrarBotoes, escopoNota, excluirNota }: NotaProps) {
    let painelBotoes = "";

    if (mostrarBotoes) {
        if (nota.permissaoAlteracao) {
            painelBotoes += (
                <td>
                    <button className="btn">Editar</button>
                </td>
            );
        } else painelBotoes = "";
        if (nota.permissaoExclusao) {
            painelBotoes += (
                <td>
                    <button
                        className="btn"
                        onClick={() => excluirNota(nota.id ?? 0)}
                    >
                        Excluir
                    </button>
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
