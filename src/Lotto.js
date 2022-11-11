const Application = require('./Application');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
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
}

module.exports = Lotto;
