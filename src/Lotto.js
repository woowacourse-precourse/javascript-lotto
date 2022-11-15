class Lotto {
    #numbers;

    constructor(numbers) {
        this.validate(numbers);
        this.#numbers = numbers;
    }

    validate(numbers) {
        this.isSix(numbers);
        this.isNumber(numbers);
        this.isDuplication(numbers);
        this.isRange(numbers);
    }

    // TODO: 추가 기능 구현

    isNumber(lotto) {
        for (let number of lotto) {
            if (isNaN(+number)) throw new Error('[ERROR] 숫자를 입력해주세요.');
        }
    }

    isSix(lotto) {
        const length = lotto.length;
        if (length !== 6)
            throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    isDuplication(lotto) {
        const inputSet = new Set(lotto);

        if (inputSet.size !== 6)
            throw new Error('[ERROR] 서로 다른 수를 입력해주세요.');
    }

    isRange(lotto) {
        for (let number of lotto) {
            if (number < 1 || number > 45)
                throw Error('[ERROR] 범위 내의 숫자를 입력해주세요.');
        }
    }
}

module.exports = Lotto;
