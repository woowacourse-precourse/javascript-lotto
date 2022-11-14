const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Result = require("./Result");
const Score = require("./Score");

class App {
  constructor() {
    this.result = new Result();
    this.score = new Score();
    this.lotto = new Lotto();
    this.winningNum = [];
    this.bonusNum = 0;
    this.buyMoney = 0;
  }

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요\n", (answer) => {
      let lottoNum = 0;
      this.buyMoney = answer;
      lottoNum = this.divideMoneyByThousand();
      const lottoArr = this.lotto.createTotalLottoArr(lottoNum);
      this.getWinningNum(lottoArr);
    });
  }

  divideMoneyByThousand() {
    const lottoNum = parseInt(this.buyMoney / 1000);
    MissionUtils.Console.print(`${lottoNum}개를 구매했습니다.`);
    return lottoNum;
  }

  getWinningNum(lottoArr) {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
      this.winningNum = answer.split(",").map((item) => Number(item));
      this.getBonusNum(lottoArr);
    });
  }

  getBonusNum(lottoArr) {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.\n",
      (answer) => {
        this.bonusNum = Number(answer);
        const scores = this.score.getLottoScores(lottoArr, this.winningNum);
        const lottoResult = this.result.createLottoResult(
          scores,
          this.bonusNum,
          lottoArr
        );
        const bonusResult = this.result.createBonusResult();
        console.log(bonusResult);
        const totalYield = this.result.getTotalYield(
          this.buyMoney,
          lottoResult,
          bonusResult
        );
        this.result.printLottoResult(lottoResult, bonusResult, totalYield);
      }
    );
  }
}

module.exports = App;
