import { ItemType } from "./types/GameProps"

export const Constants = {
    white: '#fff',
    black: '#000',
}

// NOVA ESTRUTURA: levels
export const levels: Array<Array<ItemType>> = (() => {
  const allFases: ItemType[] = [
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/BRA_orthographic.svg/1024px-BRA_orthographic.svg.png',
        first_option: {
           nome: 'Brasil',
           imageName: 'https://img.freeflagicons.com/thumb/round_icon/brazil/brazil_640.png',
           isCorrect: true
        },
        second_option: {
            nome: 'Argentina',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/argentina/argentina_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Bolívia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/bolivia/bolivia_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Colômbia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/colombia/colombia_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/PER_orthographic.svg/1024px-PER_orthographic.svg.png',
        first_option: {
           nome: 'Brasil',
           imageName: 'https://img.freeflagicons.com/thumb/round_icon/brazil/brazil_640.png',
           isCorrect: null
        },
        second_option: {
            nome: 'Uruguai',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/uruguay/uruguay_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Peru',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/peru/peru_640.png',
            isCorrect: true
        },
        fourth_option: {
            nome: 'Colômbia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/colombia/colombia_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/CHL_orthographic_%28%2Ball_claims%29.svg/1024px-CHL_orthographic_%28%2Ball_claims%29.svg.png',
        first_option: {
            nome: 'Uruguai',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/uruguay/uruguay_640.png',
            isCorrect: null
        },
        second_option: {
            nome: 'Chile',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/chile/chile_640.png',
            isCorrect: true
        },
        third_option: {
            nome: 'Paraguai',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/paraguay/paraguay_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Argentina',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/argentina/argentina_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/MEX_orthographic.svg/1024px-MEX_orthographic.svg.png',
        first_option: {
            nome: 'Honduras',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/honduras/honduras_640.png',
            isCorrect: null
        },
        second_option: {
            nome: 'Costa Rica',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/costa_rica/costa_rica_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Canadá',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/canada/canada_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'México',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/mexico/mexico_640.png',
            isCorrect: true
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Ukraine_-_disputed_2022_%28orthographic_projection%29.svg/1024px-Ukraine_-_disputed_2022_%28orthographic_projection%29.svg.png',
        first_option: {
            nome: 'Rússia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/russia/russia_640.png',
            isCorrect: null
        },
        second_option: {
            nome: 'Polónia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/poland/poland_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Ucrânia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/ukraine/ukraine_640.png',
            isCorrect: true
        },
        fourth_option: {
            nome: 'México',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/mexico/mexico_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/FRA_orthographic.svg/1024px-FRA_orthographic.svg.png',
        first_option: {
            nome: 'França',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/france/france_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'Itália',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/italy/italy_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Espanha',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/spain/spain_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Alemanha',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/germany/germany_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/ARG_orthographic.svg/1024px-ARG_orthographic.svg.png',
        first_option: {
            nome: 'Chile',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/chile/chile_640.png',
            isCorrect: null
        },
        second_option: {
            nome: 'Argentina',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/argentina/argentina_640.png',
            isCorrect: true
        },
        third_option: {
            nome: 'Uruguai',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/uruguay/uruguay_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Paraguai',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/paraguay/paraguay_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ITA_orthographic.svg/1024px-ITA_orthographic.svg.png',
        first_option: {
            nome: 'Itália',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/italy/italy_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'França',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/france/france_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Espanha',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/spain/spain_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Portugal',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/portugal/portugal_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/USA_orthographic.svg/1024px-USA_orthographic.svg.png',
        first_option: {
            nome: 'Canadá',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/canada/canada_640.png',
            isCorrect: null
        },
        second_option: {
            nome: 'Estados Unidos',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/united_states/united_states_640.png',
            isCorrect: true
        },
        third_option: {
            nome: 'México',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/mexico/mexico_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Cuba',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/cuba/cuba_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/DEU_orthographic.svg/1024px-DEU_orthographic.svg.png',
        first_option: {
            nome: 'Alemanha',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/germany/germany_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'Áustria',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/austria/austria_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Suíça',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/switzerland/switzerland_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Bélgica',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/belgium/belgium_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/ESP_orthographic.svg/1024px-ESP_orthographic.svg.png',
        first_option: {
            nome: 'Espanha',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/spain/spain_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'Portugal',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/portugal/portugal_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'França',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/france/france_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Itália',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/italy/italy_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/COL_orthographic.svg/1024px-COL_orthographic.svg.png',
        first_option: {
            nome: 'Colômbia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/colombia/colombia_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'Equador',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/ecuador/ecuador_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Venezuela',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/venezuela/venezuela_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Peru',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/peru/peru_640.png',
            isCorrect: null
        }
    },
    // NOVAS FASES
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/CAN_orthographic.svg/1024px-CAN_orthographic.svg.png',
        first_option: {
            nome: 'Canadá',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/canada/canada_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'Estados Unidos',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/united_states/united_states_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'México',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/mexico/mexico_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Groenlândia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/greenland/greenland_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/AUS_orthographic.svg/1024px-AUS_orthographic.svg.png',
        first_option: {
            nome: 'Austrália',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/australia/australia_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'Nova Zelândia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/new_zealand/new_zealand_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Indonésia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/indonesia/indonesia_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Papua Nova Guiné',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/papua_new_guinea/papua_new_guinea_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/IND_orthographic.svg/1024px-IND_orthographic.svg.png',
        first_option: {
            nome: 'Índia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/india/india_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'Paquistão',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/pakistan/pakistan_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Bangladesh',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/bangladesh/bangladesh_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Nepal',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/nepal/nepal_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/EGY_orthographic.svg/1024px-EGY_orthographic.svg.png',
        first_option: {
            nome: 'Egito',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/egypt/egypt_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'Líbia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/libya/libya_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Sudão',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/sudan/sudan_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Arábia Saudita',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/saudi_arabia/saudi_arabia_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/CHN_orthographic.svg/1024px-CHN_orthographic.svg.png',
        first_option: {
            nome: 'China',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/china/china_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'Japão',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/japan/japan_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Coreia do Sul',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/south_korea/south_korea_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Mongólia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/mongolia/mongolia_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/RUS_orthographic.svg/1024px-RUS_orthographic.svg.png',
        first_option: {
            nome: 'Rússia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/russia/russia_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'Cazaquistão',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/kazakhstan/kazakhstan_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Ucrânia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/ukraine/ukraine_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Bielorrússia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/belarus/belarus_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/ZAF_orthographic.svg/1024px-ZAF_orthographic.svg.png',
        first_option: {
            nome: 'África do Sul',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/south_africa/south_africa_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'Namíbia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/namibia/namibia_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Botsuana',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/botswana/botswana_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Moçambique',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/mozambique/mozambique_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/JPN_orthographic.svg/1024px-JPN_orthographic.svg.png',
        first_option: {
            nome: 'Japão',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/japan/japan_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'China',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/china/china_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Coreia do Sul',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/south_korea/south_korea_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Filipinas',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/philippines/philippines_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/GBR_orthographic.svg/1024px-GBR_orthographic.svg.png',
        first_option: {
            nome: 'Reino Unido',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/united_kingdom/united_kingdom_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'Irlanda',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/ireland/ireland_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'França',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/france/france_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Bélgica',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/belgium/belgium_640.png',
            isCorrect: null
        }
    },
    {
        map: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/TUR_orthographic.svg/1024px-TUR_orthographic.svg.png',
        first_option: {
            nome: 'Turquia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/turkey/turkey_640.png',
            isCorrect: true
        },
        second_option: {
            nome: 'Grécia',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/greece/greece_640.png',
            isCorrect: null
        },
        third_option: {
            nome: 'Síria',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/syria/syria_640.png',
            isCorrect: null
        },
        fourth_option: {
            nome: 'Irã',
            imageName: 'https://img.freeflagicons.com/thumb/round_icon/iran/iran_640.png',
            isCorrect: null
        }
    }
  ];
  const chunkSize = 3;
  const result: Array<Array<ItemType>> = [];
  for (let i = 0; i < allFases.length; i += chunkSize) {
    result.push(allFases.slice(i, i + chunkSize));
  }
  return result;
})();