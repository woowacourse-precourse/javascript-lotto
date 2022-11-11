const Lotto = require("./Lotto.js");

class DomainLogic2 {
  constructor() {}

  getWinningNumber(lottoTicket, money) {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (answer) => {
      const lottoNumber = answer.split(",").map((eachNumber) => eachNumber * 1);

      const lotto = new Lotto(lottoNumber, lottoTicket);
    });
  }
}

module.exports = DomainLogic2;
