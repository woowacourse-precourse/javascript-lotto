const MissionUtils = require('@woowacourse/mission-utils');
const GameUtils = require('../src/Utils/GameUtils');
const GamePrint = require('./GamePrint');
const Validator = require('../src/Utils/Validator');
const { Lotto, getUserLottos } = require('../src/Utils/Lotto');
const { MESSAGES, PRIZE } = require('./constants');

class App {
  constructor() {
    this.amount = null,
    this.sheets = null,
    this.userLottos = null,
    this.winningLotto = null,
    this.prize = JSON.parse(JSON.stringify(PRIZE));
    this.revenue = 0;
    this.revenueRate = 0;
  }
  play() {
    this.submitAmount();
  }
  submitAmount() {
    MissionUtils.Console.readLine(MESSAGES.GAME.requirePurchaseAmount, (amount) => {
      this.amount = GameUtils.removeMarkingStandardMoney(amount);
      this.amount = Validator.amountValidCheck(this.amount);
      this.sheets = GameUtils.getSheets(this.amount);
      GamePrint.sheets(this.sheets);
      this.userLottos = getUserLottos(this.sheets);
      GamePrint.lottoList(this.userLottos);
      this.submitWinningLotto();
    });
  }
  submitWinningLotto() {    
    MissionUtils.Console.readLine(MESSAGES.GAME.requireLottoNumbers, (input) => {
      input = GameUtils.toNonCommaArray(input);
      this.winningLotto = new Lotto(input);
      this.submitBonus();
    });
  }
  submitBonus() {    
    MissionUtils.Console.readLine(MESSAGES.GAME.requireBonusNumbers, (input) => {
      input = GameUtils.toNonCommaArray(input);
      this.winningLotto.setBonus(input);
      this.getResult();
      GamePrint.result(this.prize, this.revenueRate);
      MissionUtils.Console.close();
    });
  }
  getResult() {
    this.userLottos.forEach(lotto => {
      const result = this.winningLotto.compare(lotto);
      this.getRevenue(result);      
    });
    this.revenueRate = GameUtils.getRevenueRate(this.amount, this.revenue);
  }
  getRevenue(matched) {
    const matchedNumber = this.prize[matched.lotto];
    if(matched.lotto === '5' && matched.bonus === false) {
      this.revenue += matchedNumber.nonBonus.winningAmount;
      return matchedNumber.nonBonus.ea += 1;
    }
    if(matched.lotto === '5' && matched.bonus === true) {
      this.revenue += matchedNumber.hasBonus.winningAmount;
      return matchedNumber.hasBonus.ea += 1;
    }
    if(Object.keys(this.prize).includes(matched.lotto)) {
      this.revenue += matchedNumber.winningAmount;
      return matchedNumber.ea += 1;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
