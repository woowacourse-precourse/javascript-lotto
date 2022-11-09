const ExceptionCheck = require('./utils/ExceptionCheck');
const Calculate = require('./model/Calculation');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.errorCheck = new ExceptionCheck();
    this.validate(numbers);
    this.#numbers = numbers;
    this.calculate = new Calculate();
  }

  validate(numbers) {
    this.errorCheck.answerNumCheck(numbers);
  }

  printOfResultFromCalc(lottos, answers, bonusNum){
    this.calculate.returns(lottos, answers, bonusNum);
  }
  
}

module.exports = Lotto;
