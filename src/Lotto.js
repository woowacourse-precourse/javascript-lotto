const ExceptionCheck = require('./utils/ExceptionCheck');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.errorCheck = new ExceptionCheck();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.errorCheck.answerNumCheck(numbers);
  }

  
}

module.exports = Lotto;
