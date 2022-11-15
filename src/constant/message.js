const MESSAGE = {
    PURCHASE: "구입금액을 입력해 주세요.\n",
    PURCHASE_RESULT: "개를 구매했습니다.",
    LOTTO_NUMBER: "당첨 번호를 입력해 주세요.\n",
    BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
    RESULT: "당첨 통계" + "\n" + "---",
    WINNING: {
        0: "3개 일치 (5,000원) - ",
        1: "4개 일치 (50,000원) - ",
        2: "5개 일치 (1,500,000원) - ",
        3: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
        4: "6개 일치 (2,000,000,000원) - ",
    },
    YIELD: "총 수익률은",
    KOREAN_ENDING_WORD: "입니다.",
    KOREAN_AMOUNT_WORD: "개",
};

const UNIT = {
    0: 5000,
    1: 50000,
    2: 1500000,
    3: 30000000,
    4: 2000000000,
};

const OPTION = {
    PRICE: 1000,
    LENGTH: 6,
    LOW_NUMBER: 1,
    HIGH_NUMBER: 45,
};

const BONUS_OPTION = {
    CHANCE: 10,
};

module.exports = { MESSAGE, UNIT, OPTION, BONUS_OPTION };
