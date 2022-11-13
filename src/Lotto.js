const MissionUtils = require("@woowacourse/mission-utils");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

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

  getLotto(){
    return this.#numbers;
  }

  printLotto(){
    Console.print(this.#numbers);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
