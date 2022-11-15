const Exception = require("./exception");

const { ERROR, UNIT } = require("../utils/constant");

class Lotto extends Exception {
  #numbers;

  constructor(numbers) {
    super();
    this.#numbers = numbers;
    this.checkInput(this.#numbers);
  }

  duplicateCheck() {
    let allow = UNIT.ALLOW;
    const numbersLength = [...new Set(this.#numbers)].length;
    if (numbersLength !== UNIT.LOTTO_LENGTH) {
      allow = allow || UNIT.NOT_ALLOW;
    }
    return allow;
  }

  checkCnt() {
    if (this.#numbers.length !== UNIT.WIN_NUMBER_CNT) return UNIT.NOT_ALLOW;
    return UNIT.ALLOW;
  }

  checkRange() {
    let check = UNIT.ALLOW;
    this.#numbers.forEach((num) => {
      if (num < UNIT.MIN_NUMBER || num > UNIT.MAX_NUMBER) {
        check = check || UNIT.NOT_ALLOW;
      }
    });
    return check;
  }

  isAllowNumber() {
    let allow = UNIT.ALLOW;
    this.#numbers.forEach((num) => {
      if (num % 1 !== 0) allow = allow || UNIT.NOT_ALLOW;
    });
    return allow;
  }

  checkInput() {
    if (this.checkCnt() || this.checkRange() || this.isAllowNumber())
      throw new Error(ERROR.WIN_NUMBER);
    if (this.duplicateCheck()) throw new Error(ERROR.WIN_NUMBER_DUPLICATE);
  }
}

module.exports = Lotto;
