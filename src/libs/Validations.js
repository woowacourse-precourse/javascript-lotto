const Utils = require('./Utils');
const { ERROR_MESSAGE } = require('./const');

class Validations {
  static isThousand(money) {
    if (money % 1000 !== 0) throw new Error(ERROR_MESSAGE.purchase);
  }

  static isNotCommaPrize(userInput) {
    if (userInput.includes(',') === false) throw new Error(ERROR_MESSAGE.comma);
  }

  static isCommaBonus(userInput) {
    if (userInput.includes(',') === true)
      throw new Error(ERROR_MESSAGE.manyInputBonus);
  }

  static isOverlapPrize(numbers) {
    const lottoSet = new Set();
    numbers.forEach(number => {
      lottoSet.add(number);
    });
    const isOverlap = lottoSet.size !== numbers.length;
    if (isOverlap) throw new Error(ERROR_MESSAGE.overlapPrize);
  }

  static isRangePrize(numbers) {
    numbers.forEach(number => {
      this.isRange(number);
    });
  }

  static isRange(number) {
    if (Utils.isRange(number) === false) {
      throw new Error(ERROR_MESSAGE.range);
    }
  }

  static isSixLength(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.manyInputPrize);
  }

  static isOverlapBonus(numbers, number) {
    if (numbers.includes(number) === true)
      throw new Error(ERROR_MESSAGE.overlapBonus);
  }
}

module.exports = Validations;
