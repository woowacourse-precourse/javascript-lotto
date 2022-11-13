const START_MESSAGE = "구입금액을 입력해 주세요.";

const LOTTO_MESSAGE = {
    START_MESSAGE
};

const INVALID_INPUT_TYPE = "[ERROR] 입력에 숫자 이외의 문자가 있습니다.";
const NOT_DIVISIBLE_BY_1000 = "[ERROR] 구입 금액이 천의 단위로 나뉘어 떨어지지 않습니다.";
const ERROR_MASSAGE = {
    INVALID_INPUT_TYPE,
    NOT_DIVISIBLE_BY_1000,
};

module.exports = {
    LOTTO_MESSAGE,
    ERROR_MASSAGE,
};