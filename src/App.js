const LottoIsuued = require("./models/LottoIssued.js");
const LottoWinning = require("./models/LottoWinning.js");
const LottoPayment = require("./models/LottoPayment.js");
const RankingResult = require("./RankingResult.js");

const { Console } = require("@woowacourse/mission-utils");
const Views = require("./Views");

const ASK_WINNING_LOTTO_NUMBER = "당첨 번호를 입력해 주세요.";
const ASK_BONUS_LOTTO_NUMBER = "보너스 번호를 입력해 주세요.";

class App {
  lottoPayment;
  lottoIsuued;
  lottoWinning;

  buyLotto() {
    Views.printAskLottoPayment();
    Console.readLine("", (input) => {
      const payment = new LottoPayment(input);
      this.lottoPayment = payment.lottoPayment;
      this.showLottoIsuued(payment.lottoCount);
    });
  }

  showLottoIsuued(lottoCount) {
    Views.printLottoCount(lottoCount);
    this.lottoIsuued = new LottoIsuued(lottoCount).lottoIssued;
    Views.printIssuendLotto(this.lottoIsuued);
    this.getwinningNumbers();
  }

  getwinningNumbers() {
    Console.readLine(`\n${ASK_WINNING_LOTTO_NUMBER}\n`, (input) => {
      this.lottoWinning = new LottoWinning();
      this.lottoWinning.setWinningLotto(input);
      this.getBonumsNumbers();
    });
  }

  getBonumsNumbers() {
    Console.readLine(`\n${ASK_BONUS_LOTTO_NUMBER}\n`, (input) => {
      this.lottoWinning.setBonusNumber(input);
      this.showLottoResult();
    });
  }

  showLottoResult() {
    const ranking = new RankingResult();
    ranking.setRankingResult(
      this.lottoIsuued,
      this.lottoWinning.winningLotto,
      this.lottoWinning.bonusNumber
    );
    ranking.setEarningsRate(this.lottoPayment);
    Views.printRankingResult(ranking.rankingResult);
    Views.printEarningsRate(ranking.earningsRate);

    Console.close();
  }

  play() {
    this.buyLotto();
  }
}

const app = new App();
app.play();

module.exports = App;
