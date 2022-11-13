const { isValidLottoNumbers } = require('../../backup/src/new/util/utils');

class LottoPublisher {
  #winningNumbers = [];
  #bonusNumber;

  get winningNumbers() {
    return this.#winningNumbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  validateWinningNumbers(numbers) {
    isValidLottoNumbers(numbers);
  }

  validateBonusNumber(number) {
    isValidLottoBonusNumber(number, this.#winningNumbers);
  }
}

module.exports = LottoPublisher;
