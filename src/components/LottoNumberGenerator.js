const { Console } = require('@woowacourse/mission-utils');
const {
  makeErrorMsg,
  invalidNumber,
  invalidInputNum,
  invalidDuplication,
  invalidRange,
} = require('../utils/index');
const { MESSAGE, ERROR_MESSAGE, COUNT } = require('../constants/index');

class LottoNumberGenerator {
  #winningNumbers = { winnerNumbers: [], bonusNumber: 0 };

  drawLottery() {
    Console.readLine(
      MESSAGE.LOTTO_NUMBER_GENERATOR.INPUT_WINNER_NUMBER,
      (numbers) => {
        const winnerNumbers = numbers.split(',').map((n) => +n);
        this.#validate(winnerNumbers, 'WINNER_NUMBER');
        this.#winningNumbers.winnerNumbers = winnerNumbers;
      },
    );

    Console.readLine(
      MESSAGE.LOTTO_NUMBER_GENERATOR.INPUT_BONUS_NUMBER,
      (number) => {
        const bonusNumber = number.split(',').map((n) => +n);
        this.#validate(bonusNumber, 'BONUS_NUMBER');
        this.#winningNumbers.bonusNumber = bonusNumber[0];
      },
    );
  }

  #validate(numbers, type) {
    const { LOTTO_NUMBER, WINNER_DUPLICATION, BONUS_DUPLICATION, RANGE } =
      ERROR_MESSAGE;

    if (invalidNumber(numbers)) {
      throw new Error(makeErrorMsg(LOTTO_NUMBER));
    }

    if (invalidInputNum(numbers, COUNT[type])) {
      const inputLength = `${type}_LENTH`;
      throw new Error(makeErrorMsg(ERROR_MESSAGE[inputLength]));
    }

    if (
      type === 'BONUS_NUMBER' &&
      this.#winningNumbers.winnerNumbers.includes(numbers[0])
    ) {
      throw new Error(makeErrorMsg(BONUS_DUPLICATION));
    }

    if (type === 'WINNER_NUMBER' && invalidDuplication(numbers)) {
      throw new Error(makeErrorMsg(WINNER_DUPLICATION));
    }

    if (
      invalidRange(numbers, [COUNT.MIN_LOTTO_NUMBER, COUNT.MAX_LOTTO_NUMBER])
    ) {
      throw new Error(makeErrorMsg(RANGE));
    }
  }

  getNumbers() {
    return this.#winningNumbers;
  }
}

module.exports = LottoNumberGenerator;
