const MissionUtils = require("@woowacourse/mission-utils");
const LottoCalculator = require("./LottoCalculator");
const { ERROR_MESSAGE, INPUT_MESSAGE } = require("./constants/MessageConstants");
const { RANGE, LOTTO } = require("./constants/NumberConstants");

class LottoManager {
  #winningNumbers;
  #bonusNumber;
  usersLottos;

  constructor(usersLottos) {
    this.usersLottos = usersLottos;
  }

  start() {
    this.inputWinningNumbers();
  }

  sendToCalculator() {  
    const lottoCalculator = new LottoCalculator(this.usersLottos);
    lottoCalculator.winningNumbers = this.#winningNumbers
    lottoCalculator.bonusNumber = this.#bonusNumber;

    lottoCalculator.calculate();
  }

  inputWinningNumbers() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.INPUT_WINNING_NUMBERS, (winningNumbers) => {
      winningNumbers = winningNumbers.split(',');
      this.#winningNumbers = winningNumbers.map((idx) => Number(idx));
      this.checkInputWinningNumbers();

      this.inputBonusNumber();
    });
  }

  checkInputWinningNumbers() {
    const winningNumbers = new Set(this.#winningNumbers);
    const filteredWinningNumbers = this.filterRange(this.#winningNumbers, RANGE.START, RANGE.END);
  
    if (this.#winningNumbers.includes(NaN) === true) {
      throw Error(ERROR_MESSAGE.IS_NOT_A_NUMBER);
    }

    if (this.#winningNumbers.length !== LOTTO.SIX_NUMBERS) {
      throw Error(ERROR_MESSAGE.IS_NOT_A_SIX_LENGTH);
    }

    if (winningNumbers.size !== LOTTO.SIX_NUMBERS) {
      throw Error(ERROR_MESSAGE.WINNING_NUMBERS_DO_NOT_OVERLAP);
    }

    if (filteredWinningNumbers.length !== LOTTO.SIX_NUMBERS) {
      throw Error(ERROR_MESSAGE.RANGE_IS_WRONG);
    }
  }

  filterRange(arr, a, b) {
    return arr.filter(arr => (arr >= a && arr <= b));
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      this.#bonusNumber = Number(bonusNumber);
      this.checkInputBonusNumber();
      this.sendToCalculator();
    });
  }

  checkInputBonusNumber() { 
    if (Number.isNaN(this.#bonusNumber) === true) {
      throw Error(ERROR_MESSAGE.IS_NOT_A_NUMBER);
    }

    if ((this.#bonusNumber < RANGE.START) || (RANGE.END < this.#bonusNumber)) {
      throw Error(ERROR_MESSAGE.RANGE_IS_WRONG);
    }

    if (this.#winningNumbers.includes(this.#bonusNumber)) {
      throw Error(ERROR_MESSAGE.BONUS_NUMBER_DO_NOT_OVERLAP);
    }
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = LottoManager;
