const { Console } = require('@woowacourse/mission-utils');
const makeErrorMsg = require('./utils');
const { MESSAGE, ERROR_MESSAGE, NUM } = require('./constants');

class LottoNumberGenerator {
  #winnerNumbers = [];
  #bonusNumber;

  drawLottery() {
    Console.readLine(
      MESSAGE.LOTTO_NUMBER_GENERATOR.INPUT_WINNER_NUMBER,
      (numbers) => {
        const winnerNumbers = numbers.split(',').map((n) => +n);
        LottoNumberGenerator.#validate(winnerNumbers, 'WINNER');
        this.#winnerNumbers = winnerNumbers;
      },
    );

    Console.readLine(
      MESSAGE.LOTTO_NUMBER_GENERATOR.INPUT_BONUS_NUMBER,
      (number) => {
        const bonusNumber = number.split(',').map((n) => +n);
        LottoNumberGenerator.#validate(bonusNumber, 'BONUS');
        this.#bonusNumber = bonusNumber;
      },
    );
  }

  static #validate(numbers, type) {
    if (numbers.filter((number) => Number.isNaN(number)).length > 0) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.LOTTO.NUMBER));
    }

    if (numbers.length !== NUM[type]) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.LOTTO.LENGTH));
    }

    if (new Set(numbers).size !== NUM[type]) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.LOTTO.DUPLICATION));
    }

    if (numbers.filter((number) => !(number >= 1 && number <= 45)).length > 0) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.LOTTO.RANGE));
    }
  }

  getNumbers() {
    return [this.#winnerNumbers, this.#bonusNumber];
  }
}

module.exports = LottoNumberGenerator;
