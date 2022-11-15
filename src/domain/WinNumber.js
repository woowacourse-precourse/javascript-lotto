const WinNumbersValidator = require("../validator/WinNumbersValidator");

class WinNumber {
  #winNumbers;

  constructor(numbers) {
    this.validate(numbers);
    this.winNumbers = this.#toFormat(numbers);
  }

  validate(numbers) {
    const winNumbersValidator = new WinNumbersValidator(numbers);
  }

  #toFormat(numbers) {
    return numbers.split(",").map((num) => +num);
  }
}

module.exports = WinNumber;
