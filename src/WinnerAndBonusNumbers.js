const Lotto = require('./Lotto');

class WinnerAndBonusNumbers {
  constructor() {
    this.lotto = new Lotto();
  }

  sixNumbersInRange(numbers) {
    numbers = numbers.split(',');
    this.lotto.validate(numbers);
  }
}

module.exports = WinnerAndBonusNumbers;
