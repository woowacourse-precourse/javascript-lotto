// 상수
// 유저입력번호_correctLotto , money로 만든 번호_randomLotto
const MONEY = {
    MIN: 1000,
    UNIT: 1000,
}

const LOTTO = {
    MIN: 1,
    MAX: 45,
    COUNT: 6,
    BONUS_COUNT: 1,
}

const MESSAGE = {
    INPUT_MONEY: "구입금액을 입력해 주세요.\n",
    INPUT_USERLOTTO: "\n당첨 번호를 입력해 주세요.\n",
    INPUT_BONUSLOTTO: "\n보너스 번호를 입력해 주세요.\n",
    OUTPUT_BUY: "개를 구매했습니다.",
    OUTPUT_RESULT: "\n당첨 통계\n---",
    ERROR_RANGE: "[ERROR] 범위를 벗어난 숫자입니다.",
    ERROR_COUNT: "[ERROR] 적거나 많은 갯수입니다.",
    ERROR_TYPE: "[ERROR] 자연수를 입력해야 합니다."
}

const REWARD = {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000,
}

module.exports = {MONEY, LOTTO, MESSAGE, REWARD} ;