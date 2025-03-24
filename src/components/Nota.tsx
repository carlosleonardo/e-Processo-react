import { ModeloNota } from "../modelo/nota";

export interface NotaProps {
    nota: ModeloNota;
    mostrarBotoes: boolean;
    escopoNota: string;
}

function Nota({ nota, mostrarBotoes, escopoNota }: NotaProps) {
    let painelBotoes = "";

    if (mostrarBotoes) {
        if (nota.permissaoAlteracao) {
            painelBotoes += (
                <td>
                    <button className="btn">Editar</button>
                </td>
            );
        }
        if (nota.permissaoExclusao) {
            painelBotoes += (
                <td>
                    <button className="btn">Excluir</button>
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
