class BonusNumber {
    #number;

    constructor(number, lotto) {
        this.#number = number;
    }

    validateDuplicatedLotto(lotto, number) {
        if (!list.includes(number)) {
            throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복이 없어야 합니다.");
        }
    }

    validateRangeOfNumber(number) {
        if (number < 1 && number > 45) {
            throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 수여야 합니다.");
        }
    }

    validateIsInteger(number) {
        if (!Number.isInteger(number)) {
            throw new Error("[ERROR] 보너스 번호는 자연수여야 합니다.");
        }
    }
}

module.exports = BonusNumber;
