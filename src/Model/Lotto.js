const Random = require("@woowacourse/mission-utils").Random;
const Console = require("@woowacourse/mission-utils").Console;
const inputValidation = require("./inputValidation");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get inputNumbers() {
    return this.#numbers;
  }

  set inputNumbers(value) {
    const inputArr = value.split(",").map((value) => Number(value));
    this.#numbers = inputArr;
  }

  validate(numbers) {
    const checkSixNum = inputValidation.checkSixNum(numbers);
  }

  //로또 입력logic
  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      //8개 구매했습니다. 8개 당첨로또 로직
    });
  }

  inputLotto() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (lotto) => {});
  }

  inputBonus() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonus) => {});
  }
}

module.exports = Lotto;
