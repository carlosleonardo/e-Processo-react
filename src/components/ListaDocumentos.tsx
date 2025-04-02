import { ChangeEvent, useState } from "react";
import { ModeloDocumento } from "../modelo/documento.modelo";
import Documento from "./Documento";
import BotaoCopiar from "./BotaoCopiar";

export interface PropsListaDocumentos {
    documentos: ModeloDocumento[];
}

export default function ListaDocumentos(props: PropsListaDocumentos) {
    let existemDocumentos = true;

    if (props.documentos.length === 0) {
        existemDocumentos = false;
    }
    if (props.documentos.length > 0) {
        const index = props.documentos.findIndex(
            (documento) =>
                documento.nome.toLocaleLowerCase() === "ficha de identificação"
        );
        if (index > -1 && props.documentos.length === 1) {
            existemDocumentos = false;
        }
    }
    if (!existemDocumentos) {
        alert("Não há documentos juntados ao processo selecionado.");
    }
    // Calcular o contador fora do map
    const documentosValidos = props.documentos.filter(
        (documento) =>
            documento.nome.toLocaleLowerCase() !== "ficha de identificação" &&
            documento.nome.toLocaleLowerCase() !== "termo de desentranhamento"
    );
    const contador = documentosValidos.length;
    const [marcarTodos, setMarcarTodos] = useState(false);
    const [checkboxes, setCheckboxes] = useState(
        documentosValidos.map(() => false)
    );

    function aoMarcarTodos(evento: ChangeEvent<HTMLInputElement>) {
        const marcado = evento.target.checked;
        setMarcarTodos(marcado);
        setCheckboxes(checkboxes.map(() => marcado));
    }

    function aoMarcarLinha(index: number, marcado: boolean) {
        const novasCheckboxes = [...checkboxes];
        novasCheckboxes[index] = marcado;
        setCheckboxes(novasCheckboxes);

        if (!marcado) {
            setMarcarTodos(false);
        }
    }

    return (
        <>
            <table style={{ width: "100%", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left", width: "5%" }}>
                            <input
                                type="checkbox"
                                checked={marcarTodos}
                                onChange={aoMarcarTodos}
                            />
                            Todos
                        </th>
                        <th style={{ textAlign: "left", width: "25%" }}>
                            Documentos
                        </th>
                        <th style={{ width: "10%", textAlign: "center" }}>
                            Cópia Simples
                        </th>
                        <th style={{ width: "10%", textAlign: "center" }}>
                            Abrir Documento
                        </th>
                        <th style={{ width: "10%", textAlign: "center" }}>
                            Palavras-Chave
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.documentos.map((documento, index) => {
                        if (
                            documento.copiaSimples !== "S" &&
                            documento.copiaSimples !== "N"
                        ) {
                            documento.copiaSimples = "NI";
                        }
                        return (
                            <tr
                                key={documento.id}
                                className={index % 2 ? "tr" : ""}
                            >
                                <Documento
                                    documento={documento}
                                    marcado={checkboxes[index]}
                                    aoSelecionar={(evento) =>
                                        aoMarcarLinha(
                                            index,
                                            evento.target.checked
                                        )
                                    }
                                />
                            </tr>
                        );
                    })}
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            {contador > 0 && <BotaoCopiar />}
        </>
    );
}
