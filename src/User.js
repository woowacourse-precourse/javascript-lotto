const userException = require("./utils/userException");
const numberException = require('./utils/numberException');

class User {
    #amount;
    #lottoCount;
    #winningNumber;
    #bonusNumber;

    constructor(amount) {
        this.#amount = Number(amount);
        this.#lottoCount = parseInt(parseInt(Number(amount) / 1000));
    }

    amountException() {
        userException.isInDivisible(this.#amount);
        userException.isNotNumber(this.#amount);
    }

    winningNumberException() {
        numberException.isNotSix(this.#winningNumber);
        numberException.includeNotNumber(this.#winningNumber);
        numberException.isDuplicated(this.#winningNumber);
    }

    bonusNumberException() {
        if(isNaN(this.#bonusNumber) || this.#bonusNumber > 45 || this.#bonusNumber < 1) {
          throw new Error('[ERROR] 보너스 번호는 1~45사이의 숫자입니다.');
        }

    }

    parsingWinningNumber(userNumber) {
        return String(userNumber).trim().split(',').map(number => +number)
    }

    get amount() {
        return this.#amount;
    }

    get lottoCount() {
        return this.#lottoCount;
    }

    set lottoCount(count) {
        this.#lottoCount = count;
    }

    get winningNumber() {
        return this.#winningNumber;
    }

    set winningNumber(winning) {
        this.#winningNumber = winning;
    }

    get bonusNumber() {
        return this.#bonusNumber;
    }

    set bonusNumber(bonus) {
        this.#bonusNumber = bonus;
    }

}

module.exports = User;
