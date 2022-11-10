const Lotto = require('./Lotto');

class WinningAndBonusNumbers {
  constructor() {
    this.lotto = new Lotto();
  }

  sixNumbersInRange(numbers) {
    numbers = numbers.split(',');
    this.lotto.validate(numbers);
  }
}

module.exports = WinningAndBonusNumbers;
