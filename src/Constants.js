const MESSAGE = Object.freeze({
    ENTER_CASH: "구입금액을 입력해 주세요.\n",
    ENTER_BOUNS_NUMBER: "보너스 번호를 입력해 주세요.\n",
    ENTER_WINNING_LOTTO: "당첨 번호를 입력해 주세요.\n",
    BUY_LOTTOS_COUNT: "개를 구매했습니다.",
    RANK_TEXT: [
        "6개 일치 (2,000,000,000원)",
        "5개 일치, 보너스 볼 일치 (30,000,000원)",
        "5개 일치 (1,500,000원)",
        "4개 일치 (50,000원)",
        "3개 일치 (5,000원)"
    ],
});

const ERROR = Object.freeze({
    INVAID_CASH: "[ERROR] 구입 금액은 1000원 단위여야합니다.",
    CASH_IS_NOT_NUMBER: "[ERROR] 입력값은 숫자여야 합니다.",
    CASH_IS_NOT_NATURAL_NUMBER: "[ERROR] 입력값은 0보다 큰 숫자여야 합니다.",
    NOT_SIX_NUMBER: "[ERROR] 로또 번호는 총 6개여야 합니다.",
    NOT_UNIQUE: "[ERROR] 중복된 숫자가 포함되어있습니다.",
    NOT_NUMBER: "[ERROR] 숫자가 아닌 값이 포함되어있습니다.",
    INVAID_NUMBER: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
    HAS_NUMBER: "[ERROR] 당첨번호에 이미 포함되어있는 숫자입니다."
});

const WINNING_LOTTO = [2_000_000_000, 30_000_000, 1_500_000, 50_000, 5_000];


module.exports = { MESSAGE, ERROR, WINNING_LOTTO };