export default function BotaoCopiar() {
    return (
        <>
            <div id="alerta" style={{ color: "red", textAlign: "center" }}>
                Caso algum documento selecionado já tenha sido copiado de outro
                processo, o documento que será efetivamente copiado será o
                documento original.
            </div>
            <div style={{ textAlign: "center" }}>
                <button type="button" className="btn">
                    Copiar
                </button>
            </div>
        </>
    );
}
