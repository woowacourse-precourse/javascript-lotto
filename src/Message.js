const INPUT_MESSAGE = {
    PURCHASE: '구입금액을 입력해 주세요.',
    PRIZE: '당첨 번호를 입력해 주세요.',
    BONUS: '보너스 번호를 입력해 주세요.'
};

const ERROR_MESSAGE = {
    RANGE: "[ERROR] 1 ~ 45사이의 번호여야 합니다.",
    OVERLAP: "[ERROR] 번호는 중복될 수 없습니다.",
    DIVIDED: "[ERROR] 천원 단위로 입력해주세요.",
    COMMA: "[ERROR] 당첨 번호는 숫자와 숫자사이를 ,로 올바르게 구분시켜주세요.",
    NUMBER: "[ERROR] 숫자를 입력해주세요."
};

const WINNING_RESULT = [
    "3개 일치 (5,000원) -",
    "4개 일치 (50,000원) -",
    "5개 일치 (1,500,000원) -",
    "5개 일치, 보너스 볼 일치 (30,000,000원) -",
    "6개 일치 (2,000,000,000원) -",
];

const SUB_MESSAGE = {
    AMOUNT: "개를 구매했습니다.",
    RESULT: "당첨 통계",
    BLANK: "---",
}


module.exports = {INPUT_MESSAGE, ERROR_MESSAGE, WINNING_RESULT, SUB_MESSAGE};