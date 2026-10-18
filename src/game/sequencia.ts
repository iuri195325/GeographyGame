import { Pais, paises } from './countries';

export type Sequencia = {
    ordem: string[]; // ids dos países na ordem em que aparecem
    indice: number; // posição do país atual dentro de `ordem`
};

const embaralhar = <T,>(lista: T[]): T[] => {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
};

// Dificuldade crescente: cada nível é embaralhado separadamente.
export const criarSequencia = (base: Pais[] = paises): Sequencia => {
    const ordem = ([1, 2, 3] as const).flatMap(dificuldade =>
        embaralhar(base.filter(p => p.dificuldade === dificuldade)).map(p => p.id)
    );
    return { ordem, indice: 0 };
};

export const paisAtual = (sequencia: Sequencia, base: Pais[] = paises): Pais | undefined =>
    base.find(p => p.id === sequencia.ordem[sequencia.indice]);

// Avança para o próximo país; ao chegar ao fim, começa um novo ciclo.
export const avancarSequencia = (sequencia: Sequencia, base: Pais[] = paises): Sequencia => {
    if (sequencia.indice + 1 < sequencia.ordem.length) {
        return { ...sequencia, indice: sequencia.indice + 1 };
    }
    return criarSequencia(base);
};

// Ao errar, o país sai da posição atual e vai para o fim do ciclo.
// Assim a mesma fase recebe outro país que ainda não apareceu neste ciclo.
export const trocarPaisAtual = (sequencia: Sequencia, base: Pais[] = paises): Sequencia => {
    const { ordem, indice } = sequencia;
    if (indice + 1 < ordem.length) {
        const nova = [...ordem];
        const [perdido] = nova.splice(indice, 1);
        nova.push(perdido);
        return { ordem: nova, indice };
    }
    // Último país do ciclo: começa um novo ciclo que não repete o país perdido de imediato.
    const perdido = ordem[indice];
    const novo = criarSequencia(base.filter(p => p.id !== perdido));
    return { ordem: [...novo.ordem, perdido], indice: 0 };
};

export const sequenciaValida = (sequencia: unknown, base: Pais[] = paises): sequencia is Sequencia => {
    if (!sequencia || typeof sequencia !== 'object') return false;
    const { ordem, indice } = sequencia as Sequencia;
    const ids = new Set(base.map(p => p.id));
    return (
        Array.isArray(ordem) &&
        ordem.length === base.length &&
        ordem.every(id => ids.has(id)) &&
        typeof indice === 'number' &&
        indice >= 0 &&
        indice < ordem.length
    );
};
