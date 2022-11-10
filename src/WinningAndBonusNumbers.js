const Lotto = require('./Lotto');
const Validation = require('./Validation');

class WinningAndBonusNumbers {
  constructor() {
    this.lotto = new Lotto();
    this.validation = new Validation();
  }

  sixNumbersInRange(numbers) {
    numbers = numbers.split(',');
    this.lotto.validate(numbers);
    this.validation.winningNumber(numbers);
  }
}

module.exports = WinningAndBonusNumbers;
