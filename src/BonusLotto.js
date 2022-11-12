class BonusLotto {
    #number;

    constructor(number, lotto) {
        this.validate(number, lotto);
        this.#number = number;
    }

    validate(number, lotto) {
        this.validateNumber(number);
        this.validateBonusAmount(number);
        this.validateLimitRangeOfNumber(number);
        this.noMultyWithBonus(number, lotto);
    }

    // 배열의 길이가 1 검증 함수
    validateBonusAmount(number) {
        if (number.length === 0 || number.length > 1) {
            throw new Error('[ERROR] 보너스 번호는 1개만 입력하세요.');
        }
    }

    // 배열의 요소가 숫자로 구성되어 있는지 검증 함수
    validateNumber(array) {
        const number = array.map((item) => Number.isNaN(item));
        if (number.includes(true)) {
            throw new Error('[ERROR] 보너스 번호는 숫자를 입력해야 합니다.');
        }
    }

    // 1개의 보너스 번호를 입력받았을때 1~45사이 검증 함수
    validateLimitRangeOfNumber(number) {
        if (number[0] > 45 || number[0] === 0 || number[0] < 0) {
            throw new Error('[ERROR] 보너스 번호는 1~45사이의 숫자를 입력해야 합니다.');
        }
    }

    // 당첨 번호와 보너스 번호의 중복 여부 검증 함수
    noMultyWithBonus(bonus, lotto) {
        const a = bonus.filter((multy) => lotto.includes(multy));
        if (a.length !== 0) {
            throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
        }
    }
}

module.exports = BonusLotto;
