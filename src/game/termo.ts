import { normalizar } from './normalize';

export type EstadoLetra = 'certo' | 'presente' | 'ausente';

export const MAX_TENTATIVAS = 4;

const PRIORIDADE: Record<EstadoLetra, number> = { ausente: 0, presente: 1, certo: 2 };

// Para o teclado: guarda a melhor pista já obtida por letra.
export const combinarEstadosTeclas = (
    anteriores: Record<string, EstadoLetra>,
    letras: string[],
    estados: EstadoLetra[]
): Record<string, EstadoLetra> => {
    const proximos = { ...anteriores };
    letras.forEach((letra, i) => {
        const atual = proximos[letra];
        if (!atual || PRIORIDADE[estados[i]] > PRIORIDADE[atual]) {
            proximos[letra] = estados[i];
        }
    });
    return proximos;
};

// `exibir` mantém acentos para mostrar na tela; `chave` é usada na comparação.
export type LetraSegredo = { exibir: string; chave: string };

// Espaços e hífens não contam como letras.
export const letrasDoNome = (nome: string): LetraSegredo[] =>
    [...nome]
        .filter(c => c !== ' ' && c !== '-')
        .map(c => ({ exibir: c.toUpperCase(), chave: normalizar(c) }));

export const quantidadeLetras = (nome: string): number => letrasDoNome(nome).length;

export const palavraCorreta = (tentativa: string, nome: string): boolean =>
    normalizar(tentativa) === normalizar(nome);

// Duas passadas: primeiro os acertos exatos (verde), depois as letras
// presentes em outra posição (amarelo), respeitando a quantidade de cada letra
// no segredo. Assim letras repetidas não geram amarelos a mais.
export const avaliarTentativa = (tentativa: string[], segredo: string[]): EstadoLetra[] => {
    const estados: EstadoLetra[] = tentativa.map(() => 'ausente');
    const restantes: Record<string, number> = {};

    segredo.forEach((letra, i) => {
        if (tentativa[i] === letra) {
            estados[i] = 'certo';
        } else {
            restantes[letra] = (restantes[letra] ?? 0) + 1;
        }
    });

    tentativa.forEach((letra, i) => {
        if (estados[i] === 'certo') return;
        if ((restantes[letra] ?? 0) > 0) {
            estados[i] = 'presente';
            restantes[letra] -= 1;
        }
    });

    return estados;
};
