const MissionUtils = require('@woowacourse/mission-utils');
const GameUtils = require('../src/Utils/GameUtils');
const GamePrint = require('./GamePrint');
const Validator = require('../src/Utils/Validator');
const Lotto = require('./Lotto');
const { MESSAGES, PRIZE_TABLE, LOTTO_BASIC_CONDITION } = require('./constants');

class App {
  constructor() {
    this.amount = null,
    this.sheets = null,
    this.userLottos = null,
    this.winningLotto = null,
    this.prize = JSON.parse(JSON.stringify(PRIZE_TABLE));
    this.revenue = 0;
    this.revenueRate = 0;
  }

  play() {
    this.submitAmount();
  }

  submitAmount() {
    MissionUtils.Console.readLine(MESSAGES.GAME.REQUIRE_PURCHASE_AMOUNT, (amount) => {
      this.amount = GameUtils.removeMarkingStandardMoney(amount);
      Validator.amountValidCheck(this.amount);
      this.amount = Number(this.amount);
      this.sheets = GameUtils.getSheets(this.amount);
      GamePrint.sheets(this.sheets);
      this.userLottos = this.getUserLottos(this.sheets);
      GamePrint.lottoList(this.userLottos);
      this.submitWinningLotto();
    });
  }

  submitWinningLotto() {    
    MissionUtils.Console.readLine(MESSAGES.GAME.REQUIRE_WINNING_LOTTO_NUMBER, (input) => {
      const submittedNumbers = GameUtils.toArray(input);
      this.winningLotto = new Lotto(submittedNumbers);
      this.submitBonus();
    });
  }

  submitBonus() {    
    MissionUtils.Console.readLine(MESSAGES.GAME.REQUIRE_BONUS, (input) => {
      const submittedBonus = GameUtils.toArray(input);
      this.winningLotto.setBonus(submittedBonus);
      this.getResult();
      GamePrint.result(this.prize, this.revenueRate);
      MissionUtils.Console.close();
    });
  }

  getResult() {
    this.userLottos.forEach(lotto => {
      const result = this.winningLotto.compare(lotto);
      this.setRevenue(result);      
    });
    this.revenueRate = GameUtils.getRevenueRate(this.amount, this.revenue);
  }

  setRevenue(matched) {
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

  getUserLottos(sheets) {
    const lottos = [];
    while(lottos.length < sheets) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO_BASIC_CONDITION.start, LOTTO_BASIC_CONDITION.end, LOTTO_BASIC_CONDITION.length);
      lotto.sort((a,b) => a - b);
      lottos.push(lotto);
    }
    return lottos;
  }
}

const app = new App();
app.play();

module.exports = App;
