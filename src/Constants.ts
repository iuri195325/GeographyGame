import { ItemType, OptionType } from "./types/GameProps"

export const Constants = {
    white: '#fff',
    black: '#000',
}

const mapa = (arquivo: string): string =>
    `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(arquivo)}?width=800`

const codigoIso: Record<string, string> = {
    algeria: 'dz', argentina: 'ar', australia: 'au', austria: 'at', bangladesh: 'bd',
    belarus: 'by', belgium: 'be', bolivia: 'bo', botswana: 'bw', brazil: 'br',
    canada: 'ca', chile: 'cl', china: 'cn', colombia: 'co', costa_rica: 'cr',
    cuba: 'cu', ecuador: 'ec', egypt: 'eg', france: 'fr', germany: 'de',
    greece: 'gr', greenland: 'gl', honduras: 'hn', india: 'in', indonesia: 'id',
    iran: 'ir', ireland: 'ie', italy: 'it', japan: 'jp', kazakhstan: 'kz',
    korea_south: 'kr', libya: 'ly', mexico: 'mx', mongolia: 'mn', morocco: 'ma',
    mozambique: 'mz', namibia: 'na', nepal: 'np', new_zealand: 'nz', pakistan: 'pk',
    papua_new_guinea: 'pg', paraguay: 'py', peru: 'pe', philippines: 'ph', poland: 'pl',
    portugal: 'pt', russia: 'ru', saudi_arabia: 'sa', south_africa: 'za', spain: 'es',
    sudan: 'sd', switzerland: 'ch', syria: 'sy', turkey: 'tr', ukraine: 'ua',
    united_kingdom: 'gb', united_states_of_america: 'us', uruguay: 'uy', venezuela: 've',
};

const bandeira = (slug: string): string =>
    `https://flagcdn.com/w320/${codigoIso[slug]}.png`

const opcao = (nome: string, slug: string, correta = false): OptionType => ({
    nome,
    imageName: bandeira(slug),
    isCorrect: correta,
})

const fase = (arquivoMapa: string, [primeira, segunda, terceira, quarta]: OptionType[]): ItemType => ({
    map: mapa(arquivoMapa),
    first_option: primeira,
    second_option: segunda,
    third_option: terceira,
    fourth_option: quarta,
})

const allFases: ItemType[] = [
    fase('BRA_orthographic.svg', [
        opcao('Brasil', 'brazil', true),
        opcao('Argentina', 'argentina'),
        opcao('Bolívia', 'bolivia'),
        opcao('Colômbia', 'colombia'),
    ]),
    fase('PER_orthographic.svg', [
        opcao('Brasil', 'brazil'),
        opcao('Uruguai', 'uruguay'),
        opcao('Peru', 'peru', true),
        opcao('Colômbia', 'colombia'),
    ]),
    fase('CHL_orthographic_(+all_claims).svg', [
        opcao('Uruguai', 'uruguay'),
        opcao('Chile', 'chile', true),
        opcao('Paraguai', 'paraguay'),
        opcao('Argentina', 'argentina'),
    ]),
    fase('MEX_orthographic.svg', [
        opcao('Honduras', 'honduras'),
        opcao('Costa Rica', 'costa_rica'),
        opcao('Canadá', 'canada'),
        opcao('México', 'mexico', true),
    ]),
    fase('Ukraine_-_disputed_2022_(orthographic_projection).svg', [
        opcao('Rússia', 'russia'),
        opcao('Polónia', 'poland'),
        opcao('Ucrânia', 'ukraine', true),
        opcao('México', 'mexico'),
    ]),
    fase('France (orthographic projection).svg', [
        opcao('França', 'france', true),
        opcao('Itália', 'italy'),
        opcao('Espanha', 'spain'),
        opcao('Alemanha', 'germany'),
    ]),
    fase('ARG_orthographic.svg', [
        opcao('Chile', 'chile'),
        opcao('Argentina', 'argentina', true),
        opcao('Uruguai', 'uruguay'),
        opcao('Paraguai', 'paraguay'),
    ]),
    fase('Italy (orthographic projection).svg', [
        opcao('Itália', 'italy', true),
        opcao('França', 'france'),
        opcao('Espanha', 'spain'),
        opcao('Portugal', 'portugal'),
    ]),
    fase('USA_orthographic.svg', [
        opcao('Canadá', 'canada'),
        opcao('Estados Unidos', 'united_states_of_america', true),
        opcao('México', 'mexico'),
        opcao('Cuba', 'cuba'),
    ]),
    fase('Germany (orthographic projection).svg', [
        opcao('Alemanha', 'germany', true),
        opcao('Áustria', 'austria'),
        opcao('Suíça', 'switzerland'),
        opcao('Bélgica', 'belgium'),
    ]),
    fase('Spain (orthographic projection).svg', [
        opcao('Espanha', 'spain', true),
        opcao('Portugal', 'portugal'),
        opcao('França', 'france'),
        opcao('Itália', 'italy'),
    ]),
    fase('COL_orthographic.svg', [
        opcao('Colômbia', 'colombia', true),
        opcao('Equador', 'ecuador'),
        opcao('Venezuela', 'venezuela'),
        opcao('Peru', 'peru'),
    ]),
    fase('CAN_orthographic.svg', [
        opcao('Canadá', 'canada', true),
        opcao('Estados Unidos', 'united_states_of_america'),
        opcao('México', 'mexico'),
        opcao('Groenlândia', 'greenland'),
    ]),
    fase('AUS_orthographic.svg', [
        opcao('Austrália', 'australia', true),
        opcao('Nova Zelândia', 'new_zealand'),
        opcao('Indonésia', 'indonesia'),
        opcao('Papua Nova Guiné', 'papua_new_guinea'),
    ]),
    fase('India (orthographic projection).svg', [
        opcao('Índia', 'india', true),
        opcao('Paquistão', 'pakistan'),
        opcao('Bangladesh', 'bangladesh'),
        opcao('Nepal', 'nepal'),
    ]),
    fase('EGY_orthographic.svg', [
        opcao('Egito', 'egypt', true),
        opcao('Líbia', 'libya'),
        opcao('Sudão', 'sudan'),
        opcao('Arábia Saudita', 'saudi_arabia'),
    ]),
    fase('CHN_orthographic.svg', [
        opcao('China', 'china', true),
        opcao('Japão', 'japan'),
        opcao('Coreia do Sul', 'korea_south'),
        opcao('Mongólia', 'mongolia'),
    ]),
    fase('Russian Federation (orthographic projection).svg', [
        opcao('Rússia', 'russia', true),
        opcao('Cazaquistão', 'kazakhstan'),
        opcao('Ucrânia', 'ukraine'),
        opcao('Bielorrússia', 'belarus'),
    ]),
    fase('ZAF_orthographic.svg', [
        opcao('África do Sul', 'south_africa', true),
        opcao('Namíbia', 'namibia'),
        opcao('Botsuana', 'botswana'),
        opcao('Moçambique', 'mozambique'),
    ]),
    fase('JPN_orthographic.svg', [
        opcao('Japão', 'japan', true),
        opcao('China', 'china'),
        opcao('Coreia do Sul', 'korea_south'),
        opcao('Filipinas', 'philippines'),
    ]),
    fase('United Kingdom (orthographic projection).svg', [
        opcao('Reino Unido', 'united_kingdom', true),
        opcao('Irlanda', 'ireland'),
        opcao('França', 'france'),
        opcao('Bélgica', 'belgium'),
    ]),
    fase('TUR_orthographic.svg', [
        opcao('Turquia', 'turkey', true),
        opcao('Grécia', 'greece'),
        opcao('Síria', 'syria'),
        opcao('Irã', 'iran'),
    ]),
    fase('BOL_orthographic.svg', [
        opcao('Bolívia', 'bolivia', true),
        opcao('Paraguai', 'paraguay'),
        opcao('Peru', 'peru'),
        opcao('Brasil', 'brazil'),
    ]),
    fase('PRY_orthographic.svg', [
        opcao('Uruguai', 'uruguay'),
        opcao('Paraguai', 'paraguay', true),
        opcao('Brasil', 'brazil'),
        opcao('Bolívia', 'bolivia'),
    ]),
    fase('URY_orthographic.svg', [
        opcao('Argentina', 'argentina'),
        opcao('Brasil', 'brazil'),
        opcao('Uruguai', 'uruguay', true),
        opcao('Chile', 'chile'),
    ]),
    fase('VEN_orthographic.svg', [
        opcao('Colômbia', 'colombia'),
        opcao('Venezuela', 'venezuela', true),
        opcao('Equador', 'ecuador'),
        opcao('Peru', 'peru'),
    ]),
    fase('ECU_orthographic.svg', [
        opcao('Peru', 'peru'),
        opcao('Colômbia', 'colombia'),
        opcao('Equador', 'ecuador', true),
        opcao('Venezuela', 'venezuela'),
    ]),
    fase('CUB_orthographic.svg', [
        opcao('Estados Unidos', 'united_states_of_america'),
        opcao('Cuba', 'cuba', true),
        opcao('México', 'mexico'),
        opcao('Honduras', 'honduras'),
    ]),
    fase('MAR_orthographic.svg', [
        opcao('Egito', 'egypt'),
        opcao('Arábia Saudita', 'saudi_arabia'),
        opcao('Marrocos', 'morocco', true),
        opcao('Líbia', 'libya'),
    ]),
    fase('DZA_orthographic.svg', [
        opcao('Marrocos', 'morocco'),
        opcao('Líbia', 'libya'),
        opcao('Argélia', 'algeria', true),
        opcao('Egito', 'egypt'),
    ]),
]

export const levels: Array<Array<ItemType>> = (() => {
    const chunkSize = 8;
    const result: Array<Array<ItemType>> = [];
    for (let i = 0; i < allFases.length; i += chunkSize) {
        result.push(allFases.slice(i, i + chunkSize));
    }
    return result;
})();
