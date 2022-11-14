const MissionUtils = require('@woowacourse/mission-utils');
const Money = require('./Money');
const RandomLottos = require('./RandomLottos');
const { MESSAGE } = require('./Constants');

const { Console } = MissionUtils;

class App {
  constructor() {
    this.money = {};
    this.randomLottos = {};
    this.winningLotto = {};
    this.matchedLotto = [];
  }

  play() {
    this.enterPurchaseAmountMode();
  }

  enterPurchaseAmountMode() {
    Console.readLine(MESSAGE.ASK_AMOUNT, (amount) => {
      Console.print('');
      this.money = new Money(+amount);
      const numOfLotto = this.money.getNumOfLotto();
      this.randomLottos = new RandomLottos(numOfLotto);
      this.randomLottos.printRandomLottos();
    });
  }
}

module.exports = App;
