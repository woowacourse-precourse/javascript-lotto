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
    constructor(input, type) {
        this.input = input;
        this.type = type;
    }

    checkLottoException() {
        if (this.type !== 'bonus') this.isSix(this.input);
        this.isNumber(this.input);
    }

    isNumber(lottos) {
        for (let number of lottos) {
            if (isNaN(+number)) throw Error('[ERROR] 숫자를 입력해주세요.');
        }
    }
    isSix(lottos) {
        const length = lottos.length;
        if (length !== 6)
            throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');

        return true;
    }
}
module.exports = { InputException, LottoException };
