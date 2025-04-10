export interface PropsBotaoCopiar {
    selecionados: (number | null | undefined)[];
}

export default function BotaoCopiar(props: PropsBotaoCopiar) {
    function aoClicarCopiar() {
        if (props.selecionados.every((id) => id === null)) {
            alert("Nenhum documento selecionado.");
            return;
        }

        // Desconsidera documentos com id null
        const documentosSelecionados = props.selecionados.filter(
            (id) => id !== null
        ) as number[];
        console.log("Documentos selecionados:", documentosSelecionados);
    }

    return (
        <>
            <div id="alerta" style={{ color: "red", textAlign: "center" }}>
                Caso algum documento selecionado já tenha sido copiado de outro
                processo, o documento que será efetivamente copiado será o
                documento original.
            </div>
            <div style={{ textAlign: "center" }}>
                <button type="button" className="btn" onClick={aoClicarCopiar}>
                    Copiar
                </button>
            </div>
        </>
    );
}
