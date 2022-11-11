const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGES = require('./constants');

class App {
  play() {
    MissionUtils.Console.readLine(MESSAGES.GAME.requirePurchaseAmount, (amount) => {
      console.log(amount);
      MissionUtils.Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
