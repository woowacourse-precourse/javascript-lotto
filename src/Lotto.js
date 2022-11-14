const Console = require("./utils/Console");
const Constant = require("./Constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    let uniqueNumbersLength = [...new Set(numbers)].length;
    if (numbers.length !== 6) {
      throw new Error(Constant.LOTTO_NUMBERS_LENGTH_SHOULD_BE6);
    }
    if (numbers.length !== uniqueNumbersLength) {
      throw new Error(Constant.LOTTO_NUMBERS_SHOULD_BE_UNIQUE);
    }
  }

  // TODO: 추가 기능 구현
  getLottoPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (userInput) => {
      let numberUserInput = Number(userInput) ?? NaN;
      if (this.#validateCoin(numberUserInput)) {
        this.lottoPurchaseAmount = userInput;
      }
    });
  }
  #validateCoin(lottoPurchaseAmount) {
    if (isNaN(lottoPurchaseAmount)) {
      throw new Error(Constant.INPUT_ONLY_NUMBER);
    }
    if (lottoPurchaseAmount < Constant.MINIMUM_AMOUNT) {
      throw new Error(Constant.INPUT_OVER_1000);
    }
    if (lottoPurchaseAmount % Constant.MINIMUM_AMOUNT !== 0) {
      throw new Error(Constant.LOTTO_NUMBERS_SHOULD_BE_UNIQUE);
    }
    return true;
  }

  static countLotto(lottoAmount) {
    this.countOfLotto = lottoAmount / Constant.MINIMUM_AMOUNT;
    Lotto.#printCountLotto();
    return this.countOfLotto;
  }

  static #printCountLotto() {
    Console.print(`${this.countOfLotto}개를 구매했습니다.`);
  }

  static makeRandomArray() {
    return [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
  }
}

module.exports = Lotto;
