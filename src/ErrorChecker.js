const ERROR_MESSAGE = require("./constants").ERROR_MESSAGE;

class ErrorChecker {
    static checkSixElementArray(array) {
        if (array.length !== 6) throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_NOT_SIX_DIGITS);
    }

    static checkDuplicatedElement(array, numOfValidElement) { //그냥 메시지를 입력 받는 것으로 변경해야 함
        const set = new Set(array);
        if (set.size !== numOfValidElement) throw new Error(`[ERROR] 로또 번호는 중복되지 않는 ${numOfValidElement}자리 숫자여야 합니다.`);
    }
}

module.exports = ErrorChecker;