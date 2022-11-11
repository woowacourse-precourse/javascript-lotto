const Generator = require("./Generator.js");
const Checker = require("./Checker.js");
const MissionUtils = require("@woowacourse/mission-utils");

class DomainLogic1 {
  constructor() {
    this.generator = new Generator();
    this.checker = new Checker();
  }

  getMoneyToSpend() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      const money = answer;

      this.checker.isCorrectMoney(money);

      const lottoTicket = this.generator.generateLottoNumbers(money);

      this.getWinningNumber(lottoTicket, money);
    });
  }
}

module.exports = DomainLogic1;
