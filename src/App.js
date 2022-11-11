const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Statistics = require("./Statistics");

class App {
  constructor() {
    this.totalLottoNumber = [];
    this.payMoney = 0;
    this.winnerNumber;
    this.bonusNumber;
  }
  play() {
    this.inputMoney();
  }

  inputMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.payMoney = money;
      if (this.payMoney % 1000 !== 0 || this.payMoney === "0")
        throw new Error("[ERROR] 구입 금액은 1000원 단위 입니다.");

      this.getLottoNumber(this.payMoney / 1000);
      this.inputWinnerNumber();
    });
  }

  getLottoNumber(lottoTickets) {
    MissionUtils.Console.print(`\n${lottoTickets}개를 구매했습니다.`);
    for (let i = 0; i < lottoTickets; i++) {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(randomNumber);
      this.totalLottoNumber.push(lotto.sortLotto(randomNumber));
    }
  }

  inputWinnerNumber() {
    MissionUtils.Console.readLine("\n당첨 번호를 입력해 주세요.\n", (number) => {
      if (number.split(",").length !== 6) {
        throw new Error("[ERROR] 쉼표(,)를 기준으로 6자리를 입력해주세요");
      }
      this.winnerNumber = number.replace(/\s/g, "").split(",");
      if (new Set(this.winnerNumber).size !== 6) {
        throw new Error("[ERROR] 중복없이 숫자를 입력해주세요.");
      }
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine("\n보너스 번호를 입력해 주세요.\n", (number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 1에서 45까지의 번호를 입력해주세요");
      }
      this.bonusNumber = number;
      this.getStatisticsAboutLotto();
    });
  }

  getStatisticsAboutLotto() {
    MissionUtils.Console.print("\n당첨 통계\n---");
    const statistics = new Statistics(this.totalLottoNumber, this.winnerNumber, this.bonusNumber);
    const totalRankingArr = statistics.getTotalRankingArr();
    statistics.printTotalLottoResult(totalRankingArr);
    this.getLottoRateOfReturn(totalRankingArr);
  }

  getLottoRateOfReturn(totalRankingArr) {
    const totalPrizeMoney = this.getTotalPrizeMoney(totalRankingArr);
    const lottoRateOfReturn = (
      (Math.round((totalPrizeMoney / this.payMoney) * 1000) / 1000) *
      100
    ).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${lottoRateOfReturn}%입니다.`);
    MissionUtils.Console.close();
  }

  getTotalPrizeMoney(totalRankingArr) {
    return this.getPrizeMoneyArr(totalRankingArr).reduce((totalMoney, prizeMoney) => {
      return (totalMoney += prizeMoney);
    }, 0);
  }

  getPrizeMoneyArr(totalRankingArr) {
    const currency = [5000, 50000, 1500000, 30000000, 2000000000];
    const prizeMoneyArr = totalRankingArr.map((lotto, index) => {
      if (lotto !== 0) return lotto * currency[index];
    });
    return prizeMoneyArr.filter((money) => money !== undefined);
  }
}

const app = new App();
app.play();
module.exports = App;
