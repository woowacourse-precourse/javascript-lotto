const { Random } = require('@woowacourse/mission-utils');
const { LOTTO_LENGTH, LOTTO_RANGE } = require('./constants');
const { hasDuplicate, isNumber } = require('./utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH)
      throw new Error(`[ERROR] 로또 번호는 ${LOTTO_LENGTH}개여야 합니다.`);

    if (hasDuplicate(numbers))
      throw new Error(`[ERROR] 로또 번호에는 중복이 존재할 수 없습니다.`);

    numbers.forEach((number) => this.validateNumber(number));
  }

  validateNumber(number) {
    if (isNumber(number))
      throw new TypeError('[ERROR] 로또 번호는 숫자만 입력해야 합니다.');

    if (+number < LOTTO_RANGE.MIN || +number > LOTTO_RANGE.MAX)
      throw new RangeError(
        `[ERROR] 로또 번호는 ${LOTTO_RANGE.MIN}부터 ${LOTTO_RANGE.MAX} 사이의 숫자여야 합니다.`
      );
  }

  getMatchedCount(lotto) {
    return lotto.filter((number) => this.#numbers.includes(number)).length;
  }

  isValidBonusNumber(bonus) {
    if (this.#numbers.includes(+bonus))
      throw new Error(
        '[Error] 중복된 숫자를 보너스 번호로 지정할 수 없습니다.'
      );

    this.validateNumber(bonus);
  }

  static issueLotto = () => {
    return Random.pickUniqueNumbersInRange(
      LOTTO_RANGE.MIN,
      LOTTO_RANGE.MAX,
      LOTTO_LENGTH
    );
  };
}

module.exports = Lotto;
