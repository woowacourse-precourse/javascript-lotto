const Calculator = require("./Calculator.js");
const Print = require("./Print.js");
const MissionUtils = require("@woowacourse/mission-utils");
const Checker = require("./Checker.js");

class DomainLogic3 {
  constructor(lottoNumber) {
    this.lottoNumber = lottoNumber;
    this.print = new Print();
  }

  getBonusNumber(matchingResult, spendMoney) {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      const checker = new Checker();
      checker.isOverlappingBonusNumber(this.lottoNumber, bonusNumber);

      const calculator = new Calculator(matchingResult, bonusNumber, spendMoney);

      this.print.printWinningStatistics(calculator.totalLottoResult, calculator.rateOfReturn);
    });
  }
}

module.exports = DomainLogic3;
