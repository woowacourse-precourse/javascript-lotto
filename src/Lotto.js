const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  inputOfLottoPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.",(amountInput) => {
      amountInput = parseInt(amountInput);
    })
  }
}

module.exports = Lotto;
