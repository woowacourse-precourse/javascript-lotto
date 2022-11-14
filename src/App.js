const Lotto = require("./validate/Lotto.js");
const PurchaseLotto = require("./controller/PurchaseLotto.js");
const PurchaseValudate = require("./validate/PurchaseValidate.js");
const LottoResult = require("./controller/LottoResult.js");
const Bonus = require("./validate/Bonus.js");

const { Console, Random } = require("@woowacourse/mission-utils");
const {
  DEFAULT,
  LOTTO_PRIZE,
  RESULT_STRING,
  RANK,
} = require("./utils/constant.js");
const { divideThousandUnit } = require("./utils/utils.js");
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

  getEarningRate() {
    Console.print("당첨 통계");
    Console.print("---");

    this.rank = new LottoResult(
      this.lottos,
      this.luckyNumber,
      this.bonusNumber,
    ).getRank();
    console.log(this.rank, "this Rank");

    Object.entries(this.rank)
      .reverse()
      .forEach(([rank, count]) => {
        Console.print(
          `${RESULT_STRING[rank]} (${divideThousandUnit(
            LOTTO_PRIZE[rank],
          )}원) - ${count}개`,
        );
      });

    const totalEarning = Object.entries(this.rank).reduce((acc, cur) => {
      const [rank, count] = cur;
      let price = 0;
      switch (rank) {
        case "1":
          price += count * 2000000000;
          break;
        case "2":
          price += count * 30000000;
          break;
        case "3":
          price += count * 1500000;
          break;
        case "4":
          price += count * 50000;
          break;
        case "5":
          price += count * 5000;
          break;
      }
      return (acc += price);
    }, 0);

    this.earningRate = (totalEarning / this.input).toFixed(1);
    console.log(
      this.luckyNumber,
      this.bonusNumber,
      this.rank,
      this.earningRate,
    );
    Console.print(`총 수익률은 ${this.earningRate}%입니다.`);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
