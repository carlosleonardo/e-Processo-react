import { ChangeEvent, useState } from "react";
import ListaDocumentos from "./ListaDocumentos";

export default function CopiaDocumento() {
    const [numeroProcesso, setNumeroProcesso] = useState("");
    const [invalido, setInvalido] = useState(true);

    function aoMudarNumeroProcesso(evento: ChangeEvent<HTMLInputElement>) {
        const alvo = evento.target;
        const numeroProcessoOriginal = alvo.value;

        // Verificar a validade usando a API de validação do HTML
        if (alvo.validity.valid) {
            setInvalido(false);
        } else {
            setInvalido(true);
        }

        // Atualizar o estado com o valor original (não formatado)
        setNumeroProcesso(numeroProcessoOriginal);
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
                                        maxLength={20}
                                        pattern="^\d{5}\.\d{6}/\d{4}-\d{2}$"
                                        placeholder="Formato ddddd.dddddd/dddd-dd"
                                        onChange={aoMudarNumeroProcesso}
                                    />
                                    &nbsp;&nbsp;
                                    <button
                                        type="submit"
                                        className="btn"
                                        form="formCopiarDocumentos"
                                        disabled={invalido}
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
