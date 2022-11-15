const Earning = require("./controller/Earning.js");
const PurchaseLotto = require("./controller/PurchaseLotto.js");
const LottoResult = require("./controller/LottoResult.js");

const Lotto = require("./Lotto.js");
const PurchaseValudate = require("./PurchaseValidate.js");
const Bonus = require("./Bonus.js");

const { Console } = require("@woowacourse/mission-utils");
const { DEFAULT } = require("./utils/constant.js");

class App {
  constructor() {
    this.lottos = DEFAULT.INITIAL_ARRAY;
    this.luckyNumber = DEFAULT.INITIAL_ARRAY;
    this.bonusNumber = DEFAULT.ZERO;
    this.purchaseAmount = DEFAULT.ZERO;
    this.lottoResult = {};
  }

  play() {
    Console.readLine("구입금액을 입력해주세요.", (input) => {
      const inputToNumber = Number(input);
      const purchase = new PurchaseValudate(inputToNumber);
      this.purchaseAmount = purchase.getPurchaceAmount();

      const lottos = new PurchaseLotto(this.purchaseAmount);
      this.lottos = lottos.getLottos();

      this.getLuckyNumbers();
    });
  }

  getLuckyNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      const inputToNumber = input.split(",").map(Number);
      const lotto = new Lotto(inputToNumber);
      this.luckyNumber = lotto.getLuckyNumber();

      this.getBonusLottoNums();
    });
  }

  getBonusLottoNums() {
    Console.readLine("보너스 번호를 입력해 주세요.", (input) => {
      const inputToNumber = Number(input);
      const bonus = new Bonus(inputToNumber, this.luckyNumber);
      this.bonusNumber = bonus.getBonusNumber();

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
    const earningRate = earning.getEarningRate(
      totalEarning,
      this.purchaseAmount,
    );

    Console.print(`총 수익률은 ${earningRate}%입니다.`);
    Console.close();
  }
}

module.exports = App;
