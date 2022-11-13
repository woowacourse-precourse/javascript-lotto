class Validation {
  constructor(answer) {
    this.answer = answer;
  }

  static validate() {}

  isEmpty() {
    return this.answer === null || this.answer === undefined || this.answer === '';
  }

  static isRangeNumber(number) {
    const regExp = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    return !regExp.test(number);
  }
}

module.exports = Validation;
