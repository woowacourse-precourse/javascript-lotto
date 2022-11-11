const { ERROR_MSG, RANK, PRIZE } = require("./utils/string");
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
      if (parseInt(num) === 0 || parseInt(num) > 45) {
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
  compareNums(matchingNums) {
    let match = this.isWinning(matchingNums.winning.getNumbers());
    if (match <= 2) {
      return { match, rank: null };
    }
    let rank = RANK[match];
    if (match === 5) {
      rank = this.isBonus(matchingNums.bonus);
    }
    return { match, rank };
  }
  isWinning(winningArr) {
    let win = 0;
    const lottoArr = this.#numbers;
    for (const num of lottoArr) {
      if (winningArr.includes(num)) {
        win++;
      }
    }
    return win;
  }
  isBonus(bonusNum) {
    const rank = this.#numbers.includes(bonusNum) ? "SECOND" : "THIRD";
    return rank;
  }
}

module.exports = Lotto;
