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
    let countOfLotto = lottoAmount / Constant.MINIMUM_AMOUNT;
    return countOfLotto;
  }
}

module.exports = Lotto;
