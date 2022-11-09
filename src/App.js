const { Console } = require('@woowacourse/mission-utils');

const LottoManager = require('./LottoManager');

class App {
  lottoManager;

  constructor() {
    this.lottoManager = new LottoManager();
  }

  play() {
    Console.readLine('구입금액을 입력해주세요.\n', purchaseAmount => {
      try {
        this.lottoManager.validatePurchaseAmount(purchaseAmount);
        this.lottoManager.issueLottos(purchaseAmount);
        this.printLottos(this.lottoManager.lottos);
      } catch (err) {
        this.exitGame(err.message);
        throw err;
      }
    });
  }

  printLottos(lottos) {
    Console.print('');
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => Console.print(`[${lotto.numbers.join(', ')}]`));
  }

  exitGame(errorMessage) {
    Console.print(errorMessage);
    Console.close();
  }
}

new App().play();

module.exports = App;
