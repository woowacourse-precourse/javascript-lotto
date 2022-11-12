const Application = require('./Application');

class Lotto {
  #numbers;

  constructor(numbers) {
    Application.validateArray(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    const CRITERION = 6;

    Application.validateArray(numbers);
    Application.validateArrayLength(numbers, CRITERION);
    Application.checkArrayDuplicate(numbers);
  }

  static createLotto() {
    const START = 1;
    const END = 45;
    const LENGTH = 6;

    const randomNumbers = Application.createUniqueNumbers(START, END, LENGTH);
    const sortedArray = Application.sortAscending(randomNumbers);

    return sortedArray;
  }

  static buyLotto(purchaseAmount) {
    const UNIT_AMOUNT = 1000;
    const lottoCount = Application.purchaseCount(purchaseAmount, UNIT_AMOUNT);

    return Array.from({ length: lottoCount }, this.createLotto);
  }

  static isThreeMatche(count, array) {
    const DATUM_POINT = 3;
    const newArray = [...array];

    if (Application.isMatcheCount(count, DATUM_POINT)) {
      newArray[0] += 1;
    }

    return newArray;
  }

  static isFourMatche(count, array) {
    const DATUM_POINT = 4;
    const newArray = [...array];

    if (Application.isMatcheCount(count, DATUM_POINT)) {
      newArray[1] += 1;
    }

    return newArray;
  }

  static isFiveMatche(count, array, target = [], bonus = 0) {
    const DATUM_POINT = 5;
    const newArray = [...array];
    const isFive = Application.isMatcheCount(count, DATUM_POINT);

    if (isFive && target.includes(bonus)) {
      return Lotto.isBonusMatche(newArray);
    }

    if (isFive) {
      newArray[2] += 1;
    }

    return newArray;
  }

  static isBonusMatche(array) {
    const newArray = [...array];

    newArray[3] += 1;

    return newArray;
  }

  static isSixMatche(count, array) {
    const DATUM_POINT = 6;
    const newArray = [...array];

    if (Application.isMatcheCount(count, DATUM_POINT)) {
      newArray[4] += 1;
    }

    return newArray;
  }
}

module.exports = Lotto;
