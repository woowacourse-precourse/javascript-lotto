const Generator = require("./Generator.js");
const Checker = require("./Checker.js");
const DomainLogic2 = require("./DomainLogic2.js");
const MissionUtils = require("@woowacourse/mission-utils");

class DomainLogic1 {
  constructor() {
    this.generator = new Generator();
    this.checker = new Checker();
    this.domainLogic2 = new DomainLogic2();
  }

  getMoneyToSpend() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      const money = answer;

      this.checker.isCorrectMoney(money);

      const lottoTicket = this.generator.generateLottoNumbers(money);

      this.domainLogic2.getWinningNumber(lottoTicket, money);
    });
  }
}

module.exports = DomainLogic1;
