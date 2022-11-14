const {
  LOTTO_LENGTH_NOT_SIX_ERROR,
  LOTTO_DUPLICATE_ERROR,
  LOTTO_OUT_OF_RANGE_ERROR,
  LOTTO_NAN_ERROR,
  FIRST_RANK,
  SECOND_RANK,
  THIRD_RANK,
  FOURTH_RANK,
  FIFTH_RANK,
  NOTHING_RANK,
} = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  checkDuplicates(numbers) {
    const set = new Set(numbers);
    return set.size !== numbers.length;
  }

  checkRange(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return min < 1 || max > 45;
  }

  checkNumber(numbers) {
    return numbers.some((num) => typeof num !== 'number');
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_LENGTH_NOT_SIX_ERROR);
    }
    if (this.checkDuplicates(numbers)) {
      throw new Error(LOTTO_DUPLICATE_ERROR);
    }
    if (this.checkRange(numbers)) {
      throw new Error(LOTTO_OUT_OF_RANGE_ERROR);
    }
    if (this.checkNumber(numbers)) {
      throw new Error(LOTTO_NAN_ERROR);
    }
  }

  getRank(matchedCount, hasBonus) {
    switch (matchedCount) {
      case 6:
        return FIRST_RANK;
      case 5:
        return hasBonus ? SECOND_RANK : THIRD_RANK;
      case 4:
        return FOURTH_RANK;
      case 3:
        return FIFTH_RANK;
      default:
        return NOTHING_RANK;
    }
  }

  checkWin(winningNumbers, bonus) {
    const matched = this.#numbers.filter((num) => winningNumbers.includes(num));
    const rank = this.getRank(matched.length, this.#numbers.includes(bonus));

    return rank;
  }

  toString() {
    const numbers = this.#numbers.join(', ');

    return `[${numbers}]`;
  }
}

module.exports = Lotto;
