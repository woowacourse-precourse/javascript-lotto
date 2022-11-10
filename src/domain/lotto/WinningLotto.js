const Lotto = require('./Lotto');

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    this.#bonusNumber = bonusNumber;
  }

  static validate(numbers, bonusNumber) {

  }

  static of(numbers, bonusNumber) {
    return new WinningLotto(numbers, bonusNumber);
  }
}

module.exports = WinningLotto;
