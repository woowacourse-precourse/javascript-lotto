const LottoIsuued = require("./models/LottoIssued.js");
const LottoWinning = require("./models/LottoWinning.js");
const LottoPayment = require("./models/LottoPayment.js");
const RankingResult = require("./RankingResult.js");

const { Console } = require("@woowacourse/mission-utils");
const {
  printAskLottoPayment,
  printLottoCount,
  printIssuendLotto,
  printRankingResult,
  printEarningsRate,
} = require("./Views");

const ASK_WINNING_LOTTO_NUMBER = "당첨 번호를 입력해 주세요.";
const ASK_BONUS_LOTTO_NUMBER = "보너스 번호를 입력해 주세요.";

class App {
  lottoPayment;
  lottoCount;
  lottoIsuued;
  lottoWinning;
  winningNumber;
  bonusLotto;

  constructor() {
    this.lottoWinning = new LottoWinning();
  }

  buyLotto() {
    printAskLottoPayment();
    Console.readLine("", (input) => {
      const payment = new LottoPayment(input);
      this.lottoPayment = payment.lottoPayment;
      return this.showLottoIsuued(payment.lottoCount);
    });
  }

  showLottoIsuued(lottoCount) {
    printLottoCount(lottoCount);
    this.lottoIsuued = new LottoIsuued(lottoCount).lottoIssued;
    printIssuendLotto(this.lottoIsuued);
    return this.getwinningNumbers();
  }

  getwinningNumbers() {
    Console.readLine(`\n${ASK_WINNING_LOTTO_NUMBER}\n`, (input) => {
      this.lottoWinning.setWinningLotto(input);
      return this.getBonumsNumbers();
    });
  }

  getBonumsNumbers() {
    Console.readLine(`\n${ASK_BONUS_LOTTO_NUMBER}\n`, (input) => {
      this.lottoWinning.setBonusNumber(input);
      return this.showLottoResult();
    });
  }

  showLottoResult() {
    const ranking = new RankingResult();
    const rankingResult = ranking.setRankingResult(
      this.lottoIsuued,
      this.lottoWinning.winningLotto,
      this.lottoWinning.bonusNumber
    );
    const earningsRate = ranking.setEarningsRate(
      rankingResult,
      this.lottoPayment
    );
    printRankingResult(rankingResult);
    printEarningsRate(earningsRate);
    Console.close();
  }

  play() {
    this.buyLotto();
  }
}

const app = new App();
app.play();

// module.exports = App;
