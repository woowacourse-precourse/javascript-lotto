const MESSAGE = Object.freeze({
    ENTER_CASH: "구입금액을 입력해 주세요.\n",
})

const ERROR = Object.freeze({
    INVAID_CACHE: "[ERROR] 구입 금액은 1000원 단위여야합니다.\n"
});

module.exports = { MESSAGE, ERROR };