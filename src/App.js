const MissionUtils = require('@woowacourse/mission-utils');
const GameUtils = require('../src/Utils/GameUtils');
const GamePrint = require('./GamePrint');
const Validator = require('../src/Utils/Validator');
const { Lotto, getUserLottos } = require('../src/Utils/Lotto');
const { MESSAGES, PRIZE } = require('./constants');

class App {
  constructor() {
    this.lotto = {
      amount: null,
      sheets: null,
      user: null,
      winning: null,
    }
    this.prize = JSON.parse(JSON.stringify(PRIZE));
    this.totalPrizeMoney = 0;
    this.profitRate = 0;
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
      this.getResult();
      GamePrint.result(this.prize, this.profitRate);
      MissionUtils.Console.close();
    });
  }
  getResult() {
    this.lotto.user.forEach(lotto => {
      const match = this.lotto.winning.compare(lotto);
      this.setPrize(match);      
    });
    this.profitRate = GameUtils.getProfitRate(this.lotto.amount, this.totalPrizeMoney);
  }
  setPrize(match) {
    if(match.lotto === '5' && match.bonus === false) {
      this.totalPrizeMoney += this.prize[match.lotto].nonBonus.winningAmount;
      return this.prize[match.lotto].nonBonus.ea += 1;
    }
    if(match.lotto === '5' && match.bonus === true) {
      this.totalPrizeMoney += this.prize[match.lotto].hasBonus.winningAmount;
      return this.prize[match.lotto].hasBonus.ea += 1;
    }
    if(Object.keys(this.prize).includes(match.lotto)) {
      this.totalPrizeMoney += this.prize[match.lotto].winningAmount;
      return this.prize[match.lotto].ea += 1;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
