const MissionUtils = require("@woowacourse/mission-utils");
const CONSTANT = require("./constant");
class Lotto {
  #numbers;

  constructor() {
    const numbers = this.getRandomNumbers();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.sort(this.#numbers);
  }

  set numbers(numbers) {
    this.#numbers = numbers;
  }

  getRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      CONSTANT.LOTTO_START,
      CONSTANT.LOTTO_END,
      CONSTANT.LOTTO_LENGTH
    );
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  sort(numbers) {
    return numbers.sort((prev, next) => {
      return prev - next;
    });
  }
  // TODO: 추가 기능 구현 여기에 정답과 자신을 비교하는 메서드 .
}

module.exports = Lotto;
