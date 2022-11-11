const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./user");
const Lotto = require("./Lotto");

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.user = new User();
    this.lottos = [];
  }

  play() {
    this.chargePurchaseMoney();
  }

  chargePurchaseMoney() {
    Console.readLine("구입금액을 입력하세요 : ", (answer) => {
      this.user.changeMoney(answer);
      Console.print(answer);
      this.purchaseLotto(this.user.getMoney());
    });
  }

  purchaseLotto(money) {
    const purChaseNumber = money / 1000;
    Console.print(`${purChaseNumber}개를 구매했습니다.`);
    for (let i = 0; i < purChaseNumber; i += 1) {
      this.lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
    this.lottos.forEach((lotto) => {
      Console.print(lotto.getLottoNumbers());
    });
  }
}

const app = new App();
app.play();

module.exports = App;
