const MissionUtils = require('@woowacourse/mission-utils');
const GameUtils = require("../src/Utils/GameUtils");
const MESSAGES = require('./constants');

class App {
  play() {
    MissionUtils.Console.readLine(MESSAGES.GAME.requirePurchaseAmount, (amount) => {
      amount = GameUtils.removeBlank(amount);
      MissionUtils.Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
