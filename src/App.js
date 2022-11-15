const { Random, Console } = require("@woowacourse/mission-utils");
const { error_message } = require("./const");

class App {
  constructor() {
    this.lottoQuantity = 0;
    this.lottoArrays = [];
  }

  play() {
    this.getPurchasePrice();
  }

  getPurchasePrice() {
    Console.readLine("구입금액을 입력해 주세요.\n", (price) => {
      this.checkPurchasePrice(price);
      this.printLottoQuantity(price);
      this.printLottoArrays();
    });
  }

  checkPurchasePrice(price) {
    if (price % 1000 !== 0)
      throw new Error(error_message.not_thousand_won_unit);
  }

  printLottoQuantity(price) {
    this.lottoQuantity = parseInt(price) / 1000;
    Console.print(`\n${this.lottoQuantity}개를 구매했습니다.`);
  }

  printLottoArrays() {
    for (let i = 0; i < this.lottoQuantity; i++) {
      const lottoNums = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedLottoNums = lottoNums.sort((a, b) => a - b);
      Console.print(sortedLottoNums);
      this.lottoArrays.push(sortedLottoNums);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
