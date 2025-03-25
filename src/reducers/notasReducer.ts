import { ModeloNota } from "../modelo/nota";

export enum TipoAcao {
    ADICIONAR_NOTA,
    ALTERAR_NOTA,
    EXCLUIR_NOTA,
}

export interface Acao {
    id?: number;
    nota?: ModeloNota;
    tipo: TipoAcao;
}

export function notasReducer(notas: ModeloNota[], acao: Acao) {
    switch (acao.tipo) {
        case TipoAcao.ADICIONAR_NOTA:
            return [
                ...notas,
                {
                    id: acao?.nota?.id,
                    nota: acao.nota?.nota || "",
                    dataRegistro: acao?.nota?.dataRegistro,
                    permissaoAlteracao: acao.nota?.permissaoAlteracao,
                    permissaoExclusao: acao.nota?.permissaoExclusao,
                    autor: acao?.nota?.autor || "",
                },
            ];
        case TipoAcao.ALTERAR_NOTA:
            return notas.map((nota) => {
                console.log("No reducer ", acao.nota);
                if (nota.id !== acao.nota?.id) return nota;
                else if (acao.nota) {
                    return {
                        ...nota,
                        ...acao.nota,
                    };
                }
                return nota;
            });
        case TipoAcao.EXCLUIR_NOTA:
            return notas.filter((nota) => nota.id !== acao?.id);
    }
    return notas;
}
