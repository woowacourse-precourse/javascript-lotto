const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');
const CountAndLottos = require('./CountAndLottos');
const WinningAndBonusNumbers = require('./WinningAndBonusNumbers');
const Lotto = require('./Lotto');
const Validation = require('./Validation');

class App {
  constructor() {
    this.countAndLottos = new CountAndLottos();
    this.winningAndBonusNumbers = new WinningAndBonusNumbers();
    this.lotto = new Lotto();
    this.validation = new Validation();
  }

  play() {
    Console.readLine(Messages.ENTER_MONEY, (money) => {
      this.validation.purchaseAmount(money);
    });
  }

  enterWinningNumber() {
    Console.readLine(Messages.INPUT_WINNER_NUMBER, (numbers) => {
      this.winningAndBonusNumbers.sixNumbersInRange(numbers);
      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    Console.readLine(Messages.INPUT_BONUS_NUMBER, (number) => {
      this.winningAndBonusNumbers.numberNotDuplicate(number);
      this.lottoManager.winningStatics();
    });
  }
}

module.exports = App;
