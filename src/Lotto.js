const MissionUtils = require('@woowacourse/mission-utils');
const { LottoConfig, Message } = require('./Config');

const randomLotto = function getRandomLottoNumber() {
  return MissionUtils.Random.pickUniqueNumbersInRange(
    LottoConfig.MIN_NUMBER,
    LottoConfig.MAX_NUMBER,
    LottoConfig.NUMBERS,
  );
};

const typeTest = function lottoNumberTypeTest(numbers) {
  const success = numbers.reduce(
    (prevBool, number) => prevBool && (typeof number === 'number'),
    true,
  );
  if (!success) {
    throw new TypeError(Message.ERROR_NUMBER_TYPE);
  }
};

const rangeTest = function lottoNumberRangeTest(numbers) {
  const success = numbers.reduce(
    (prevBool, number) => (
      prevBool
      && LottoConfig.MIN_NUMBER <= number
      && number <= LottoConfig.MAX_NUMBER
    ),
    true,
  );
  if (!success) {
    throw new RangeError(Message.ERROR_LOTTO_RANGE);
  }
};

const duplicateTest = function duplicateLottoNumberTest(numbers) {
  const set = new Set(numbers);
  if (set.size !== 6) {
    throw new Error(Message.ERROR_LOTTO_NUMBERS);
  }
};

class Lotto {
  #numbers;

  constructor(numbers = randomLotto()) {
    Lotto.validateNumbers(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  static validateNumbers(numbers) {
    typeTest(numbers);
    duplicateTest(numbers);
    rangeTest(numbers);
  }

  toString(separator = ' ') {
    return this.#numbers.join(separator);
  }
}

module.exports = Lotto;
