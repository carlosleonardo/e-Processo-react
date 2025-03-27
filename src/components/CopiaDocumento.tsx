import { ChangeEvent, useState } from "react";
import ListaDocumentos from "./ListaDocumentos";

export default function CopiaDocumento() {
    const [numeroProcesso, setNumeroProcesso] = useState("");

    function aoMudarNumeroProcesso(evento: ChangeEvent<HTMLInputElement>) {
        const numeroProcesso = evento.target.value;
        setNumeroProcesso(numeroProcesso);
    }

    return (
        <>
            <div id="main">
                <p className="titulo">Copiar Documento(s) de outro Processo</p>
                <form id="formCopiarDocumentos">
                    <table>
                        <tbody>
                            <tr>
                                <td className="tr">
                                    <label htmlFor="numeroProcesso">
                                        Número do Processo
                                    </label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="numeroProcesso"
                                        value={numeroProcesso}
                                        onChange={aoMudarNumeroProcesso}
                                    />
                                    &nbsp;&nbsp;
                                    <button
                                        type="submit"
                                        className="btn"
                                        form="formCopiarDocumentos"
                                    >
                                        Buscar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <ListaDocumentos />
            </div>
        </>
    );
}
