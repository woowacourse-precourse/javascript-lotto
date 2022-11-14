const Lotto = require("./validate/Lotto.js");
const PurchaseLotto = require("./controller/PurchaseLotto.js");
const PurchaseValudate = require("./validate/PurchaseValidate.js");
const LottoResult = require("./controller/LottoResult.js");
const Bonus = require("./validate/Bonus.js");

const { Console } = require("@woowacourse/mission-utils");
const { DEFAULT, LOTTO_PRIZE, RANK } = require("./utils/constant.js");
const Earning = require("./controller/Earning.js");

class App {
  constructor() {
    this.lottos = [];
    this.luckyNumber = [];
    this.bonusNumber = 0;
    this.input = 0;
    this.lottoResult = {};
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

  getEarningRate() {
    Console.print("당첨 통계");
    Console.print("---");

    const lottoResult = new LottoResult(
      this.lottos,
      this.luckyNumber,
      this.bonusNumber,
    );
    this.lottoResult = lottoResult.getResult();

    lottoResult.printLottoResult(this.lottoResult);

    const earning = new Earning(this.lottoResult);

    const totalEarning = earning.getTotalLottoEarning();
    const earningRate = earning.getEarningRate(totalEarning, this.input);

    Console.print(`총 수익률은 ${earningRate}%입니다.`);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
