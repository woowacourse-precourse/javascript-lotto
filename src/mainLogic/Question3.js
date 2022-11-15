const MissionUtils = require("@woowacourse/mission-utils");
const Checker = require("../Utils/Checker.js");
const Calculator = require("../Utils/Calculator.js");
const Print = require("../Utils/Print");

class Question3 {
  constructor(lottoNumber, matchingResult, spendMoney) {
    this.lottoNumber = lottoNumber;
    this.getBonusNumber(matchingResult, spendMoney);
  }

  getBonusNumber(matchingResult, spendMoney) {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      const checker = new Checker();
      checker.isOverlappingBonusNumber(this.lottoNumber, bonusNumber);

      const calculator = new Calculator(matchingResult, bonusNumber, spendMoney);

      const print = new Print();
      print.printWinningStatistics(calculator.totalLottoResult, calculator.rateOfReturn);
    });
  }
}

module.exports = Question3;
