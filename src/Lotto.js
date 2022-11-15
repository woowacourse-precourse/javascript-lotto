const { Console } = require('@woowacourse/mission-utils');
const Utils = require('./Utils');
const HandleException = require('./HandleException');

class Lotto {
    #numbers;

    constructor(numbers) {
        this.setNumbers(numbers);
        this.validate();
    }

    setNumbers(numbers) {
        if (typeof numbers === 'string') {
            this.#numbers = Utils.convertToNumberArray(numbers);
            return;
        }

        this.#numbers = numbers;
    }

    getNumbers() {
        return this.#numbers;
    }

    validate() {
        const numbers = this.getNumbers();
        const handleException = new HandleException();
        handleException.tryValidate(numbers, 'WinningLotto');
    }

    compareLotto(winningLotto) {
        const numbers = this.getNumbers();
        const matchCount = numbers.filter((number) => winningLotto.hasNumber(number)).length;

        return matchCount;
    }

    hasNumber(number) {
        if (typeof number !== 'number') {
            number = Utils.convertToNumber(number);
        }

        const numbers = this.getNumbers();
        return numbers.includes(number);
    }

    printLotto() {
        Console.print(`[${this.#numbers.join(', ')}]`);
    }

    get [Symbol.toStringTag]() {
        return 'Lotto';
    }
}

module.exports = Lotto;
