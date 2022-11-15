const { Helper } = require("./lib/Helper");

class Lotto {
  #numbers;

  constructor(numbers) {
    Helper.checkValidLength(numbers);
    Helper.checkDuplicatedNumber(numbers);
    Helper.checkRangedNumber(numbers);
    this.#numbers = numbers;
  }

  returnSameNumberCount(purchasedLottoNumbersList) {
    let count = 0;
    this.#numbers.forEach((number) => {
      if (purchasedLottoNumbersList.includes(number) === true) {
        count += 1;
      }
    });
    return count;
  }

}

module.exports = Lotto;
