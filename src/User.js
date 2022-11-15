const Validator = require('./utils/Validator');
class User {
  #amount;

  constructor() {
    this.Validator = new Validator();
  }

  isValidAmount(amount) {
    if (
      this.Validator.isNumber(amount) !== Error &&
      this.Validator.isUnitOfThousnds(amount) !== Error
    ) {
      this.#amount = amount;
      return true;
    }
  }

  calculateReturnRate(result) {
    const LotteryAmount = {
      0: 5000,
      1: 50000,
      2: 1500000,
      3: 30000000,
      4: 2000000000,
    };

    const LotteryAmountSum = result.reduce(
      (acc, cur, index) => acc + LotteryAmount[index] * cur,
      0,
    );

    const returnRate = (LotteryAmountSum / this.#amount) * 100;

    return returnRate.toFixed(1);
  }
}

module.exports = User;
