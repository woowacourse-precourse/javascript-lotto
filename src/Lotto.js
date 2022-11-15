const Function = require('./Function');
const START = 1;
const END = 45;
const MONEY_TYPE = 5;
const ARRAY_LENGTH = 6;
const MONEY_UNIT = 1000;


class Lotto {
  #numbers;

  constructor(numbers) {
    Function.checkArray(numbers);
    this.#numbers = numbers;
  }

  static verify(numbers) {
    Function.checkArray(numbers);
    Function.checkArrayLength(numbers, ARRAY_LENGTH);
    Function.checkArrayDuplicate(numbers);
  }

  static createLotto() {
    const randomNumbers = Function.createUniqueNumbers(START, END, ARRAY_LENGTH);
    const sortedArray = Function.sortAscending(randomNumbers);
    return sortedArray;
  }

  static buyLotto(purchaseAmount) {
    const lottoCount = Function.countLotto(purchaseAmount, MONEY_UNIT);
    return Array.from({ length: lottoCount }, this.createLotto);
  }

  static unitIncrease(array, count, matches, index, increase) {
    if (Function.checkCount(count, matches)) {
      return Function.increaseIndex(array, index, increase);
    }
    return array;
  }

  static checkThreeMatch(count, wonResult) {
    const [MATCHES, INDEX, INCREASE] = [3, 0, 1];

    return this.unitIncrease(wonResult, count, MATCHES, INDEX, INCREASE);
  }

  static checkFourMatch(count, wonResult) {
    const [MATCHES, INDEX, INCREASE] = [4, 1, 1];

    return this.unitIncrease(wonResult, count, MATCHES, INDEX, INCREASE);
  }

  static checkFiveMatch(count, wonResult, input = [], bonus = 0) {
    const [MATCHES, INDEX, INCREASE] = [5, 2, 1];
    const isFive = Function.checkCount(count, MATCHES);
    if (isFive && input.includes(bonus)) {
      return Lotto.checkBonusMatch(wonResult);
    }
    if (isFive) {
      return Function.increaseIndex(wonResult, INDEX, INCREASE);
    }
    return wonResult;
  }

  static checkBonusMatch(wonResult) {
    const [INDEX, INCREASE] = [3, 1];
    return Function.increaseIndex(wonResult, INDEX, INCREASE);
  }

  static checkSixMatch(count, wonResult) {
    const [MATCHES, INDEX, INCREASE] = [6, 4, 1];

    return this.unitIncrease(wonResult, count, MATCHES, INDEX, INCREASE);
  }

  static calculateCount(winningLotto, value) {
    let count = 0;
    winningLotto.forEach((item) => {
      if (value.includes(item)) {
        count += 1;
      }
    });
    return count;
  }

  static calcWonResult(wonResult, count, lottoArray, bonus) {
    let wonResultCopied = Function.copyArray(wonResult);
    wonResultCopied = Lotto.checkThreeMatch(count, wonResultCopied);
    wonResultCopied = Lotto.checkFourMatch(count, wonResultCopied);
    wonResultCopied = Lotto.checkFiveMatch(count, wonResultCopied, lottoArray, bonus);
    wonResultCopied = Lotto.checkSixMatch(count, wonResultCopied);
    return wonResultCopied;
  }

  static calculateTotalAmount(wonResult) {
    Function.checkArrayLength(wonResult, MONEY_TYPE);
    const copiedArray = Function.copyArray(wonResult);
    const add = Function.add.bind(Function);
    const multiply = Function.multiply.bind(Function);
    const LottoAmount = [5000, 50000, 1500000, 30000000, 2000000000];
    return copiedArray.map((count, index) => multiply(count, LottoAmount[index])).reduce(add);
  }

  getResult(winningLotto, bonus) {
    let wonResult = [0, 0, 0, 0, 0];
    Lotto.verify(winningLotto);
    this.#numbers.forEach((lotto) => {
      Lotto.verify(lotto);
      const count = Lotto.calculateCount(winningLotto, lotto);
      wonResult = Lotto.calcWonResult(wonResult, count, lotto, bonus);
    });
    return wonResult;
  }
}

module.exports = Lotto;