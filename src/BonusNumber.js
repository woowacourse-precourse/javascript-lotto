class BonusNumber {
    #number;

    constructor(number, lotto) {
        this.validate(number, lotto);
        this.#number = number;
    }

    validate(number, lotto) {
        this.validateDuplicatedLotto(lotto, number)
        this.validateRangeOfNumber(number)
        this.validateIsInteger(number)
    }

    validateDuplicatedLotto(lotto, number) {
        if (lotto.includes(number)) {
            throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복이 없어야 합니다.");
        }
    }

    validateRangeOfNumber(number) {
        if (number < 1 || number > 45) {
            throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 수여야 합니다.");
        }
    }

    validateIsInteger(number) {
        if (!Number.isInteger(number)) {
            throw new Error("[ERROR] 보너스 번호는 자연수여야 합니다.");
        }
    }

    getBonusNumber() {
        return this.#number;
    }
}

module.exports = BonusNumber;
