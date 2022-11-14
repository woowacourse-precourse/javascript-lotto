const { Console } = require("@woowacourse/mission-utils");

const LOTTO_STATISTICS = '\n당첨 통계\n---';

const PRINT_MESSAGE = '개를 구매했습니다.';

const RESULT_MESSAGE = Object.freeze({
    RANK_FIVE: "3개 일치 (5,000원) - ",
    RANK_FOUR: "4개 일치 (50,000원) - ",
    RANK_THREE: "5개 일치 (1,500,000원) - ",
    RANK_TWO: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    YOU_WIN: "6개 일치 (2,000,000,000원) - "
});

const showGameRank = (rankCntList) => {
    Console.print(RESULT_MESSAGE.RANK_FIVE + rankCntList[0] + '개');
    Console.print(RESULT_MESSAGE.RANK_FOUR + rankCntList[1] + '개');
    Console.print(RESULT_MESSAGE.RANK_THREE + rankCntList[2] + '개');
    Console.print(RESULT_MESSAGE.RANK_TWO + rankCntList[3] + '개');
    Console.print(RESULT_MESSAGE.YOU_WIN + rankCntList[4] + '개');
};

module.exports = {
    LOTTO_STATISTICS,
    PRINT_MESSAGE, 
    RESULT_MESSAGE,
    showGameRank
};