class Lotto {
  #numbers;

  constructor (controller, numbers) {
    this.controller = controller;
    this.validate(numbers);
    this.#numbers = numbers;
  }

  isArraySplitByComma (numbersArray) {
    if (numbersArray.length !== 6) {
      this.controller.throwErrorWithMessage("winningNumberCommaNumberError");
    }

    for (const singleElement of numbersArray) {
      if (isNaN(singleElement)) this.controller.throwErrorWithMessage("winningNumberCommaNumberError");
    }
  }

  isArrayInRange (numbersArray) {
    for (const singleElement of numbersArray) {
      if (1 > singleElement || singleElement > 45) this.controller.throwErrorWithMessage("WinningNumberRangeError");
    }
  }

  isArrayUnique (numbersArray) {
    const numbersSet = new Set(numbersArray);
    if (numbersSet.size !== 6) this.controller.throwErrorWithMessage("WinningNumberUniqueError");
  }

  validate (numbers) {
    if (typeof numbers !== "undefined") {
      this.isArraySplitByComma(numbers);
      this.isArrayInRange(numbers);
      this.isArrayUnique(numbers);
    }
  }

  getLottoNumbers () {
    return this.#numbers;
  }
}

module.exports = Lotto;
