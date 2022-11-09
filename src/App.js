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

  /**
   * TODO: 로또 생성 기능
   * 6개의 숫자 무작위로 생성
   * 하나의 로또는 1 ~ 45까지 중복 없는 숫자로 구성
   *
   */
}

new App().play();

module.exports = App;
