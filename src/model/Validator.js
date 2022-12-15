const {
  ISNUMBER,
  ISNUMBERDIVIDED,
  ISNUMBERBIGGER,
  ISARRAYELEMENTTYPE,
  ISSPLIT,
  ISLENGTH,
  ISREPEAT,
  ISRANGE,
} = require('../constant/Error');

class Validator {
  constructor(value) {
    this.checkValue = value;
    this.messagesList = [];
  }
  makeMessages(message) {
    this.messagesList.push(message);
    return this;
  }

  getMessages() {
    const errorMessages = this.messagesList.filter((isErrorMessage) => isErrorMessage !== true);
    return errorMessages.forEach((error) => this.#makeError(error)) || this.checkValue;
  }

  #makeError(errorMessage) {
    throw new Error(errorMessage);
  }
}

class StringValidator extends Validator {
  #stringValue;

  constructor(value) {
    super(value);
    this.#stringValue = this.checkValue;
  }

  isNumber() {
    const check = this.#stringValue.split('').filter((letter) => !Number.isInteger(Number(letter)));
    const message = check.length === 0 ? true : ISNUMBER;
    return this.makeMessages(message);
  }

  isNumberDivided(checkShare) {
    const check = this.#stringValue % checkShare;
    const message = !check ? true : ISNUMBERDIVIDED(checkShare);
    return this.makeMessages(message);
  }

  isNumberBigger(checkMinimum) {
    const check = Number(this.#stringValue) >= checkMinimum;
    const message = check ? true : ISNUMBERBIGGER(checkMinimum);
    return this.makeMessages(message);
  }

  isSplit(checkSplit) {
    const message = this.#stringValue.split(checkSplit).length !== 1 ? true : ISSPLIT;
    return this.makeMessages(message);
  }

  isLength(checkLength) {
    const message = this.#stringValue.length === checkLength ? true : ISLENGTH(checkLength);
    return this.makeMessages(message);
  }
}

class ArrayValidator extends Validator {
  #arrayValue;

  constructor(value) {
    super(value);
    this.#arrayValue = this.checkValue;
  }

  isArrayElementType(checkElementType) {
    const check = this.#arrayValue.filter((value) => this[checkElementType](value) === true);
    const message =
      check.length === this.#arrayValue.length ? true : ISARRAYELEMENTTYPE(checkElementType);
    return this.makeMessages(message);
  }

  isRepeated(checkLength) {
    const message = new Set(this.#arrayValue).size === checkLength ? true : ISREPEAT;

    return this.makeMessages(message);
  }

  isNumberRange(checkRange) {
    const message =
      this.#arrayValue.filter(
        (number) => Number(number) >= checkRange[0] && Number(number) <= checkRange[1]
      ).length === this.#arrayValue.length
        ? true
        : ISRANGE;
    return this.makeMessages(message);
  }
}

module.exports = { StringValidator, ArrayValidator };
