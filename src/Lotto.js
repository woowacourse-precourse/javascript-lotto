const Console = require("./utils/Console");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    let uniqueNumbersLength = [...new Set(numbers)].length;
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.length !== uniqueNumbersLength) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  // TODO: 추가 기능 구현
  getLottoPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (userInput) => {
      let numberUserInput = Number(userInput) ?? NaN;
      if (this.#validateCoin(numberUserInput)) {
        this.LottoPurchaseAmount = userInput;
        console.log(`Lotto.LottoPurchaseAmount: ${this.LottoPurchaseAmount}`);
      }
    });
  }
  #validateCoin(lottoPurchaseAmount) {
    if (isNaN(lottoPurchaseAmount)) {
      throw new Error("[ERROR] 숫자만 입력하세요.");
    }
    if (lottoPurchaseAmount < 1000) {
      throw new Error("1000원 이상 입력하세요.");
    }
    if (lottoPurchaseAmount % 1000 !== 0) {
      throw new Error("1000원 단위로 입력하세요.");
    }
    return true;
  }
}

module.exports = Lotto;
