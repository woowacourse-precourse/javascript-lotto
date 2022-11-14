const { Console } = require('@woowacourse/mission-utils');

const { PHRASE, ERROR, LOTTO } = require('./constants');
const Lotto = require('./Lotto');
const ScoreMachine = require('./ScoreMachine');

class DrawMachine {
  #winningNumber;
  #bonusNumber;

  constructor() {
    this.scoreMachine = new ScoreMachine();
  }

  darwWinningNumber() {
    Console.readLine(PHRASE.WINNING_NUMBER, (input) => {
      this.validateWinningNumber(input);
      this.#winningNumber = input.split(',').map((number) => Number(number));
      this.drawBonusNumber();
    });
  }

  validateWinningNumber(input) {
    const inputNumberArray = input.split(',');
    if (inputNumberArray) Lotto.validate(inputNumberArray);
    else throw new Error(ERROR.WINNING_NUMBER);
  }

  drawBonusNumber() {
    Console.readLine(PHRASE.BONUS_NUMBER, (input) => {
      this.validateBonusNumber(input);
      this.#bonusNumber = Number(input);
      this.scoreMachine.compare(this.#winningNumber, this.#bonusNumber);
    });
  }

  validateBonusNumber(input) {
    if (isNaN(input)) throw new Error(ERROR.BONUS_NUMBER);
    if (input < LOTTO.MIN_NUMBER || input > LOTTO.MAX_NUMBER)
      throw new Error(ERROR.LOTTO_NUMBER_RANGE);
  }
}

module.exports = DrawMachine;
