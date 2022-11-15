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
}

module.exports = BonusNumber;
