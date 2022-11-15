const PRIZE_MONEY = {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000
};

const PRIZE_INDEX = {
    FIRST: 4,
    SECOND: 3,
    THIRD: 2,
    FOURTH: 1,
    FIFTH: 0,
    NOTHING: -1,
};

const ERROR_MESSAGE = {
    LOTTO_NUMBERS_NOT_SIX_DIGITS: "[ERROR] 로또 번호는 6개여야 합니다.",
    LOTTO_NUMBERS_DUPLICATE: "[ERROR] 로또 번호는 중복되지 않는 6자리 숫자여야 합니다.",
    NOT_A_NUMBER: "[ERROR]",
    NOT_VALID_RANGE: "[ERROR] 1~45 사이의 숫자를 입력해주세요.",
};

module.exports = {
    PRIZE_MONEY,
    PRIZE_INDEX,
    ERROR_MESSAGE,
};