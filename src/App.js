const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Statistics = require("./Statistics");
const WinnerNumber = require("./WinnerNumber");

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
      this.winnerNumber = new WinnerNumber(number).getNumberWithoutSpace();
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine("\n보너스 번호를 입력해 주세요.\n", (number) => {
      if (number < 1 || number > 45) throw new Error("[ERROR] 1에서 45까지의 번호를 입력해주세요");
      this.bonusNumber = number;
      this.getStatisticsAboutLotto();
    });
  }

  getStatisticsAboutLotto() {
    MissionUtils.Console.print("\n당첨 통계\n---");
    const statistics = new Statistics(this.totalLottoNumber, this.winnerNumber, this.bonusNumber);
    const totalRanking = statistics.getTotalRanking();
    statistics.printTotalLottoResult(totalRanking);
    this.getLottoRateOfReturn(totalRanking);
  }

  getLottoRateOfReturn(totalRanking) {
    const totalPrizeMoney = this.getTotalPrizeMoney(totalRanking);
    const lottoRateOfReturn = (
      (Math.round((totalPrizeMoney / this.payMoney) * 1000) / 1000) *
      100
    ).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${lottoRateOfReturn}%입니다.`);
    MissionUtils.Console.close();
  }

  getTotalPrizeMoney(totalRanking) {
    return this.getPrizeMoney(totalRanking).reduce((totalMoney, prizeMoney) => {
      return (totalMoney += prizeMoney);
    }, 0);
  }

  getPrizeMoney(totalRanking) {
    const currency = [5000, 50000, 1500000, 30000000, 2000000000];
    const prizeMoney = totalRanking.map((lotto, index) => {
      if (lotto !== 0) return lotto * currency[index];
    });
    return prizeMoney.filter((money) => money !== undefined);
  }
}

const app = new App();
app.play();
module.exports = App;
