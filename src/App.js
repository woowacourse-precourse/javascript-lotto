const MissionUtils = require('@woowacourse/mission-utils');
const GameUtils = require('../src/Utils/GameUtils');
const Validator = require('../src/Utils/Validator');
const Lotto = require('../src/Utils/Lotto');
const { MESSAGES } = require('./constants');

class App {
  play() {
    this.submitAmount();
  }
  submitAmount() {    
    MissionUtils.Console.readLine(MESSAGES.GAME.requirePurchaseAmount, (amount) => {
      this.purchaseAmount = GameUtils.filterPurchaseAmount(amount);
      this.purchaseAmount = Validator.amountValidCheck(this.purchaseAmount);
      this.sheets = GameUtils.getSheets(this.purchaseAmount);
      this.submitLotto();
    });
  }
  submitLotto() {    
    MissionUtils.Console.readLine(MESSAGES.GAME.requireLottoNumbers, (numbers) => {
      numbers = GameUtils.toArrayLotto(numbers);
      const lotto = new Lotto(numbers);
      MissionUtils.Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
