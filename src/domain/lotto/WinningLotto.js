const Lotto = require('./Lotto');
const LottoNumber = require('./LottoNumber');
const Validation = require('../../util/Validation');
const WinningLottoDuplicatedException = require('../../exception/lotto/WinningLottoDuplicatedException');

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    WinningLotto.validate(numbers, bonusNumber);
    LottoNumber.validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  static validate(numbers, bonusNumber) {
    WinningLotto.validateBonusNumberDuplicated(numbers, bonusNumber);
  }

  static validateBonusNumberDuplicated(numbers, bonusNumber) {
    Validation.validate({
      condition: numbers.includes(bonusNumber),
      exception: new WinningLottoDuplicatedException(bonusNumber),
    });
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = WinningLotto;
