const { Random } = require('@woowacourse/mission-utils');
const { MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_LENGTH } = require('./settings');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static #issueSingleLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      MIN_LOTTO_NUMBER,
      MAX_LOTTO_NUMBER,
      LOTTO_LENGTH,
    );

    return new Lotto(numbers).#numbers;
  }

  static issueAllLottos(count) {
    return new Array(count).fill([]).map(() => Lotto.#issueSingleLotto());
  }

  static issue(count) {
    const issuedLottos = Lotto.issueAllLottos(count);

    return issuedLottos;
  }
}

module.exports = Lotto;
