const Messages = require('./Messages');

class Validation {
  constructor() {
    this.winningNumbers;
  }

  purchaseAmount(money) {
    if (money % 1000 !== 0) throw new Error(Messages.ZERO_REST);
  }

  winningNumber(numbers) {
    this.winningNumbers = numbers;
  }

  bonusNumber(number) {
    if (number.length !== 1) throw new Error(Messages.ONLY_ONE_NUMBER);
    if (this.winningNumbers.includes(number[0])) throw new Error(Messages.NOT_DUPLICATE);

    number = Number(number);
    if (!(number >= 1 && number <= 45)) throw new Error(Messages.NUMBERS_IN_RANGE);
  }
}

module.exports = Validation;
