const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

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
  getNumbers() {
    return this.#numbers;
  }
}

// 새로운 로또번호 생성 기능
const createLotto = () => {
  const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
    (a, b) => a - b
  );

  return new Lotto(numbers);
};

module.exports = Lotto;
module.exports = createLotto;
