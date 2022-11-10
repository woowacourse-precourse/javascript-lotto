const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;
  #lotteries;

  constructor(numbers, lotteries) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.#lotteries = lotteries;
    this.inputBonusNumber();
  }

  inputBonusNumber() {
    console.log(this.#lotteries);
    Console.readLine("보너스 번호를 입력해 주세요,\n", (number) => {});
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
