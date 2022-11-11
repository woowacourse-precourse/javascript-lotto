const MissionUtils = require("@woowacourse/mission-utils");
const INPUT_ERROR = require('./Constants');

class App {
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
}

const app = new App;
app.play();
module.exports = App;
