const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.buyMoney = 0;
  }

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요\n", (answer) => {
      let lottoNum = 0;
      this.buyMoney = answer;
      lottoNum = this.divideMoneyByThousand();
      this.getWinningNum();
    });
  }

  divideMoneyByThousand() {
    const lottoNum = parseInt(this.buyMoney / 1000);
    MissionUtils.Console.print(`${lottoNum}개를 구매했습니다.`);
    return lottoNum;
  }

  getWinningNum() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
      this.winningNum = answer.split(",").map((item) => Number(item));
    });
  }
}

module.exports = App;
