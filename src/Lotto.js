const { LottoException } = require('./Exception');

class Lotto {
    #numbers;

    constructor(numbers) {
        this.validate(numbers);
        this.#numbers = numbers;
    }

    validate(numbers) {
        const exception = new LottoException();
        exception.checkLottoException(numbers);
    }

    // TODO: 추가 기능 구현
}

module.exports = Lotto;
