const Exception = require("./exception");

const { ERROR, UNIT } = require("../utils/constant");

class WinNumberError extends Exception {
  #input;

  constructor(input) {
    super();

    this.#input = input;
    this.numbers = [];
  }

  checkLength() {
    const inputLength = this.#input.length;
    if (inputLength < UNIT.MIN_LENGTH || inputLength > UNIT.MAX_LENGTH) {
      return UNIT.NOT_ALLOW;
    }
    return true;
  }

  checkCnt() {
    if (this.numbers.length !== UNIT.WIN_NUMBER_CNT) return UNIT.NOT_ALLOW;
    return true;
  }

  checkRange(allow) {
    this.numbers.forEach((num) => {
      if (num < UNIT.MIN_NUMBER || num > UNIT.MAX_NUMBER) {
        allow = allow && false;
      }
    });
    return allow;
  }

  isAllowNumbers() {
    this.numbers = this.#input.split(",").map(Number);
    if (!this.checkLength() || !this.checkCnt() || !this.checkRange(true))
      return UNIT.NOT_ALLOW;
    return true;
  }

  checkInput() {
    if (!this.isAllowNumbers()) throw new Error(ERROR.WIN_NUMBER);
  }
}

module.exports = WinNumberError;
