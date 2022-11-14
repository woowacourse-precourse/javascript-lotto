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

  static unitIncrease(array, count, datumPoint, point, increase) {
    if (Application.isMatcheCount(count, datumPoint)) {
      return Application.increase(array, point, increase);
    }

    return array;
  }

  static checkThreeMatche(count, winningAmount) {
    const [DATUM_POINT, POINT, INCREASE] = [3, 0, 1];

    return this.unitIncrease(winningAmount, count, DATUM_POINT, POINT, INCREASE);
  }

  static checkFourMatche(count, winningAmount) {
    const [DATUM_POINT, POINT, INCREASE] = [4, 1, 1];

    return this.unitIncrease(winningAmount, count, DATUM_POINT, POINT, INCREASE);
  }

  static checkFiveMatche(count, winningAmount, target = [], bonus = 0) {
    const [DATUM_POINT, POINT, INCREASE] = [5, 2, 1];
    const isFive = Application.isMatcheCount(count, DATUM_POINT);

    if (isFive && target.includes(bonus)) {
      return Lotto.checkBonusMatche(winningAmount);
    }

    if (isFive) {
      return Application.increase(winningAmount, POINT, INCREASE);
    }

    return winningAmount;
  }

  static checkBonusMatche(winningAmount) {
    const [POINT, INCREASE] = [3, 1];

    return Application.increase(winningAmount, POINT, INCREASE);
  }

  static checkSixMatche(count, winningAmount) {
    const [DATUM_POINT, POINT, INCREASE] = [6, 4, 1];

    return this.unitIncrease(winningAmount, count, DATUM_POINT, POINT, INCREASE);
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

    copiedWinningAmount = Lotto.checkThreeMatche(count, copiedWinningAmount);
    copiedWinningAmount = Lotto.checkFourMatche(count, copiedWinningAmount);
    copiedWinningAmount = Lotto.checkFiveMatche(count, copiedWinningAmount, lottoArray, bonus);
    copiedWinningAmount = Lotto.checkSixMatche(count, copiedWinningAmount);

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

    Lotto.validate(winningNumbers);

    this.#numbers.forEach((lotto) => {
      Lotto.validate(lotto);

      const count = Lotto.calculateCount(winningNumbers, lotto);
      winningAmount = Lotto.analysisWinningAmount(winningAmount, count, lotto, bonus);
    });

    return winningAmount;
  }
}

module.exports = Lotto;
