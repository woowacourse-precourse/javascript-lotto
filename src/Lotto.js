const { Helper } = require("./lib/Helper");

class Lotto {
  #numbers;

  constructor(numbers) {
    Helper.checkValidLength(numbers);
    Helper.checkDuplicatedNumber(numbers);
    Helper.checkRangedNumber(numbers);
    this.#numbers = numbers;
  }

}

module.exports = Lotto;
