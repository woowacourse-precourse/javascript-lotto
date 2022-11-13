const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.lottos = [];
    this.answer = [];
    this.item = 0;
    this.count = 0;
    this.bonusNum;
    this.match = [
      { collect: 3, reward: "5000" },
      { collect: 4, reward: "50,000" },
      { collect: 5, reward: "1,500,000" },
      { collect: 5, reward: "30,000,000", Bonus: true },
      { collect: 6, reward: "2,000,000,000" },
    ];
  }

  getLottoNumber(item) {
    this.lottos = Array.from({ length: item }, () =>
      Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
    );
  }

  inputCost() {
    Console.readLine("구입금액을 입력해 주세요.\n", (cost) => {
      this.isValidation(cost);
      this.item = +cost;
      this.getLottoNumber(this.item / 1000);
      this.printLotto();
    });
  }
  printLotto() {
    Console.print(`\n${this.item / 1000}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => Console.print(lotto));
  }

  play() {}
}

module.exports = App;
