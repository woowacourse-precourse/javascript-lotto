const { Console, Random } = MissionUtils;
const isSixCount = require("../src/utils/isSixCount.js");
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

  // TODO: 추가 기능 구현
  printInputNumbers() {
    Console.print("당첨 번호를 입력해 주세요.");
  }
  inputNumbers() {
    Console.readLine((input) => {
      this.validate(input);
      if (!isSixCount(input))
        throw new Error("[ERROR] 잘못된 수를 입력하였습니다.");
    });
  }
}

module.exports = Lotto;
