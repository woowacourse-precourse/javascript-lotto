const CalculateLotto = require('./CalculateLotto');
const Exception = require('./Exception');
const { RESULT_MESSAGE } = require('./utils/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.exception = new Exception();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.exception.validateWinningNumber(numbers);
  }

  get winningNumber() {
    return this.#numbers;
  }

  getResult(bonusNumber, userLottoNumbers, purchaseCount) {
    const calculator = new CalculateLotto(
      this.winningNumber,
      bonusNumber,
      userLottoNumbers,
      purchaseCount
    );
    const USER_LOTTO_RESULT = calculator.testUserLottos();
    const USER_PROFIT_RATE = calculator.calculateProfitRate();

    return [RESULT_MESSAGE.lottoResult(USER_LOTTO_RESULT), USER_PROFIT_RATE];
  }
}

module.exports = Lotto;
