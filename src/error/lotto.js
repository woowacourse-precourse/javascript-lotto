const Lotto = require("../Lotto");
const { UNIT, ERROR } = require("../utils/constant");
const Exception = require("./exception");

class LottoNumbersError extends Exception {
  #input;

  constructor(input) {
    super();

    this.#input = input;
  }

  duplicateCheck(allow) {
    const numbersLength = [...new Set(this.#input)].length;
    if (numbersLength !== UNIT.LOTTO_LENGTH) {
      allow = allow && false;
    }
    console.log(allow);
    return allow;
  }

  checkInput() {
    if (!this.duplicateCheck(true)) throw new Error(ERROR.DUPLICATE);
    return true;
  }
}

module.exports = LottoNumbersError;
