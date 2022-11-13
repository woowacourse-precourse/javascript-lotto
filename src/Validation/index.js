class Validation {
  constructor(answer) {
    this.answer = answer;
  }

  static validate() {}

  isEmpty() {
    return this.answer === null || this.answer === undefined || this.answer === '';
  }
}

module.exports = Validation;
