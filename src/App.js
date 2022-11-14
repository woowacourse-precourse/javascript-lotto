const Lotto = require("./validate/Lotto.js");
const PurchaseLotto = require("./controller/PurchaseLotto.js");
const PurchaseValudate = require("./validate/PurchaseValidate.js");
const LottoResult = require("./controller/LottoResult.js");
const Bonus = require("./validate/Bonus.js");

const { Console } = require("@woowacourse/mission-utils");
const { DEFAULT, LOTTO_PRIZE, RANK } = require("./utils/constant.js");

class App {
  constructor() {
    this.lottos = [];
    this.luckyNumber = [];
    this.bonusNumber = 0;
    this.earningRate = 0;
    this.input = 0;
    this.rank = {};
  }

  play() {
    Console.readLine("구입금액을 입력해주세요.\n", (input) => {
      this.input = Number(input);
      new PurchaseValudate(this.input);
      this.lottos = new PurchaseLotto(this.input).start();
      this.getLuckyNumbers();
    });
  }

  getLuckyNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      this.luckyNumber = input
        .split(",")
        .map(Number)
        .sort((a, b) => a - b);
      new Lotto(this.luckyNumber);

      this.getBonusLottoNums();
    });
  }

  getBonusLottoNums() {
    Console.readLine("보너스 번호를 입력해 주세요.", (input) => {
      this.bonusNumber = Number(input);
      new Bonus(this.bonusNumber, this.luckyNumber);
      this.getEarningRate();
    });
  }

  convertRankToPrize(rank, count) {
    switch (rank) {
      case RANK[1]:
        return LOTTO_PRIZE.FIRST * count;
      case RANK[2]:
        return LOTTO_PRIZE.SECOND * count;
      case RANK[3]:
        return LOTTO_PRIZE.THIRD * count;
      case RANK[4]:
        return LOTTO_PRIZE.FOURTH * count;
      case RANK[5]:
        return LOTTO_PRIZE.FIFTH * count;
      default:
        return;
    }
  }

  getTotalLottoEarning(result) {
    const rankCountArray = Object.entries(result);
    const totalEarning = rankCountArray.reduce(
      (total, [rank, count]) => (total += this.convertRankToPrize(rank, count)),
      DEFAULT.ZERO,
    );

    return totalEarning;
  }

  getEarningRate() {
    Console.print("당첨 통계");
    Console.print("---");

    const lottoResult = new LottoResult(
      this.lottos,
      this.luckyNumber,
      this.bonusNumber,
    );
    this.rank = lottoResult.getResult();
    // this.rank = new LottoResult().getRank();

    lottoResult.printLottoResult(this.rank);

    const totalEarning = this.getTotalLottoEarning(this.rank);
    this.earningRate = ((totalEarning / this.input) * 100).toFixed(1);

    Console.print(`총 수익률은 ${this.earningRate}%입니다.`);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
