const MissionUtils = require("@woowacourse/mission-utils");

const STATIC = require("./Static");

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
}

module.exports = Lotto;
// const a = new Lotto();
// console.log(STATIC.MESSAGE);
