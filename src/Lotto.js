const Application = require("./Application");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const criterion = 6;

    if (Number.isNaN(numbers)) {
      throw new Error("[ERROR] 전달된 인수는 숫자로 변환이 가능해야 합니다.");
    }
    if (!Array.isArray(numbers)) {
      throw new Error("[ERROR] 전달된 인수는 배열 타입만 가능 합니다.");
    }
    if (numbers.length !== criterion) {
      throw new Error("[ERROR] 배열의 길이는 6개여야 합니다.");
    }
    if (!Number.isInteger(numbers)) {
      throw new Error("[ERROR] 주어진 값이 정수여야 합니다.");
    }
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

    return Array.from({length: lottoCount}, this.createLotto);
  }

  static checkThreeMatche(count, array) {
    const [DATUM_POINT, POINT, INCREASE] = [3, 0, 1];
    const newArray = Application.copyArray(array);

    if (Application.isMatcheCount(count, DATUM_POINT)) {
      newArray[POINT] += INCREASE;
    }

    return newArray;
  }

  static checkFourMatche(count, array) {
    const [DATUM_POINT, POINT, INCREASE] = [4, 1, 1];
    const newArray = Application.copyArray(array);

    if (Application.isMatcheCount(count, DATUM_POINT)) {
      newArray[POINT] += INCREASE;
    }

    return newArray;
  }

  static checkFiveMatche(count, array, target = [], bonus = 0) {
    const [DATUM_POINT, POINT, INCREASE] = [5, 2, 1];
    const newArray = Application.copyArray(array);
    const isFive = Application.isMatcheCount(count, DATUM_POINT);

    if (isFive && target.includes(bonus)) {
      return Lotto.checkBonusMatche(newArray);
    }

    if (isFive) {
      newArray[POINT] += INCREASE;
    }

    return newArray;
  }

  static checkBonusMatche(array) {
    const [POINT, INCREASE] = [3, 1];
    const newArray = Application.copyArray(array);

    newArray[POINT] += INCREASE;

    return newArray;
  }

  static checkSixMatche(count, array) {
    const [DATUM_POINT, POINT, INCREASE] = [6, 4, 1];
    const newArray = Application.copyArray(array);

    if (Application.isMatcheCount(count, DATUM_POINT)) {
      newArray[POINT] += INCREASE;
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