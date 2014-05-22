var ARGOS = {
    DESENV_SERVERS:{
        ABRILSAC:[
            'JBDEV11',
            'JBDEV23'
        ]
    },

    HOMOLOG_SERVERS:{
        ABRILSAC:[
            'JBHOM23',
            'JBHOM34'
        ],
        CLUBE:[
            'JBHOM04',
            'JBHOM09'
        ],
        ASSINE:[
            'JBHOM01',
            'JBHOM02',
            'JBHOM06',
            'JBHOM07'
        ],
        SERVICOSASS:[
            'JBHOM05',
            'JBHOM10'
        ]
    },

    PROD_SERVERS:{
        ABRILSAC:[
            'JBPRD23',
            'JBPRD34'
        ],
        CLUBE:[
            'JBPRD04',
            'JBPRD09'
        ],
        ASSINE:[
            'JBPRD01',
            'JBPRD02',
            'JBPRD06',
            'JBPRD07',
            'JBPRD19',
            'JBPRD20'
        ],
        SERVICOSASS:[
            'JBPRD05',
            'JBPRD10'
        ]
    },

	favs : [{ groupName: "Projetos",
                list:[    
                    { name: "AssineAbril", url: "http://www.assine.abril.com.br" },
                    { name: "SAC", url: "http://www.sac.abril.com.br" },
                    { name: "Clube do Assinante", url: "http://www.clubedoassinante.abril.com.br/" }
                ]
            },
            { groupName: "Gerenciamento",
                list:[    
                    { name: "Jenkins", url: "http://webhomolog:8300/" },
                    { name: "Nexus", url: "http://webhomolog:8081/nexus/index.html" },
                    { name: "Confluence", url: "http://confluence.abril.com.br" }
                ]
            }
    ],

};
