const MissionUtils = require('@woowacourse/mission-utils');
const Money = require('./Money');
const RandomLottos = require('./RandomLottos');
const WinningLotto = require('./WinningLotto');
const { MESSAGE, PRIZE_MONEY, CONSTANT } = require('./Constants');

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
    this.read(MESSAGE.ASK_AMOUNT, (amount) => {
      this.money = new Money(+amount);
      const numOfLotto = this.money.getNumOfLotto();
      this.randomLottos = new RandomLottos(numOfLotto);
      this.randomLottos.printRandomLottos();
      this.enterWinningNumberMode();
    });
  }

  enterWinningNumberMode() {
    this.read(MESSAGE.ASK_WINNING_NUMBERS, (winNums) => {
      const correct = winNums.split(',').map((e) => +e);
      this.winningLotto = new WinningLotto(correct);
      this.read(MESSAGE.ASK_BONUS_NUMBER, (bonus) => {
        this.winningLotto.setBonus(+bonus);
        this.printToTalPrizeResult();
      });
    });
  }

  printToTalPrizeResult() {
    this.matchedLotto = this.randomLottos.getPrizeResult(this.winningLotto);
    this.printResult();
    this.money.printEarningRatio(this.matchedLotto);
    Console.close();
  }

  printResult() {
    Console.print(MESSAGE.PRIZE_RESULT);
    Console.print(MESSAGE.THREE_MATCHED + this.PrizeMatchedStr(CONSTANT.THREE_MATCHED));
    Console.print(MESSAGE.FOUR_MATCHED + this.PrizeMatchedStr(CONSTANT.FOUR_MATCHED));
    Console.print(MESSAGE.FIVE_MATCHED + this.PrizeMatchedStr(CONSTANT.FIVE_MATCHED));
    Console.print(MESSAGE.FIVE_BONUS_MATCHED + this.PrizeMatchedStr(CONSTANT.FIVE_BONUS_MATCHED));
    Console.print(MESSAGE.SIX_MATCHED + this.PrizeMatchedStr(CONSTANT.SIX_MATCHED));
  }

  PrizeMatchedStr(numOfMatchIdx) {
    const prizeMoney = PRIZE_MONEY[numOfMatchIdx].toLocaleString();
    const numOfLotto = this.matchedLotto[numOfMatchIdx];
    return `(${prizeMoney}원) - ${numOfLotto}개`;
  }

  read(msg, func) {
    Console.readLine(msg, (input) => {
      Console.print('');
      func(input);
    });
  }
}
module.exports = App;
