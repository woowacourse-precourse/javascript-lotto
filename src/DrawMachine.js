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

  askWinningNumber() {
    Console.readLine(PHRASE.WINNING_NUMBER, this.run.bind(this));
  }

  run(input) {
    this.validateWinningNumber(input);
    this.acceptWinningNumber(input);
    this.askBonusNumber();
  }

  validateWinningNumber(input) {
    const inputNumberArray = input.split(',');
    if (inputNumberArray) Lotto.validate(inputNumberArray);
    else throw new Error(ERROR.WINNING_NUMBER);
  }

  acceptWinningNumber(input) {
    this.#winningNumber = input.split(',').map((number) => Number(number));
  }

  askBonusNumber() {
    Console.readLine(PHRASE.BONUS_NUMBER, this.run2.bind(this));
  }

  run2(input) {
    this.validateBonusNumber(input);
    this.acceptBonusNumber(input);
    this.scoreMachine.run(this.#winningNumber, this.#bonusNumber);
  }

  validateBonusNumber(input) {
    if (isNaN(input)) throw new Error(ERROR.BONUS_NUMBER_COUNT);
    if (input < LOTTO.MIN_NUMBER || input > LOTTO.MAX_NUMBER)
      throw new Error(ERROR.LOTTO_NUMBER_RANGE);
    if (this.#winningNumber.includes(Number(input)))
      throw new Error(ERROR.BONUS_NUMBER_OVERLAP);
  }

  acceptBonusNumber(input) {
    this.#bonusNumber = Number(input);
  }
}

module.exports = DrawMachine;
