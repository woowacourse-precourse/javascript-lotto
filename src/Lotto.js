const ExceptionCheck = require('./utils/ExceptionCheck');
const Calculate = require('./model/Calculation');
const {MONEY} = require('./utils/Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.errorCheck = new ExceptionCheck();
    this.#numbers = numbers;
    this.calculate = new Calculate();
  }

  validate(numbers) {
    this.errorCheck.answerNumCheck(numbers);
  }

  printOfResultFromCalc(lottos, answers, bonusNum, baseMoney){
    const answerinNum = ans => ans.map(Number);
    const lotteryArr = (this.calculate.testAllLottos(lottos, answerinNum(answers), bonusNum));
    const yieldCheck = this.yieldCalculation(lotteryArr, baseMoney);
    console.log(yieldCheck)
  }
  
  yieldCalculation(arr, baseMoney){
    const money = arr.map((value,idx) => {
      return value * MONEY.MONEY_SUCCESS[idx];
    })
    const sum = money.reduce((a,b) => (a+b));
    return (sum*100/baseMoney).toFixed(1);
  }

}

module.exports = Lotto;