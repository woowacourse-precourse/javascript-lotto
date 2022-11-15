const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');
const Lotto = require('./Lotto');
const Draw = require('./Draw');
const Prize = require('./Prize');

class App {
  static buyLotto() {
    Purchase.pay((expense, lottoCount) => {
      const issuedLottos = Lotto.issue(lottoCount);

      App.winLotto(expense, issuedLottos);
    });
  }

  static winLotto(expense, issuedLottos) {
    Draw.getWinningNumbers((Draw) => {
      const { winning, bonus } = Draw;

      Prize.printLottoResult(expense, issuedLottos, winning, bonus);

      Console.close();
    });
  }

  play() {
    App.buyLotto();
  }
}

module.exports = App;
