const LOTTO = {
    LENGTH : 6,
    RANGE_LEFT : 1,
    RANGE_RIGHT : 45,
    PRISE : 1000,
};

const MESSAGE = {
    GET_MONEY : "구입금액을 입력해 주세요.\n",
    LOTTO_AMOUNT : "개를 구매했습니다.",
    GET_WINNING_NUM : "\n당첨 번호를 입력해 주세요.\n",
    GET_BONNUS_NUM : "\n보너스 번호를 입력해 주세요.\n",
};

const RESULT = {
    FIRST : "6개 일치 (2,000,000,000원) - ",
    SECOND : "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    THIRD : "5개 일치 (1,500,000원) - ",
    FOURTH : "4개 일치 (50,000원) - ",
    FIFTH : "3개 일치 (5,000원) - ",
    UNIT : "개",
    YIELD : "총 수익률은 ",
    YEILD_UNIT : "%입니다.",
}

const PRISE = [
    0,
    2000000000,
    30000000,
    1500000,
    50000,
    5000
]

const ALERT = {
    HEADER : "[ERROR] ",
    LOTTO_LENGTH : "로또 번호는 6개 입니다.",
    LOTTO_UNIQUE : "로또 번호는 중복될수 없습니다.",
    LOTTO_INT : "로또 번호는 정수형 입니다.",
    LOTTO_RANGE : "로또 번호의 범위는 1~45 입니다.",
    BONUS_INT : "보너스 번호는 정수형 입니다.",
    BONUS_RANGE : "보너스 번호의 범위는 1~45 입니다.",
    BONUS_UNIGUE : "보너스 번호는 당첨 번호와 중복될 수 없습니다.",
    MONEY_INT : "구입 금액은 정수형 입니다.",
    MONEY_UNIT : "구입 금액은 1000원 단위 입니다.",
}

const DISPLAY = {
    LEFT : '[',
    RIGHT : ']',
    SPLIT_UNIT : ',',
    UNIT : ', '
}

module.exports = { LOTTO, MESSAGE, RESULT, PRISE, ALERT, DISPLAY };