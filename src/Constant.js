const MESSAGE = {
    GAME_START_MSG : "구입금액을 입력해 주세요.",
    LOTTO_NUMBER_INPUT : "당첨 번호를 입력해 주세요.",
    BONUS_NUMBER_INPUT : "보너스 번호를 입력해 주세요.",
    WINNING_STATISTICS : "당첨 통계\n---",

}

const LOTTO_LENGTH = 6;
const RANK = 5;
const RANKING = {
    '4' : "3개 일치 (5,000원) - ",
    '3' : "4개 일치 (50,000원) - ",
    '2' : "5개 일치 (1,500,000원) - ",
    '1' : "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    '0' : "6개 일치 (2,000,000,000원) - ",
}

const WINNER = {
    '0' : {
        rank : 0,
        winnings : 0,
    },
    '1' : {
        rank : 0,
        winnings : 0,
    },
    '2' : {
        rank : 0,
        winnings : 0,
    },
    '3' : {
        rank : 5,
        winnings : 5000,
    },
    '4' : {
        rank : 4,
        winnings : 50000,
    },
    '5' : {
        bonus : {
            rank : 2,
            winnings : 30000000,
        },
        notBonus : {
            rank : 3,
            winnings : 1500000,
        }
    },
    '6' : {
        rank : 6,
        winnings : 200000000,
    },
};

module.exports = {MESSAGE, WINNER, LOTTO_LENGTH, RANK, RANKING};
