import { ChangeEvent, useState } from "react";

function Notas() {
    const [escopoNota, setEscopoNota] = useState("");
    const [mostrarBotoes, setMostrarBotoes] = useState(true);
    const [nota, setNota] = useState("");
    const [invalido, setInvalido] = useState(true);

    function aoMudarNota(event: ChangeEvent<HTMLTextAreaElement>) {
        if (event.target.value !== "") {
            setInvalido(false);
        } else {
            setInvalido(true);
        }
        setNota(event.target.value);
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
                                placeholder="Digite a nota"
                                value={nota}
                                onChange={aoMudarNota}
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}>
                            <button className="btn" disabled={invalido}>
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
                        <td>
                            <table style={{ width: "100%" }}>
                                <tr>
                                    <td className="tr">
                                        <b>Histórico de Notas</b>
                                    </td>
                                    <td className="tr" style={{ width: "20%" }}>
                                        <b>Data de Registro</b>
                                    </td>
                                    {escopoNota !== "NM" ? (
                                        <td
                                            className="tr"
                                            style={{ width: "25%" }}
                                        >
                                            <b>Autor</b>
                                        </td>
                                    ) : (
                                        <td></td>
                                    )}
                                    {mostrarBotoes ? (
                                        <td
                                            className="tr"
                                            style={{ width: "1%" }}
                                        ></td>
                                    ) : (
                                        <td></td>
                                    )}
                                </tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Notas;
