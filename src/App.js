const MissionUtils = require('@woowacourse/mission-utils');
const Money = require('./Money');
const RandomLottos = require('./RandomLottos');
const WinningLotto = require('./WinningLotto');
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
      this.enterWinningNumberMode();
    });
  }

  enterWinningNumberMode() {
    Console.readLine(MESSAGE.ASK_WINNING_NUMBERS, (winNums) => {
      Console.print('');
      Console.readLine(MESSAGE.ASK_BONUS_NUMBER, (bonus) => {
        Console.print('');
        const correct = winNums.split(',').map((e) => +e);
        this.winningLotto = new WinningLotto(correct, +bonus);
      });
    });
  }
}

module.exports = App;
