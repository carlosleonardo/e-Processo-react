import { useState } from "react";

function Notas() {
    const [descricaoEscopo, setDescricaoEscopo] = useState("");

    return (
        <div id="main">
            <p className="titulo">Notas de {descricaoEscopo}</p>
            <table style={{ width: "100%", verticalAlign: "center" }}>
                <tbody>
                    <tr>
                        <td>
                            <textarea
                                style={{ width: "100%" }}
                                rows={4}
                                cols={41}
                                placeholder="Digite a nota"
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}>
                            <button className="btn">Incluir</button>
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
                                    {descricaoEscopo !== "NM" ? (
                                        <td
                                            className="tr"
                                            style={{ width: "10%" }}
                                        >
                                            <b>Autor</b>
                                        </td>
                                    ) : null}
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
