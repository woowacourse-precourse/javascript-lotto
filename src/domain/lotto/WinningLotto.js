const WinningLottoDuplicatedException = require('../../exception/lotto/WinningLottoDuplicatedException');
const Lotto = require('./Lotto');
const LottoNumber = require('./LottoNumber');

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    WinningLotto.validate(numbers, bonusNumber);
    this.#bonusNumber = LottoNumber.of(bonusNumber);
  }

  static validate(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      throw new WinningLottoDuplicatedException(bonusNumber);
    }
  }

  static of(numbers, bonusNumber) {
    return new WinningLotto(numbers, bonusNumber);
  }
}

module.exports = WinningLotto;
