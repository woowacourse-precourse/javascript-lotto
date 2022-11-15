const MESSAGE = {
    PUT_MONEY : "구입금액을 입력해 주세요.\n",
    PUT_WIN_NUMBER : "당첨 번호를 입력해 주세요.\n",
    PUT_BONUS_NUMBER : "보너스 번호를 입력해 주세요.\n",
    LOTTO_COUNT : "개를 구매했습니다.",
    WIN_STATISTICS : "당첨 통계 \n---",
}

const RESULT_MESSAGE = {
    FIFTH : "3개 일치 (5,000원) - ",
    FOURTH : "4개 일치 (50,000원) - ",
    THIRD : "5개 일치 (1,500,000원) - ",
    SECOND : "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    FIRST : "6개 일치 (2,000,000,000원) - ",
}

const ERROR = {
    MONEY_ERROR : "[ERROR] 1,000원 단위로 입력해 주세요.",
    NOT_NUMBER_ERROR : "[ERROR] 숫자를 입력해 주세요.",
    NEGATIVE_ERROR : "[ERROR] 양수를 입력해 주세요.",
    NOT_INT_ERROR : "[ERROR] 정수를 입력해 주세요.",
    LOTTO_DOMAIN_ERROR : "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
    BONUS_DOMAIN_ERROR : "[ERROR] 로또 번호와 보너스 숫자는 서로 중복되지 않아야 합니다.",
    LOTTO_OVERLAP_ERROR : "[ERROR] 로또 번호는 서로 중복되지 않아야 합니다.",
    LOTTO_COUNT_ERROR : "[ERROR] 로또 번호는 6개여야 합니다."
}

module.exports = {MESSAGE, RESULT_MESSAGE, ERROR};