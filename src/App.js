const { Console } = require("@woowacourse/mission-utils");
const NumberGenerator = require("./NumberGenerator");

class App {
  lottos;

  constructor() {
    this.lottos = [];
  }

  play() {
    Console.readLine('구입금액을 입력해 주세요.\n', this.issueLotto.bind(this));
  }

  issueLotto() {
    const numberGenerator = new NumberGenerator();
    for (let purchaseCount = 0; purchaseCount < purchaseMoney / 1000; purchaseCount++){
      this.lottos.push(new Lotto(numberGenerator.createRandomNumber()));
    }
  }
}

module.exports = App;

const ap = new App();
ap.play();