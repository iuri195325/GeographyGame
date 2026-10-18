import { Pais, paises } from './countries';

const embaralhar = <T,>(lista: T[]): T[] => {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
};

// Cria 4 opções distintas: a correta e 3 outros países, preferindo continentes diferentes.
export const gerarOpcoes = (correto: Pais, base: Pais[] = paises): Pais[] => {
    const outros = embaralhar(base.filter(p => p.id !== correto.id));
    const outrosContinentes = outros.filter(p => p.continente !== correto.continente);
    const mesmoContinente = outros.filter(p => p.continente === correto.continente);
    const distratores = [...outrosContinentes, ...mesmoContinente].slice(0, 3);
    return embaralhar([correto, ...distratores]);
};
