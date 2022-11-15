const { MESSAGES } = require('./Constants');

class Bonus {
  #numbers;

  constructor(numbers, winningNumArray) {
    this.#numbers = numbers;
    this.validateBonusNumLength(numbers);
    this.validateBonusNumBetween1To45(numbers);
    this.validateBonusNumInteger(numbers);
    this.validateBonusNumUnique(numbers, winningNumArray);
  }

  validateBonusNumLength(numbers) {
    const numArr = [numbers];
    if (numArr.length !== 1) {
      throw new Error(MESSAGES.ERR_BONUSNUM_NOT_ONE_NUM);
    }
  }

  validateBonusNumBetween1To45(numbers) {
    if (numbers < 1 || numbers > 45) {
      throw new Error(MESSAGES.ERR_BONUSNUM_NOT_BETWEEN_ONETOFOURTYFIVE);
    }
  }

  validateBonusNumInteger(numbers) {
    if (!Number.isInteger(numbers)) {
      throw new Error(MESSAGES.ERR_BONUSNUM_NOT_INT);
    }
  }

  validateBonusNumUnique(numbers, winningNumArray) {
    if (winningNumArray.includes(numbers)) {
      throw new Error(MESSAGES.ERR_BONUSNUM_DUPLICATES);
    }
  }
}

module.exports = Bonus;
