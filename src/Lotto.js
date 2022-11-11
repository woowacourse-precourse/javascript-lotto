const { Random } = require("@woowacourse/mission-utils");

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
      throw new Error("[ERROR 로또 번호는 중복되지 않아야 합니다.]");
    }
  }

  static generateRandomLottoNumber(lottoCount) {
    return Array.from({ length: lottoCount }, () =>
      Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
    );
  }
}

module.exports = Lotto;
