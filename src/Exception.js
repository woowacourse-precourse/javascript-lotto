class InputException {
    constructor(input) {
        this.input = input;
    }

    checkInputException() {
        this.isThousand(this.input);
    }

    isThousand(money) {
        if (+money / 1000 !== Math.floor(+money / 1000))
            throw new Error('[ERROR] 천원 단위의 숫자를 입력해주세요.');

        return true;
    }
}

class LottoException {
    constructor(lotto, bonus) {
        this.lotto = lotto;
        this.bonus = bonus;
    }

    checkLottoException() {
        this.isSix(this.lotto);
        this.isNumber(this.lotto, this.bonus);
        this.isDuplication(this.lotto, this.bonus);
    }

    isNumber(lotto, bonus) {
        for (let number of lotto) {
            if (isNaN(+number)) throw Error('[ERROR] 숫자를 입력해주세요.');
        }

        if (isNaN(+bonus)) throw Error('[ERROR] 숫자를 입력해주세요.');
    }

    isSix(lotto) {
        const length = lotto.length;
        if (length !== 6)
            throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');

        return true;
    }

    isDuplication(lotto, bonus) {
        const inputSet = new Set(lotto);

        if (inputSet.size !== 6)
            throw new Error('[ERROR] 서로 다른 수를 입력해주세요.');

        inputSet.add(bonus);

        if (inputSet.size !== 7)
            throw new Error('[ERROR] 서로 다른 수를 입력해주세요.');
    }
}
module.exports = { InputException, LottoException };
