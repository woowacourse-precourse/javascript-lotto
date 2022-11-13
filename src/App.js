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

      this.#printLottos(lottos);
    });
  }

  #printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(lotto.toString()));

    this.#enterWinningNumber(lottos);
  }

  #enterWinningNumber(lottos) {
    Console.readLine(Messages.ENTER_WINNER_NUMBER, (winning) => {
      winning = winning.split(',').map(Number);
      const winningLotto = new Lotto(winning);

      this.#enterBonusNumber(lottos, winningLotto);
    });
  }

  #enterBonusNumber(lottos, winning) {
    Console.readLine(Messages.ENTER_BONUS_NUMBER, (bonus) => {
      bonus = Number(bonus);
      this.#validateBonusNumber(winning, bonus);
    });
  }

  #validateBonusNumber(winning, bonus) {
    if (winning.hasNumber(bonus)) throw new Error(Messages.NOT_DUPLICATE);
    if (!(bonus >= 1 && bonus <= 45)) throw new Error(Messages.NUMBERS_IN_RANGE);
  }

  printWinningStatics(lottos, winning, bonus) {
    Console.print(Messages.WINNING_STATICS);
    this.lotto.lottosWinningBonus(lottos, winning, bonus);

    Console.close();
  }
}

module.exports = App;
