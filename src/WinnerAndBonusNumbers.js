const Lotto = require('./Lotto');

class WinnerAndBonusNumbers {
  constructor() {
    this.lotto = new Lotto();
  }

  enterNumbersInRange(numbers) {
    numbers = numbers.split(',');
    this.lotto.validate(numbers);
  }
}

module.exports = WinnerAndBonusNumbers;
