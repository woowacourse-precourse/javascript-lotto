const MissionUtils = require("@woowacourse/mission-utils");
const { VALUE } = require("./constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLotto(numbers);
    this.#numbers = numbers;
  }

  validateLotto(numbers) {
    if (numbers.length !== VALUE.NUMBER_OF_LOTTO) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 로또 번호의 개수는 6개입니다.");
    }

    const uniqueNumbers = new Set(numbers);
    if ([...uniqueNumbers].length !== VALUE.NUMBER_OF_LOTTO) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }
}

module.exports = Lotto;
