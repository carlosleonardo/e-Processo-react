import { ModeloNota } from "../modelo/nota";

export enum TipoAcao {
    ADICIONAR,
    EDITAR,
    EXCLUIR,
}
export interface Acao {
    tipo: TipoAcao;
    nota?: ModeloNota;
    id?: number;
}
let novoId = 0;

export function notasRedutor(notas: ModeloNota[], acao: Acao): ModeloNota[] {
    switch (acao.tipo) {
        case TipoAcao.ADICIONAR:
            return [
                ...notas,
                {
                    id: novoId++,
                    nota: acao.nota?.nota || "",

                    dataRegistro: acao.nota?.dataRegistro ?? new Date(),
                    permissaoAlteracao: acao.nota?.permissaoAlteracao ?? false,
                    permissaoExclusao: acao.nota?.permissaoExclusao ?? false,
                    autor: acao.nota?.autor || "",
                },
            ];
        case TipoAcao.EDITAR:
            return notas.map((nota) => {
                if (nota.id === acao.nota?.id) {
                    return acao.nota ? acao.nota : nota;
                } else {
                    return nota;
                }
            });
        case TipoAcao.EXCLUIR:
            return notas.filter((nota) => nota.id !== acao.nota?.id);
    }
}
