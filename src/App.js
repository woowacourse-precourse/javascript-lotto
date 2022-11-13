const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
const Lotto = require('./Lotto');

class App {
  #amount;

  play() {
    this.Lotto = new Lotto();
    this.getAmount();
  }

  getAmount() {
    Console.readLine('구입금액을 입력해 주세요.', answer => {
      if (Lotto.isValidAmount(answer)) {
        this.#amount = answer;
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
