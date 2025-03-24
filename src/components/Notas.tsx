import { ChangeEvent, useReducer, useState } from "react";
import { ModeloNota } from "../modelo/nota";
import Nota from "./Nota";
import { notasReducer, TipoAcao } from "../reducers/notasReducer";

let novoId = 1;

function Notas() {
    const [escopoNota, setEscopoNota] = useState("");
    const [mostrarBotoes, setMostrarBotoes] = useState(true);
    const [textoNota, setTextoNota] = useState("");
    const [invalido, setInvalido] = useState(true);
    const [notas, despachar] = useReducer(notasReducer, []);

    function aoMudarNota(event: ChangeEvent<HTMLTextAreaElement>) {
        if (event.target.value !== "") {
            setInvalido(false);
        } else {
            setInvalido(true);
        }
        setTextoNota(event.target.value);
    }

    function incluir() {
        despachar({
            tipo: TipoAcao.ADICIONAR_NOTA,
            nota: {
                id: novoId++,
                nota: textoNota,
                autor: "Carlos Leonardo",
                dataRegistro: new Date(),
                permissaoAlteracao: false,
                permissaoExclusao: true,
            },
        });
    }

    return (
        <div id="main">
            <p className="titulo">Notas de {escopoNota}</p>
            <table style={{ width: "100%", verticalAlign: "center" }}>
                <tbody>
                    <tr>
                        <td>
                            <textarea
                                style={{ width: "100%" }}
                                rows={4}
                                cols={41}
                                maxLength={2000}
                                placeholder="Digite a nota"
                                value={textoNota}
                                onChange={aoMudarNota}
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}>
                            <button
                                className="btn"
                                disabled={invalido}
                                onClick={incluir}
                            >
                                Incluir
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table style={{ width: "100%" }}>
                <tbody>
                    <tr>
                        <td className="tr">
                            <b>Histórico de Notas</b>
                        </td>
                        <td className="tr" style={{ width: "20%" }}>
                            <b>Data de Registro</b>
                        </td>
                        {escopoNota !== "NM" ? (
                            <td className="tr" style={{ width: "25%" }}>
                                <b>Autor</b>
                            </td>
                        ) : (
                            <td></td>
                        )}
                        {mostrarBotoes ? (
                            <td className="tr" style={{ width: "1%" }}></td>
                        ) : (
                            <td></td>
                        )}
                    </tr>

                    {notas.map((notaAtual: ModeloNota) => (
                        <tr key={notaAtual.id}>
                            <Nota
                                nota={notaAtual}
                                mostrarBotoes={mostrarBotoes}
                                escopoNota={escopoNota}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Notas;
