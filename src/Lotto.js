const ExceptionCheck = require('./utils/ExceptionCheck');
const Calculate = require('./model/Calculation');
const {MONEY} = require('./utils/Constants');
const {printResult} = require('./utils/Print');

const errorCheck = new ExceptionCheck();
const calculate = new Calculate();

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    errorCheck.answerNumCheck(numbers);
  }

  printOfResultFromCalc(lottos, answers, bonusNum, baseMoney){
    const answerToNumArr = ans => ans.map(Number);
    const winLotteryAfterCalc = (calculate.testAllLottos(lottos, answerToNumArr(answers), bonusNum));
    const rateOfprofit = this.yieldCalculation(winLotteryAfterCalc, baseMoney);
    printResult(winLotteryAfterCalc, rateOfprofit);
  }
  
  yieldCalculation(winLottery, baseMoney){
    const moneyEachSuccess = winLottery.map((value,idx) => {
      return value * MONEY.MONEY_SUCCESS[idx];
    })
    const sumOftotal = moneyEachSuccess.reduce((a,b) => (a+b));
    return (sumOftotal*100/baseMoney).toFixed(1);
  }

}

module.exports = Lotto;