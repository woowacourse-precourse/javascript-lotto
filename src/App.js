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

      this.printCountAndLottos(money);
    });
  }

  printCountAndLottos(money) {
    this.countAndLottos.countBuying(money);
    this.countAndLottos.printLottos(money);

    let lottos = this.countAndLottos.getLottos();
    this.enterWinningNumber(lottos);
  }

  enterWinningNumber(lottos) {
    Console.readLine(Messages.ENTER_WINNER_NUMBER, (winning) => {
      this.winningAndBonusNumbers.sixNumbersInRange(winning);

      this.enterBonusNumber(lottos, winning);
    });
  }

  enterBonusNumber(lottos, winning) {
    Console.readLine(Messages.ENTER_BONUS_NUMBER, (bonus) => {
      this.winningAndBonusNumbers.numberNotDuplicate(bonus);

      Console.print(Messages.WINNING_STATICS);
      this.lotto.lottosWinningBonus(lottos, winning, bonus);

      Console.close();
    });
  }
}

module.exports = App;
