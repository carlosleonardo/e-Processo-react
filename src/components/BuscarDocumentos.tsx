import { ChangeEvent, use, useEffect, useRef, useState } from "react";

export interface PropsBuscarDocumentos {
    chaveEquipeAtividade: string;
    numeroProcessoDestinoCopia: string;
    responsavelProcesso: string;
    nomeEquipeAtual: string;
    nomeAtividadeAtual: string;
    tipoProcesso: string;
    buscarDocumentos: (numeroProcesso: string) => void;
}
export default function BuscarDocumentos(props: PropsBuscarDocumentos) {
    const [numeroProcesso, setNumeroProcesso] = useState("");
    const [invalido, setInvalido] = useState(true);
    const [numeroProcessoNaoFormatado, setNumeroProcessoNaoFormatado] =
        useState("");
    const refTextoProcesso = useRef<HTMLInputElement>(null);

    useEffect(() => {
        refTextoProcesso.current?.focus();
    }, []);

    function aoMudarNumeroProcesso(evento: ChangeEvent<HTMLInputElement>) {
        const alvo = evento.target;
        const numeroProcessoOriginal = alvo.value;

        // Atualizar o estado com o valor original (não formatado)
        setNumeroProcessoNaoFormatado(numeroProcessoOriginal);

        // Verificar a validade usando a API de validação do HTML
        if (alvo.validity.valid && numeroProcessoOriginal !== "") {
            setInvalido(false);

            // Remover caracteres especiais após validar
            const numeroSemFormatacao = numeroProcessoOriginal.replace(
                /\D/g,
                ""
            );
            console.log("Número sem formatação:", numeroSemFormatacao);
            setNumeroProcessoNaoFormatado(numeroSemFormatacao);
        } else {
            setInvalido(true);
        }

        // Atualizar o estado formatado (se necessário, pode aplicar formatação aqui)
        setNumeroProcesso(numeroProcessoOriginal);
    }

    return (
        <>
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
                                    ref={refTextoProcesso}
                                />
                                &nbsp;&nbsp;
                                <button
                                    type="submit"
                                    className="btn"
                                    form="formCopiarDocumentos"
                                    disabled={invalido}
                                    onClick={(evento) => {
                                        evento.preventDefault();
                                        props.buscarDocumentos(
                                            numeroProcessoNaoFormatado
                                        );
                                    }}
                                >
                                    Buscar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
}
