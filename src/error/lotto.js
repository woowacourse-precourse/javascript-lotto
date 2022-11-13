const Exception = require("./exception");

const { ERROR, UNIT } = require("../utils/constant");

class Lotto extends Exception {
  #numbers;

  constructor(numbers) {
    super();

    this.#numbers = numbers;
    this.numbers = [];
  }

  duplicateCheck(allow) {
    const numbersLength = [...new Set(this.#numbers)].length;
    if (numbersLength !== UNIT.LOTTO_LENGTH) {
      allow = allow && false;
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

  isAllowNumbers() {
    if (this.checkCnt() || this.checkRange()) return UNIT.NOT_ALLOW;
    return UNIT.ALLOW;
  }

  checkInput() {
    if (this.isAllowNumbers()) throw new Error(ERROR.WIN_NUMBER);
    if (!this.duplicateCheck(true)) throw new Error(ERROR.WIN_NUMBER_DUPLICATE);
  }
}

module.exports = Lotto;
