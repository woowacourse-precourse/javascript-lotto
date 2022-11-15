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
      return this.returnBonusNumberCount(
        purchasedLottoNumbersList,
        bounusNumber
      );
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

  returnMatchingNumberObj(countList) {
    const matchingNumberCountObj = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, Bonus: 0 };
    for (let count of countList) {
      matchingNumberCountObj[count] += 1;
    }
    return matchingNumberCountObj;
  }
}

module.exports = Lotto;
