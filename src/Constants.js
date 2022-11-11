const MESSAGE = Object.freeze({
    ENTER_CASH: "구입금액을 입력해 주세요.\n",
    ENTER_WINNING_LOTTO: "당첨 번호를 입력해 주세요.\n",
    BUY_LOTTOS_COUNT: "개를 구매했습니다."
});

const ERROR = Object.freeze({
    INVAID_CACHE: "[ERROR] 구입 금액은 1000원 단위여야합니다.\n",
    CACHE_IS_NOT_NUMBER: "[ERROR] 입력값은 숫자여야 합니다.\n",
    NOT_SIX_NUMBER: "[ERROR] 로또 번호는 6개여야 합니다."
});

module.exports = { MESSAGE, ERROR };