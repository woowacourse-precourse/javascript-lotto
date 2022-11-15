const { Helper } = require("./lib/Helper");

class Lotto {
  #numbers;

  constructor(numbers) {
    Helper.checkValidLength(numbers);
    Helper.checkDuplicatedNumber(numbers);
    Helper.checkRangedNumber(numbers);
    this.#numbers = numbers;
  }

  returnSameNumberCount(purchasedLottoNumbersList, bounusNumber) {
    let count = 0;
    this.#numbers.forEach((number) => {
      if (purchasedLottoNumbersList.includes(number) === true) {
        count += 1;
      }
    });
    if (count === 5) {
      return this.returnBonusNumberCount(purchasedLottoNumbersList, bounusNumber);
    }
    return count;
  }

  returnBonusNumberCount(purchasedLottoNumbersList, bounusNumber) {
    let count = 0;
    const totalNumbersList = [...purchasedLottoNumbersList, bounusNumber];
    totalNumbersList.forEach((number) => {
      if (purchasedLottoNumbersList.includes(number) === true) {
        count += 1;
      }
    });
    if (count === 5) {
      return 5;
    }
    if (count === 6) {
      return "Bonus";
    }
  }

}

module.exports = Lotto;
