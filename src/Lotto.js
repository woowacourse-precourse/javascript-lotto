const { ERROR_MSG, RANK, MATCH, RANK_NAME, LOTTO } = require("./utils/string");
const Validation = require("./utils/Validation");

class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  validate(numbers) {
    Validation.throwError(numbers.length !== 6, ERROR_MSG.NUMBER_VAL_COUNT);
    Validation.throwError(this.isNotNumber(numbers), ERROR_MSG.NUMBER_VAL_SIZE);
    Validation.throwError(
      this.isNotInRange(numbers),
      ERROR_MSG.NUMBER_VAL_SIZE
    );
    Validation.throwError(
      this.isduplicate(numbers),
      ERROR_MSG.NUMBER_VAL_DUPLICATE
    );
  }
  isNotNumber(numbers) {
    for (const num of numbers) {
      if (isNaN(num)) {
        return true;
      }
    }
    return false;
  }
  isNotInRange(numbers) {
    for (const num of numbers) {
      if (parseInt(num) < LOTTO.START || parseInt(num) > LOTTO.END) {
        return true;
      }
    }
    return false;
  }
  isduplicate(numbers) {
    const duplicate = numbers.filter((v, i) => i !== numbers.indexOf(v));
    if (duplicate.length !== 0) {
      return true;
    }
    return false;
  }
  getNumbers() {
    return this.#numbers;
  }
  compareNums(matchingLotto) {
    let match = this.isWinning(matchingLotto.winning.getNumbers());
    if (match < MATCH[RANK_NAME.FIFTH]) {
      return { match, rank: null };
    }
    let rank = RANK[match];
    if (match === MATCH[RANK_NAME.THIRD]) {
      rank = this.isBonus(matchingLotto.bonus);
    }
    return { match, rank };
  }
  isWinning(winningArr) {
    let win = 0;
    for (const num of this.#numbers) {
      if (winningArr.includes(num)) {
        win++;
      }
    }
    return win;
  }
  isBonus(bonusNum) {
    const rank = this.#numbers.includes(bonusNum)
      ? RANK_NAME.SECOND
      : RANK_NAME.THIRD;
    return rank;
  }
}

module.exports = Lotto;
