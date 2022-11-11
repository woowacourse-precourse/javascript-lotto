const MissionUtils = require('@woowacourse/mission-utils');
const GameUtils = require('../src/Utils/GameUtils');
const Validator = require('../src/Utils/Validator');
const { MESSAGES } = require('./constants');

class App {
  play() {
    MissionUtils.Console.readLine(MESSAGES.GAME.requirePurchaseAmount, (amount) => {
      this.purchaseAmount = GameUtils.filterPurchaseAmount(amount);
      this.purchaseAmount = Validator.amountValidCheck(this.purchaseAmount);
      this.sheets = GameUtils.getSheets(this.purchaseAmount);
      console.log(this.sheets);
      MissionUtils.Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
