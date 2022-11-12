const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const WinnerNumber = require("./WinnerNumber");
const MatchingNumber = require("./MatchingNumber");
const ProfitRate = require("./ProfitRate.");

class App {
  constructor() {
    this.totalLottoNumber = [];
    this.payMoney;
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
    if (payMoney % 1000 !== 0 || payMoney === "0") {
      throw new Error("[ERROR] 구입 금액은 1000원 단위 입니다.");
    }
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
      this.loadMatchingNumberAboutLotto();
    });
  }

  validateInputBonusNumber(number) {
    if (number < 1 || number > 45 || !new RegExp("^[0-9]+$").test(number)) {
      throw new Error("[ERROR] 1에서 45까지의 번호를 입력해주세요");
    }
  }

  loadMatchingNumberAboutLotto() {
    MissionUtils.Console.print("\n당첨 통계\n---");
    const matchingNumber = new MatchingNumber(
      this.totalLottoNumber,
      this.winnerNumber,
      this.bonusNumber
    );
    const numberOfMathcingNumbers = matchingNumber.getNumberOfMatchingNumbersByRank();
    matchingNumber.printLottoResult(numberOfMathcingNumbers);
    this.loadLottoProfitRate(numberOfMathcingNumbers);
  }

  loadLottoProfitRate(numberOfMathcingNumbers) {
    const lottoProfitRate = new ProfitRate(numberOfMathcingNumbers, this.payMoney).getProfitRate();
    MissionUtils.Console.print(`총 수익률은 ${lottoProfitRate}%입니다.`);
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
