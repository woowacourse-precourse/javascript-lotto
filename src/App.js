const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const Lotto = require('./Lotto');

class App {
  play() {
    this.Lotto = new Lotto();
    this.getAmount();
  }

  getAmount() {
    Console.readLine('구입금액을 입력해 주세요.', answer => {
      if (this.Lotto.isValidAmount(answer)) {
        const quantity = parseInt(+answer / 1000);
        this.issueLotto(quantity);
      }
    });
  }

  issueLotto(quantity) {
    let i = 0;
    Console.print(`${quantity}개를 구매했습니다.`);
    while (i < quantity) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(lotto);
      i++;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
