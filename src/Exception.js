class InputException {
    checkInputException(input) {
        this.isNumber(input);
        this.isThousand(input);
    }

    isNumber(number) {
        if (isNaN(+number)) throw Error('[ERROR] 숫자를 입력해주세요.');
    }

    isThousand(money) {
        if (+money / 1000 !== Math.floor(+money / 1000))
            throw new Error('[ERROR] 천원 단위의 숫자를 입력해주세요.');

        return true;
    }
}

class LottoException {
    checkLottoException(lotto) {
        this.isSix(lotto);
        this.isNumber(lotto);
        this.isDuplication(lotto);
        this.isRange(lotto);
    }

    isNumber(lotto) {
        for (let number of lotto) {
            if (isNaN(+number)) throw Error('[ERROR] 숫자를 입력해주세요.');
        }
    }

    isSix(lotto) {
        const length = lotto.length;
        if (length !== 6)
            throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');

        return true;
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

class BonusException {
    checkBonusException(number, lotto = []) {
        this.isNumber(number);
        this.isRange(number);
        this.isDuplication(number, lotto);
    }

    isNumber(number) {
        if (isNaN(+number)) throw Error('[ERROR] 숫자를 입력해주세요.');
    }

    isRange(number) {
        if (+number < 1 || +number > 45)
            throw Error('[ERROR] 범위 내의 숫자를 입력해주세요.');
    }

    isDuplication(number, lotto) {
        if (lotto.indexOf(number.toString()) > -1)
            throw new Error('서로 다른 수를 입력해주세요.');
    }
}

module.exports = { InputException, LottoException, BonusException };
