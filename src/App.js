const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  purchaseAmount() {
    MissionUtils.Console.readLine((answer) => {
      return answer
    })
  }
}

const app = new App;
app.play();
module.exports = App;
