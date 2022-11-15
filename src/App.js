const Earning = require("./controller/Earning.js");
const PurchaseLotto = require("./controller/PurchaseLotto.js");
const LottoResult = require("./controller/LottoResult.js");

const Lotto = require("./validate/Lotto.js");
const PurchaseValudate = require("./validate/PurchaseValidate.js");
const Bonus = require("./validate/Bonus.js");

const { Console } = require("@woowacourse/mission-utils");
const { DEFAULT } = require("./utils/constant.js");

class App {
  constructor() {
    this.lottos = DEFAULT.INITIAL_ARRAY;
    this.luckyNumber = DEFAULT.INITIAL_ARRAY;
    this.bonusNumber = DEFAULT.ZERO;
    this.input = DEFAULT.ZERO;
    this.lottoResult = {};
  }

  play() {
    Console.readLine("구입금액을 입력해주세요.", (input) => {
      this.input = Number(input);
      new PurchaseValudate(this.input);
      this.lottos = new PurchaseLotto(this.input).start();
      this.getLuckyNumbers();
    });
  }

  getLuckyNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      this.luckyNumber = input.split(",").map(Number);
      new Lotto(this.luckyNumber);

      this.getBonusLottoNums();
    });
  }

  getBonusLottoNums() {
    Console.readLine("보너스 번호를 입력해 주세요.", (input) => {
      this.bonusNumber = Number(input);
      new Bonus(this.bonusNumber, this.luckyNumber);
      this.getLottoResult();
    });
  }

  getLottoResult() {
    Console.print("당첨 통계");
    Console.print("---");

    const lottoResult = new LottoResult(
      this.lottos,
      this.luckyNumber,
      this.bonusNumber,
    );
    this.lottoResult = lottoResult.getResult();

    lottoResult.printLottoResult(this.lottoResult);
    this.getEarningRate();
  }

  getEarningRate() {
    const earning = new Earning(this.lottoResult);

    const totalEarning = earning.getTotalLottoEarning();
    const earningRate = earning.getEarningRate(totalEarning, this.input);

    Console.print(`총 수익률은 ${earningRate}%입니다.`);
    Console.close();
  }
}

module.exports = App;
