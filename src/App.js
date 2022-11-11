const MissionUtils = require('@woowacourse/mission-utils');
const GameUtils = require("../src/Utils/GameUtils");
const Validator = require("../src/Utils/Validator");
const MESSAGES = require('./constants');

class App {
  play() {
    MissionUtils.Console.readLine(MESSAGES.GAME.requirePurchaseAmount, (amount) => {
      amount = GameUtils.filterPurchaseAmount(amount);
      amount = Validator.amountValidCheck(amount);
      MissionUtils.Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
