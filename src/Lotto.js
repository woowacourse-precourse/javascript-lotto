const { LOTTO_DIGITS, PRIZE } = require('./Constants');
const Validater = require('./Validater');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validateLuckyNumber(numbers);
    this.#numbers = numbers;
    this.bonusNumber = 0;
  }

  static validateLuckyNumber(numbers) {
    Validater.checkNumberOfDigits(numbers);
    Validater.checkInteger(numbers);
    Validater.checkRange(numbers);
    Validater.checkDuplication(numbers);
  }

  validateBonusNumber(number) {
    Validater.checkSingleDigit(number);
    Validater.checkInteger(number);
    Validater.checkRange(number);
    Validater.checkDuplication(number, this.#numbers);
    this.bonusNumber = number;
  }

  getPrizeRecord(issuedLottoes) {
    const prizeRecord = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
    issuedLottoes.forEach((issuedLotto) => {
      const prize = this.checkPrize(issuedLotto);
      if (prize) {
        prizeRecord[prize] += 1;
      }
    });
    return prizeRecord;
  }

  checkPrize(issuedLotto) {
    const matchingCount = this.countMatchingNumber(issuedLotto);
    if (matchingCount === LOTTO_DIGITS) {
      return PRIZE.first;
    }
    if (matchingCount === LOTTO_DIGITS - 1) {
      return this.checkBonusNumber(issuedLotto) ? PRIZE.second : PRIZE.third;
    }
    if (matchingCount === LOTTO_DIGITS - 2) {
      return PRIZE.fourth;
    }
    if (matchingCount === LOTTO_DIGITS - 3) {
      return PRIZE.fifth;
    }
    return null;
  }

  countMatchingNumber(issuedLotto) {
    let matchingCount = 0;
    issuedLotto.forEach((number) => {
      if (this.#numbers.includes(number)) {
        matchingCount += 1;
      }
    });
    return matchingCount;
  }

  checkBonusNumber(issuedLotto) {
    return issuedLotto.includes(this.bonusNumber);
  }
}

module.exports = Lotto;
