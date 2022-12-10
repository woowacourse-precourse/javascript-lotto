const {
  LOTTO_NUMBERS,
  BONUS_NUMBER,
  PURCHASE_PRICE,
} = require("./constants/ErrorMsg");

const {
  LOTTO_LEGNTH,
  MIN_PRICE,
  MAX_NUMBER,
} = require("./constants/GameConfig");

class Validation {
  validate() {
    if (arguments.length == 2)
      this.#validateBonusNumber(arguments[0], arguments[1]);

    if (arguments.length == 1 && !Array.isArray(arguments[0]))
      this.#validatePurchasePrice(arguments[0]);

    if (arguments.length == 1 && Array.isArray(arguments[0]))
      this.#validateLottoNumbers(arguments[0]);
  }

  #validateLottoNumbers(numbers) {
    if (numbers.length !== LOTTO_LEGNTH) {
      throw new Error(LOTTO_NUMBERS.LOTTO_NUMBER_RANGE);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(LOTTO_NUMBERS.CANNOT_DUPLICATE_NUMBER);
    }
  }

  #validatePurchasePrice(number) {
    let num = Number(number);

    if (number.includes(",")) throw new Error(PURCHASE_PRICE.EXCEPT_COMMA);

    if (Number.isNaN(num)) throw new Error(PURCHASE_PRICE.MIN_UNIT_PRICE);

    if (num < MIN_PRICE) throw new Error(PURCHASE_PRICE.MIN_PURCHASE_PRICE);
  }

  #validateBonusNumber(number, targetNumbers) {
    if (Number.isNaN(number) || number > MAX_NUMBER || number < 1)
      throw new Error(BONUS_NUMBER.BONUS_NUMBER_RANGE);

    if (targetNumbers.includes(number))
      throw new Error(BONUS_NUMBER.CANNOT_DUPLICATE_NUMBER);
  }
}

module.exports = new Validation();
