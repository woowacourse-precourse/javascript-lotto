const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const MatchingNumber = require("./MatchingNumber");
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
      this.validateInputMoney(this.payMoney);
      this.getLottoNumber(this.payMoney / 1000);
      this.inputWinnerNumber();
    });
  }

  validateInputMoney(payMoney) {
    if (payMoney % 1000 !== 0 || payMoney === "0")
      throw new Error("[ERROR] 구입 금액은 1000원 단위 입니다.");
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
      this.bonusNumber = number;
      this.validateInputBonusNumber(number);
      this.getMatchingNumberAboutLotto();
    });
  }

  validateInputBonusNumber(number) {
    if (number < 1 || number > 45 || !new RegExp("^[0-9]+$").test(number))
      throw new Error("[ERROR] 1에서 45까지의 번호를 입력해주세요");
  }

  getMatchingNumberAboutLotto() {
    MissionUtils.Console.print("\n당첨 통계\n---");
    const matchingNumber = new MatchingNumber(
      this.totalLottoNumber,
      this.winnerNumber,
      this.bonusNumber
    );
    const totalRanking = matchingNumber.getTotalRanking();
    matchingNumber.printTotalLottoResult(totalRanking);
    this.getLottoProfitRate(totalRanking);
  }

  getLottoProfitRate(totalRanking) {
    const totalPrizeMoney = this.calculateTotalPrizeMoney(totalRanking);
    const lottoProfitRate = this.calculateProfitRate(totalPrizeMoney, this.payMoney);
    MissionUtils.Console.print(`총 수익률은 ${lottoProfitRate}%입니다.`);
    MissionUtils.Console.close();
  }

  calculateProfitRate(totalPrizeMoney, payMoney) {
    return ((Math.round((totalPrizeMoney / payMoney) * 1000) / 1000) * 100).toFixed(1);
  }

  calculateTotalPrizeMoney(totalRanking) {
    return this.calculatePrizeMoney(totalRanking).reduce((totalMoney, prizeMoney) => {
      return (totalMoney += prizeMoney);
    }, 0);
  }

  calculatePrizeMoney(totalRanking) {
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
