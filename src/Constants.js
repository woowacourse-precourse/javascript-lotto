const INPUT_ERROR = {
    NOT_DIVIDED: "[ERROR] 로또를 살 수 없는 금액입니다.",
    DUPLICATED: "[ERROR] 중복된 번호입니다.",
    LESS_THAN_EXPECTED: "[ERROR] 잘못된 개수 입력입니다.",
    NOT_NUMBER: "[ERROR] 숫자가 아닙니다."
};

const GAME_MESSAGES = {
    PURCHASE: "구입 금액을 입력해 주세요.",
    PURCHASE_RESULT: "개를 구매했습니다.",
    INPUT_NUMBER: "당첨 번호를 입력해 주세요.",
    BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
    PRINT_RESULTS: "당첨 통계\n---",
    YIELD_FIRST: "총 수익률은 ",
    YIELD_LAST: "%입니다."
}

const PRICE = 1000;

const PRIZES = [
    5000, 
    50000, 
    1500000, 
    30000000, 
    2000000000
];

const RESULT = [
    "3개 일치 (5,000원)",
    "4개 일치 (50,000원)",
    "5개 일치 (1,500,000원)",
    "5개 일치, 보너스 볼 일치 (30,000,000원)",
    "6개 일치 (2,000,000,000원)"
];

module.exports = {INPUT_ERROR, GAME_MESSAGES, PRICE, PRIZES, RESULT};