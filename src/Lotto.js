const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6 || numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    for (let number of numbers) {
      if (
        number < 1 ||
        number > 45 ||
        isNaN(number) ||
        parseInt(number) !== number
      ) {
        throw new Error("[ERROR] 로또 번호는 1 ~ 45 까지의 숫자만 가능합니다.");
      }
    }
  }

  // 생성된 로또번호 확인 기능
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

module.exports = {
  Lotto,
  createLotto,
};
