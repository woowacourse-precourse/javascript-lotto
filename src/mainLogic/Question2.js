const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../Lotto");

class Question2 {
  constructor(lottoTicket, spendMoney) {
    this.getWinningNumber(lottoTicket, spendMoney);
  }

  getWinningNumber(lottoTicket, spendMoney) {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
      const lottoNumber = this.seprateComma(answer);

      const lotto = new Lotto(lottoNumber, lottoTicket, spendMoney);
    });
  }

  seprateComma(answer) {
    return answer.split(",").map((eachNumber) => eachNumber * 1);
  }
}

module.exports = Question2;
