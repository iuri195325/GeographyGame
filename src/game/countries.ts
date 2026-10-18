export type Continente =
    | 'América do Sul'
    | 'América do Norte'
    | 'Europa'
    | 'África'
    | 'Ásia'
    | 'Oceania';

// 1 = conhecido, 2 = intermediário, 3 = menos conhecido
export type Dificuldade = 1 | 2 | 3;

export type Pais = {
    id: string; // código ISO 3166-1 alpha-2 (minúsculo), usado nas bandeiras
    nome: string; // nome em português exibido no jogo
    continente: Continente;
    dificuldade: Dificuldade;
};

export const paises: Pais[] = [
    // América do Sul
    { id: 'br', nome: 'Brasil', continente: 'América do Sul', dificuldade: 1 },
    { id: 'ar', nome: 'Argentina', continente: 'América do Sul', dificuldade: 1 },
    { id: 'cl', nome: 'Chile', continente: 'América do Sul', dificuldade: 2 },
    { id: 'pe', nome: 'Peru', continente: 'América do Sul', dificuldade: 2 },
    { id: 'co', nome: 'Colômbia', continente: 'América do Sul', dificuldade: 2 },
    { id: 've', nome: 'Venezuela', continente: 'América do Sul', dificuldade: 2 },
    { id: 'uy', nome: 'Uruguai', continente: 'América do Sul', dificuldade: 2 },
    { id: 'py', nome: 'Paraguai', continente: 'América do Sul', dificuldade: 3 },
    { id: 'bo', nome: 'Bolívia', continente: 'América do Sul', dificuldade: 3 },
    { id: 'ec', nome: 'Equador', continente: 'América do Sul', dificuldade: 3 },

    // América do Norte (inclui América Central e Caribe)
    { id: 'us', nome: 'Estados Unidos', continente: 'América do Norte', dificuldade: 1 },
    { id: 'ca', nome: 'Canadá', continente: 'América do Norte', dificuldade: 1 },
    { id: 'mx', nome: 'México', continente: 'América do Norte', dificuldade: 1 },
    { id: 'cu', nome: 'Cuba', continente: 'América do Norte', dificuldade: 2 },
    { id: 'hn', nome: 'Honduras', continente: 'América do Norte', dificuldade: 2 },
    { id: 'gt', nome: 'Guatemala', continente: 'América do Norte', dificuldade: 2 },
    { id: 'cr', nome: 'Costa Rica', continente: 'América do Norte', dificuldade: 2 },
    { id: 'pa', nome: 'Panamá', continente: 'América do Norte', dificuldade: 3 },
    { id: 'jm', nome: 'Jamaica', continente: 'América do Norte', dificuldade: 3 },
    { id: 'ht', nome: 'Haiti', continente: 'América do Norte', dificuldade: 3 },

    // Europa
    { id: 'pt', nome: 'Portugal', continente: 'Europa', dificuldade: 1 },
    { id: 'es', nome: 'Espanha', continente: 'Europa', dificuldade: 1 },
    { id: 'fr', nome: 'França', continente: 'Europa', dificuldade: 1 },
    { id: 'it', nome: 'Itália', continente: 'Europa', dificuldade: 1 },
    { id: 'de', nome: 'Alemanha', continente: 'Europa', dificuldade: 1 },
    { id: 'gb', nome: 'Reino Unido', continente: 'Europa', dificuldade: 1 },
    { id: 'ru', nome: 'Rússia', continente: 'Europa', dificuldade: 1 },
    { id: 'gr', nome: 'Grécia', continente: 'Europa', dificuldade: 2 },
    { id: 'no', nome: 'Noruega', continente: 'Europa', dificuldade: 2 },
    { id: 'se', nome: 'Suécia', continente: 'Europa', dificuldade: 2 },
    { id: 'pl', nome: 'Polônia', continente: 'Europa', dificuldade: 2 },
    { id: 'ua', nome: 'Ucrânia', continente: 'Europa', dificuldade: 2 },
    { id: 'ch', nome: 'Suíça', continente: 'Europa', dificuldade: 2 },
    { id: 'is', nome: 'Islândia', continente: 'Europa', dificuldade: 3 },

    // África
    { id: 'eg', nome: 'Egito', continente: 'África', dificuldade: 1 },
    { id: 'za', nome: 'África do Sul', continente: 'África', dificuldade: 2 },
    { id: 'ng', nome: 'Nigéria', continente: 'África', dificuldade: 2 },
    { id: 'ke', nome: 'Quênia', continente: 'África', dificuldade: 2 },
    { id: 'ma', nome: 'Marrocos', continente: 'África', dificuldade: 2 },
    { id: 'et', nome: 'Etiópia', continente: 'África', dificuldade: 2 },
    { id: 'ao', nome: 'Angola', continente: 'África', dificuldade: 2 },
    { id: 'dz', nome: 'Argélia', continente: 'África', dificuldade: 3 },
    { id: 'gh', nome: 'Gana', continente: 'África', dificuldade: 3 },
    { id: 'sn', nome: 'Senegal', continente: 'África', dificuldade: 3 },
    { id: 'tn', nome: 'Tunísia', continente: 'África', dificuldade: 3 },
    { id: 'td', nome: 'Chade', continente: 'África', dificuldade: 3 },

    // Ásia
    { id: 'cn', nome: 'China', continente: 'Ásia', dificuldade: 1 },
    { id: 'jp', nome: 'Japão', continente: 'Ásia', dificuldade: 1 },
    { id: 'in', nome: 'Índia', continente: 'Ásia', dificuldade: 1 },
    { id: 'kr', nome: 'Coreia do Sul', continente: 'Ásia', dificuldade: 2 },
    { id: 'sa', nome: 'Arábia Saudita', continente: 'Ásia', dificuldade: 2 },
    { id: 'il', nome: 'Israel', continente: 'Ásia', dificuldade: 2 },
    { id: 'pk', nome: 'Paquistão', continente: 'Ásia', dificuldade: 2 },
    { id: 'id', nome: 'Indonésia', continente: 'Ásia', dificuldade: 2 },
    { id: 'th', nome: 'Tailândia', continente: 'Ásia', dificuldade: 2 },
    { id: 'ph', nome: 'Filipinas', continente: 'Ásia', dificuldade: 2 },
    { id: 'vn', nome: 'Vietnã', continente: 'Ásia', dificuldade: 3 },
    { id: 'mn', nome: 'Mongólia', continente: 'Ásia', dificuldade: 3 },
    { id: 'tl', nome: 'Timor-Leste', continente: 'Ásia', dificuldade: 3 },
    { id: 'af', nome: 'Afeganistão', continente: 'Ásia', dificuldade: 3 },
    { id: 'iq', nome: 'Iraque', continente: 'Ásia', dificuldade: 3 },

    // Oceania
    { id: 'au', nome: 'Austrália', continente: 'Oceania', dificuldade: 1 },
    { id: 'nz', nome: 'Nova Zelândia', continente: 'Oceania', dificuldade: 2 },
    { id: 'pg', nome: 'Papua-Nova Guiné', continente: 'Oceania', dificuldade: 3 },
    { id: 'fj', nome: 'Fiji', continente: 'Oceania', dificuldade: 3 },
    { id: 'ws', nome: 'Samoa', continente: 'Oceania', dificuldade: 3 },
];

export const bandeiraUrl = (pais: Pais): string =>
    `https://flagcdn.com/w320/${pais.id}.png`;
