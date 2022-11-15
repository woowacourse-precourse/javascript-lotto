class ErrorChecker {
    static checkSixElementArray(array) {
        if (array.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    static checkDuplicatedElement(array, numOfValidElement) {
        const set = new Set(array);
        if (set.size !== numOfValidElement) throw new Error("[ERROR] 로또 번호는 중복되지 않는 6자리 숫자여야 합니다.");
    }
}

module.exports = ErrorChecker;