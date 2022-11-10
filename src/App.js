const MissionUtils = require("@woowacourse/mission-utils");
const INPUT_ERROR = require('./Constants');

class App {
  play() {}

  purchaseAmount() {
    MissionUtils.Console.readLine((answer) => {
      return answer
    })
  }

  isPurchaseAmountValid(money) {
    if(Number(money) % 1000 != 0){
      throw INPUT_ERROR.NOT_DIVIDED;
    }
    return true;
  }
}

const app = new App;
app.play();
module.exports = App;
