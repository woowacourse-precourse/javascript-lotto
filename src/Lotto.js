const ExceptionCheck = require('./utils/ExceptionCheck');
const Calculate = require('./model/Calculation');
const {MONEY} = require('./utils/Constants');
const {printResult} = require('./utils/Print');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.errorCheck = new ExceptionCheck();
    this.calculate = new Calculate();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.errorCheck.answerNumCheck(numbers);
  }

  printOfResultFromCalc(lottos, answers, bonusNum, baseMoney){
    const answerinNum = ans => ans.map(Number);
    const winLotteryAfterCalc = (this.calculate.testAllLottos(lottos, answerinNum(answers), bonusNum));
    const rateOfReturn = this.yieldCalculation(winLotteryAfterCalc, baseMoney);
    printResult(winLotteryAfterCalc, rateOfReturn);
  }
  
  yieldCalculation(winLottery, baseMoney){
    const moneyEach = winLottery.map((value,idx) => {
      return value * MONEY.MONEY_SUCCESS[idx];
    })
    const sumOftotal = moneyEach.reduce((a,b) => (a+b));
    return (sumOftotal*100/baseMoney).toFixed(1);
  }

}

module.exports = Lotto;