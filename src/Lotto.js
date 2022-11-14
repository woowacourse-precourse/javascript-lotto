const {
  LOTTO_DIGITS,
  NUMBER_RANGE,
  PRIZE,
  LOTTO_ERROR_MESSAGE,
} = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber;
  }

  validate(numbers) {
    if (numbers.length !== LOTTO_DIGITS) {
      throw new Error(LOTTO_ERROR_MESSAGE.digits);
    }
    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error(LOTTO_ERROR_MESSAGE.integer);
    }
    if (
      numbers.some(
        (number) =>
          !(number >= NUMBER_RANGE.lower && number <= NUMBER_RANGE.upper)
      )
    ) {
      throw new Error(LOTTO_ERROR_MESSAGE.range);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(LOTTO_ERROR_MESSAGE.duplication);
    }
  }

  validateBonusNumber(number) {
    if (!number) {
      throw new Error(LOTTO_ERROR_MESSAGE.bonus);
    }
    if (!Number.isInteger(number)) {
      throw new Error(LOTTO_ERROR_MESSAGE.integer);
    }
    if (!(number >= NUMBER_RANGE.lower && number <= NUMBER_RANGE.upper)) {
      throw new Error(LOTTO_ERROR_MESSAGE.range);
    }
    if (this.#numbers.includes(number)) {
      throw new Error(LOTTO_ERROR_MESSAGE.duplication);
    }
    this.bonusNumber = number;
  }

  getResult(IssuedLottoes) {
    const prizeRecord = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
    IssuedLottoes.forEach((IssuedLotto) => {
      const prize = this.checkPrize(IssuedLotto);
      if (prize) {
        prizeRecord[prize] += 1;
      }
    });
    return prizeRecord;
  }

  checkPrize(IssuedLotto) {
    const matchingCount = this.countMatchingNumber(IssuedLotto);
    if (matchingCount === 6) {
      return PRIZE.first;
    }
    if (matchingCount === 5) {
      return this.checkBonusNumber(IssuedLotto) ? PRIZE.second : PRIZE.third;
    }
    if (matchingCount === 4) {
      return PRIZE.fourth;
    }
    if (matchingCount === 3) {
      return PRIZE.fifth;
    }
  }

  countMatchingNumber(IssuedLotto) {
    let matchingCount = 0;
    IssuedLotto.forEach((number) => {
      if (this.#numbers.includes(number)) {
        matchingCount += 1;
      }
    });
    return matchingCount;
  }

  checkBonusNumber(IssuedLotto) {
    return IssuedLotto.includes(this.bonusNumber);
  }
}

module.exports = Lotto;
