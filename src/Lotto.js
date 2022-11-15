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
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }
  static purchase(input) {
    if (input.match(/^D/) || input < 1000) {
      throw new Error("[ERROR] 1,000원 이상의 숫자로만 입력해주세요.");
    }
    if (input % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로만 입력해주세요.");
    }
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
