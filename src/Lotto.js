const MissionUtils = require("@woowacourse/mission-utils");
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
  static purchase(input) {
    const lotto = [];
    const count = input / 1000;
    Array(count)
      .fill()
      .forEach((_) => {
        lotto.push(new Lotto(this.makeRandomNumbers()));
      });
    return lotto;
  }
  static makeRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }
  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
