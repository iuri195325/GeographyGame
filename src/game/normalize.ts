// Remove acentos, caixa e separadores (espaço, hífen, apóstrofo).
export const normalizar = (texto: string): string =>
    texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase()
        .replace(/[\s\-'’]/g, '');
