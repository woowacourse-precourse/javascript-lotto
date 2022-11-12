const { Random, Console } = require("@woowacourse/mission-utils");

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

  userInput(number) {
    return number
  }
  
  buyLotto() {
    Console.readLine("숫자를 입력해 주세요: ", this.userInput)
  }

}
const a = new Lotto;
a.buyLotto();

// module.exports = Lotto;
