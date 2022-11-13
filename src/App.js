const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const Lotto = require("./Lotto");
const WinningNumbers = require("./WinningNumbers");

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.user = new User();
    this.lottos = [];
    this.winningNumbers = new WinningNumbers();
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
      Console.print(lotto.getLottoNumbersByString());
    });
    this.enterWinningNumbers();
  }

  enterWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요. : ", (answer) => {
      Console.print(answer);
      const numbericAnswer = answer.split(",").map((number) => Number(number));
      this.winningNumbers.addWinningNumbers(numbericAnswer);
      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요. : ", (answer) => {
      Console.print(answer);
      this.winningNumbers.addBonusNumber(Number(answer));
      this.showResultMessage();
    });
  }

  showResultMessage() {
    Console.print("당첨 통계");
    Console.print("---");
  }
}

const app = new App();
app.play();

module.exports = App;
