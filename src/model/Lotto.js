class Lotto {
  #numbers;

  constructor(controller, numbers) {
    this.controller = controller;
    this.validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber = null;
  }

  isArraySplitByComma(numbersArray) {
    if (numbersArray.length !== 6) {
      this.controller.throwErrorWithMessage("winningNumberCommaNumberError");
    }

    for (const singleElement of numbersArray) {
      if (isNaN(singleElement)) this.controller.throwErrorWithMessage("winningNumberCommaNumberError");
    }
  }

  isArrayInRange(numbersArray) {
    for (const singleElement of numbersArray) {
      if (1 > singleElement || singleElement > 45) this.controller.throwErrorWithMessage("winningNumberRangeError");
    }
  }

  isArrayUnique(numbersArray) {
    const numbersSet = new Set(numbersArray);
    if (numbersSet.size !== 6) this.controller.throwErrorWithMessage("winningNumberUniqueError");
  }

  validate(numbers) {
    if (typeof numbers !== "undefined") {
      this.isArraySplitByComma(numbers);
      this.isArrayInRange(numbers);
      this.isArrayUnique(numbers);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  setLottoNumbers(winningNumber) {
    const winningNumberArray = winningNumber.split(",").map(Number);
    this.validate(winningNumberArray);
    this.#numbers = winningNumberArray;
    this.controller.getBonusNumberFromUser();
  }

  validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber)) this.controller.throwErrorWithMessage("bonusNumberError");
    if (1 > bonusNumber || bonusNumber > 45) this.controller.throwErrorWithMessage("bonusNumberError");
  }
}

module.exports = Lotto;
