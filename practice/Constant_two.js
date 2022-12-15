const MONEY = {
    MIN : 1000 ,
    UNIT : 1000 ,
}

const RANDOM_LOTTO = {
    COUNT : 6
}

const ALL_LOTTO = {
    MIN : 1,
    MAX : 45,
}

const USER_LOTTO = {
    COUNT : 6,
    BONUS : 1,
}

const INPUT_MESSAGE = {
    BUY : "구입금액을 입력해 주세요.\n",
    USER_LOTTO : "\n당첨 번호를 입력해 주세요.\n",
    BONUS : "\n보너스 번호를 입력해 주세요.\n",
}

const ERROR_MESSAGE = {
    LOTTO : "[ERROR] Lotto의 입력값이 잘못되었습니다.",
    BONUS : "[ERROR] Bonus의 입력값이 잘못되었습니다.",
    MONEY : "[ERROR] Money의 입력값이 잘못되었습니다.",
}


module.exports = {MONEY, RANDOM_LOTTO, ALL_LOTTO, USER_LOTTO, ERROR_MESSAGE, INPUT_MESSAGE}
