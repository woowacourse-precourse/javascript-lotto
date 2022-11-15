const { Random } = require('@woowacourse/mission-utils');

class Lotto {
  static LOTTO_LENGTH = 6;
  static LOTTO_RANGE = { MIN: 1, MAX: 45 };
  #numbers;
  #bonus;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== Lotto.LOTTO_LENGTH) {
      throw new Error(
        `[ERROR] 로또 번호는 ${Lotto.LOTTO_LENGTH}개여야 합니다.`
      );
    }

    if (new Set(numbers).size !== Lotto.LOTTO_LENGTH) {
      throw new Error(`[ERROR] 로또 번호에는 중복이 존재할 수 없습니다.`);
    }

    numbers.forEach((number) => this.validateNumber(number));
  }

  validateNumber(number) {
    if (Number.isNaN(+number))
      throw new TypeError('[ERROR] 로또 번호는 숫자만 입력해야 합니다.');

    if (+number < Lotto.LOTTO_RANGE.MIN || +number > Lotto.LOTTO_RANGE.MAX)
      throw new RangeError(
        `[ERROR] 로또 번호는 ${Lotto.LOTTO_RANGE.MIN}부터 ${Lotto.LOTTO_RANGE.MAX} 사이의 숫자여야 합니다.`
      );
  }

  static issueLotto = () => {
    return Random.pickUniqueNumbersInRange(
      Lotto.LOTTO_RANGE.MIN,
      Lotto.LOTTO_RANGE.MAX,
      Lotto.LOTTO_LENGTH
    );
  };

  /**
   * @param {number} number
   */
  set bonus(number) {
    this.validateNumber(number);
    this.#bonus = +number;
  }
}

module.exports = Lotto;
