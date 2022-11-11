const MissionUtils = require('@woowacourse/mission-utils');
const GameUtils = require('../src/Utils/GameUtils');
const GamePrint = require('./GamePrint');
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
    MissionUtils.Console.readLine(MESSAGES.GAME.requireLottoNumbers, (input) => {
      input = GameUtils.toArray(input);
      const lotto = new Lotto(input);
      this.winningLotto = lotto.getWinningLotto();
      console.log(this.winningLotto);
      this.submitBonus();
    });
  }
  submitBonus() {    
    MissionUtils.Console.readLine(MESSAGES.GAME.requireBonusNumbers, (input) => {
      input = GameUtils.toArray(input);
      Validator.bonusValidCheck(input, this.winningLotto);
      MissionUtils.Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
