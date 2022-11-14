const MissionUtils = require("@woowacourse/mission-utils");
const Money = require("./Money");

class App {
  constructor() {
    this.money = 0;
    this.purchaseQuantity = 0;
    this.lottoList = [];
  }

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      new Money(money);
      this.money = money;
      this.printPurchaseQuantity(this.money);
    });
  }

  printPurchaseQuantity(money) {
    const UNIT = 1000;
    const convertIntoQuantity = money / UNIT;
    this.purchaseQuantity = convertIntoQuantity;
    MissionUtils.Console.print(`\n${this.purchaseQuantity}개를 구매했습니다.`);

    this.issueLotto(this.purchaseQuantity);
  }

  issueLotto(quantity) {
    const START_LOTTO_NUMBER = 1;
    const END_LOTTO_NUMBER = 45;
    const TOTAL_LOTTO_COUNT = 6;

    for (let line = 0; line < quantity; line++) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(
        START_LOTTO_NUMBER,
        END_LOTTO_NUMBER,
        TOTAL_LOTTO_COUNT
      );
      MissionUtils.Console.print(lotto);
      this.lottoList.push(lotto);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
