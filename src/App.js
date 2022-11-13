const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');
const LottoSeller = require('./LottoSeller');
const Lotto = require('./Lotto');

class App {
  #lottoSeller;

  constructor() {
    this.#lottoSeller = new LottoSeller();
  }

  play() {
    Console.readLine(Messages.ENTER_MONEY, (money) => {
      money = Number(money);
      const lottos = this.#lottoSeller.sellLotto(money);

      this.printCountAndLottos(money);
    });
  }

  printCountAndLottos(money) {
    this.lottoSeller.countBuying(money);
    this.lottoSeller.printLottos(money);

    let lottos = this.lottoSeller.getLottos();
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

      this.printWinningStatics(lottos, winning, bonus);
    });
  }

  printWinningStatics(lottos, winning, bonus) {
    Console.print(Messages.WINNING_STATICS);
    this.lotto.lottosWinningBonus(lottos, winning, bonus);

    Console.close();
  }
}

module.exports = App;
