class InputException {
    checkInputException(input) {
        this.isThousand(input);
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
}
module.exports = { InputException, LottoException };
