const Lotto = require("./Lotto.js");
const DomainLogic3 = require("./DomainLogic3.js");
const MissionUtils = require("@woowacourse/mission-utils");

class DomainLogic2 {
  constructor() {}

  getWinningNumber(lottoTicket, spendMoney) {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
      const lottoNumber = answer.split(",").map((eachNumber) => eachNumber * 1);

      const lotto = new Lotto(lottoNumber, lottoTicket);
      const mathcingResult = lotto.matchingResult;

      const domainLogic3 = new DomainLogic3(answer);
      domainLogic3.getBonusNumber(mathcingResult, spendMoney);
    });
  }
}

module.exports = DomainLogic2;
