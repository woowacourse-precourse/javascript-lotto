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
    if (numbers < 1 || numbers > 45) {
      throw new Error("[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.");
    }
  }

}
// const a = new Lotto;
// a.buyLotto();

module.exports = Lotto;
