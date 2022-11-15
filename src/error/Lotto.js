const Exception = require("./exception");

const { ERROR, UNIT } = require("../utils/constant");

class Lotto extends Exception {
  #numbers;

  constructor(numbers) {
    super();

    this.#numbers = numbers;
    this.checkInput();
  }

  duplicateCheck() {
    const numbersLength = [...new Set(this.#numbers)].length;
    return numbersLength !== UNIT.LOTTO_LENGTH;
  }

  checkCnt() {
    return this.#numbers.length !== UNIT.WIN_NUMBER_CNT;
  }

  isAllowNumber(number) {
    return number % 1 !== 0;
  }

  checkRange(number) {
    return number < UNIT.MIN_NUMBER || number > UNIT.MAX_NUMBER;
  }

  checkInput() {
    this.#numbers.forEach((number) => {
      if (this.checkRange(number) || this.isAllowNumber(number))
        throw new Error(ERROR.WIN_NUMBER);
    });
    if (this.checkCnt()) throw new Error(ERROR.WIN_NUMBER);
    if (this.duplicateCheck()) throw new Error(ERROR.WIN_NUMBER_DUPLICATE);
  }
}

module.exports = Lotto;
