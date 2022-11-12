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
    const newArray = Application.copyArray(array);

    if (Application.isMatcheCount(count, DATUM_POINT)) {
      newArray[0] += 1;
    }

    return newArray;
  }

  static isFourMatche(count, array) {
    const DATUM_POINT = 4;
    const newArray = Application.copyArray(array);

    if (Application.isMatcheCount(count, DATUM_POINT)) {
      newArray[1] += 1;
    }

    return newArray;
  }

  static isFiveMatche(count, array, target = [], bonus = 0) {
    const DATUM_POINT = 5;
    const newArray = Application.copyArray(array);
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
    const newArray = Application.copyArray(array);

    newArray[3] += 1;

    return newArray;
  }

  static isSixMatche(count, array) {
    const DATUM_POINT = 6;
    const newArray = Application.copyArray(array);

    if (Application.isMatcheCount(count, DATUM_POINT)) {
      newArray[4] += 1;
    }

    return newArray;
  }

  static calculateCount(winningNumbers, value) {
    let count = 0;

    winningNumbers.forEach((item) => {
      if (value.includes(item)) {
        count += 1;
      }
    });

    return count;
  }

  static analysisWinningAmount(winningAmount, count, lottoArray, bonus) {
    let copiedWinningAmount = Application.copyArray(winningAmount);

    copiedWinningAmount = Lotto.isThreeMatche(count, copiedWinningAmount);
    copiedWinningAmount = Lotto.isFourMatche(count, copiedWinningAmount);
    copiedWinningAmount = Lotto.isFiveMatche(count, copiedWinningAmount, lottoArray, bonus);
    copiedWinningAmount = Lotto.isSixMatche(count, copiedWinningAmount);

    return copiedWinningAmount;
  }

  static calculateTotalAmount(winningAmount) {
    const MAX_LENGTH = 5;

    Application.validateArrayLength(winningAmount, MAX_LENGTH);

    const copiedArray = Application.copyArray(winningAmount);
    const add = Application.add.bind(Application);
    const multiply = Application.multiplication.bind(Application);
    const LottoAmount = [5000, 50000, 1500000, 30000000, 2000000000];

    return copiedArray.map((count, index) => multiply(count, LottoAmount[index])).reduce(add);
  }

  getLottoResult(winningNumbers, bonus) {
    let winningAmount = [0, 0, 0, 0, 0];

    this.#numbers.forEach((value) => {
      Lotto.validate(value);

      const count = Lotto.calculateCount(winningNumbers, value);
      winningAmount = Lotto.analysisWinningAmount(winningAmount, count, value, bonus);
    });

    return winningAmount;
  }
}

module.exports = Lotto;
