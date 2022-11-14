const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');

class LottoNumberGenerator {
  #winnerNumbers = [];
  #bonusNumber;

  drawLottery() {
    Console.readLine(
      MESSAGE.LOTTO_NUMBER_GENERATOR.INPUT_WINNER_NUMBER,
      (numbers) => {
        const winnerNumbers = numbers.split(',').map((n) => +n);
        this.#winnerNumbers = winnerNumbers;
      },
    );

    Console.readLine(
      MESSAGE.LOTTO_NUMBER_GENERATOR.INPUT_BONUS_NUMBER,
      (number) => {
        const bonusNumber = number.split(',').map((n) => +n);
        this.#bonusNumber = bonusNumber;
      },
    );
  }


  getNumbers() {
    return [this.#winnerNumbers, this.#bonusNumber];
  }
}

module.exports = LottoNumberGenerator;
