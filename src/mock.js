// 검색을 -> 현규 -> ["1", "2" ...];

const MockData = {
    "1" : [
        {
            "현규" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Lillia',
                playerDeal : 50000,
                playerTank : 20000,
                playerHeal : 10000,
            },
            "인태" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Hecarim',
                playerDeal : 30000,
                playerTank : 70000,
                playerHeal : 20000,
            },
            "민수" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Kalista',
                playerDeal : 20000,
                playerTank : 110000,
                playerHeal : 0,
            },
            "민규" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Kayn',
                playerDeal : 10000,
                playerTank : 20000,
                playerHeal : 220000,
            },
            "형래" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Briar',
                playerDeal : 20000,
                playerTank : 100000,
                playerHeal : 100000,
            },
        }
    ],
    "2" : [
        {
            "동균" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Caitlyn',
                playerDeal : 53000,
                playerTank : 27000,
                playerHeal : 12000,
            },
            "영덕" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Blitzcrank',
                playerDeal : 32000,
                playerTank : 30000,
                playerHeal : 2000,
            },
            "태우" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Belveth',
                playerDeal : 27000,
                playerTank : 108000,
                playerHeal : 2000,
            },
            "지웅" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Leblanc',
                playerDeal : 11000,
                playerTank : 8000,
                playerHeal : 225000,
            },
            "민영" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'masterYi',
                playerDeal : 28000,
                playerTank : 110000,
                playerHeal : 3000,
            },
        }
    ],
    "3" : [
        {
            "현규" : {
                matchFinalResult : 'lose',
                playerTeam : 'A',
                playerChamp : 'Kogmaw',
                playerDeal : 60000,
                playerTank : 40000,
                playerHeal : 6000,
            },
            "진규" : {
                matchFinalResult : 'lose',
                playerTeam : 'A',
                playerChamp : 'Ahri',
                playerDeal : 40000,
                playerTank : 75000,
                playerHeal : 22000,
            },
            "찬규" : {
                matchFinalResult : 'lose',
                playerTeam : 'A',
                playerChamp : 'Annie',
                playerDeal : 27000,
                playerTank : 115000,
                playerHeal : 2000,
            },
            "점숙" : {
                matchFinalResult : 'lose',
                playerTeam : 'A',
                playerChamp : 'Darius',
                playerDeal : 10600,
                playerTank : 22000,
                playerHeal : 229000,
            },
            "노익" : {
                matchFinalResult : 'lose',
                playerTeam : 'A',
                playerChamp : 'Draven',
                playerDeal : 80000,
                playerTank : 40000,
                playerHeal : 7000,
            },
        }
    ],
    "4" : [
        {
            "현규" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Aphelios',
                playerDeal : 55000,
                playerTank : 29000,
                playerHeal : 10000,
            },
            "인태" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Azir',
                playerDeal : 32000,
                playerTank : 77000,
                playerHeal : 9000,
            },
            "민수" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Gnar',
                playerDeal : 50000,
                playerTank : 25000,
                playerHeal : 8000,
            },
            "민규" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Jax',
                playerDeal : 30000,
                playerTank : 12000,
                playerHeal : 0,
            },
            "형래" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Jhin',
                playerDeal : 47000,
                playerTank : 22000,
                playerHeal : 0,
            },
        }
    ],
    "5" : [
        {
            "현규" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Cassiopeia',
                playerDeal : 55000,
                playerTank : 82000,
                playerHeal : 12000,
            },
            "인태" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Lucian',
                playerDeal : 35000,
                playerTank : 15000,
                playerHeal : 2000,
            },
            "민수" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Karthus',
                playerDeal : 28000,
                playerTank : 115000,
                playerHeal : 6000,
            },
            "민규" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Anivia',
                playerDeal : 20000,
                playerTank : 70000,
                playerHeal : 5000,
            },
            "형래" : {
                matchFinalResult : 'win',
                playerTeam : 'A',
                playerChamp : 'Ekko',
                playerDeal : 22000,
                playerTank : 17000,
                playerHeal : 1900,
            },
        }
    ],
    "6" : [
        {
            "현규" : {
                matchFinalResult : 'lose',
                playerTeam : 'A',
                playerChamp : 'Fiora',
                playerDeal : 58000,
                playerTank : 22000,
                playerHeal : 17000,
            },
            "인태" : {
                matchFinalResult : 'lose',
                playerTeam : 'A',
                playerChamp : 'Malphite',
                playerDeal : 35000,
                playerTank : 60000,
                playerHeal : 6000,
            },
            "민수" : {
                matchFinalResult : 'lose',
                playerTeam : 'A',
                playerChamp : 'missFortune',
                playerDeal : 27000,
                playerTank : 10000,
                playerHeal : 0,
            },
            "민규" : {
                matchFinalResult : 'lose',
                playerTeam : 'A',
                playerChamp : 'Gangplank',
                playerDeal : 18000,
                playerTank : 78000,
                playerHeal : 2000,
            },
            "형래" : {
                matchFinalResult : 'lose',
                playerTeam : 'A',
                playerChamp : 'Hwei',
                playerDeal : 26000,
                playerTank : 60000,
                playerHeal : 7000,
            },
        }
    ],
}

// css, 챔프, 챔프이미지
export default MockData