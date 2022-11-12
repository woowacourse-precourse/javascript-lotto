const MissionUtils = require('@woowacourse/mission-utils');
const GameUtils = require('../src/Utils/GameUtils');
const GamePrint = require('./GamePrint');
const Validator = require('../src/Utils/Validator');
const { Lotto, getUserLottos } = require('../src/Utils/Lotto');
const { MESSAGES } = require('./constants');

class App {
  constructor() {
    this.lotto = {
      amount: null,
      sheets: null,
      user: null,
      winning: null,
    }
  }
  play() {
    this.submitAmount();
  }
  submitAmount() {
    MissionUtils.Console.readLine(MESSAGES.GAME.requirePurchaseAmount, (amount) => {
      this.lotto.amount = GameUtils.filterPurchaseAmount(amount);
      this.lotto.amount = Validator.amountValidCheck(this.lotto.amount);
      this.lotto.sheets = GameUtils.getSheets(this.lotto.amount);
      GamePrint.sheets(this.lotto.sheets);
      this.lotto.user = getUserLottos(this.lotto.sheets);
      GamePrint.userLottos(this.lotto.user);
      this.submitLotto();
    });
  }
  submitLotto() {    
    MissionUtils.Console.readLine(MESSAGES.GAME.requireLottoNumbers, (input) => {
      input = GameUtils.toArray(input);
      this.lotto.winning = new Lotto(input);
      this.submitBonus();
    });
  }
  submitBonus() {    
    MissionUtils.Console.readLine(MESSAGES.GAME.requireBonusNumbers, (input) => {
      input = GameUtils.toArray(input);
      this.lotto.winning.getBonus(input);
      MissionUtils.Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
