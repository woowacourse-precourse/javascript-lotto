const MissionUtils = require("@woowacourse/mission-utils");
const INPUT_ERROR = require('./Constants');

class App {
  #lottos = [];
  #bonus = 0;

  play() {
    this.purchaseAmount();
  }

  purchaseAmount() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      this.isPurchaseAmountValid(answer);
    });
  }

  isPurchaseAmountValid(money) {
    if(Number(money) % 1000 != 0){
      throw INPUT_ERROR.NOT_DIVIDED;
    }
    return money;
  }

  InputLottos() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (answer) => {
      this.#lottos.push(answer);
    });
  }

  InputBonus() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (answer) => {
      this.#bonus = answer;
    });
  }
}

const app = new App;
app.play();
module.exports = App;
