const { BUY_LOTTO } = require("./constant/constant");

class BuyLotto {
  constructor(numbers) {
    this.validate(numbers);
  }

  validate(numbers) {
    if (numbers % 1000 !== 0) {
      throw new Error(BUY_LOTTO.ERROR);
    }
    console.log(numbers);
  }
}

module.exports = BuyLotto;
