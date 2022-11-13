const { Random } = require('@woowacourse/mission-utils');
const {
  ERR_MSG,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  LOTTO_LENGTH
} = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateWinningNumbers(numbers);
    this.#numbers = { winning: numbers };
  }

  static makeLotto() {
    const newLotto = Random.pickUniqueNumbersInRange(
      MIN_LOTTO_NUMBER,
      MAX_LOTTO_NUMBER,
      LOTTO_LENGTH
    );
    newLotto.sort((a, b) => a - b);
    return newLotto;
  }

  setBonusNumber(bounsNumber) {
    this.validateBonusNumber(bounsNumber);
    this.#numbers = { ...this.#numbers, bounsNumber };
  }

  validateNumberAndRange(number) {
    if (!+number || +number > MAX_LOTTO_NUMBER || +number < MIN_LOTTO_NUMBER) {
      throw new Error(ERR_MSG.invalidLottoNumberRange);
    }
  }

  validateBonusNumber(bounsNumber) {
    this.validateNumberAndRange(bounsNumber);
    if (this.#numbers.winning.includes(bounsNumber)) {
      throw new Error(ERR_MSG.duplicatedNumber);
    }
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERR_MSG.invalidLottoNumberLength);
    }
    numbers.forEach(number => {
      this.validateNumberAndRange(number);
    });

    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error(ERR_MSG.duplicatedNumber);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
