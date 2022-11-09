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
        this.validate(purchaseAmount);
        this.lottoManager.issueLottos(purchaseAmount);
        this.printLottos(this.lottos);
      } catch (err) {
        this.exitGame(err.message);
        throw err;
      }
    });
  }

  validate(purchaseAmount) {
    if (this.isInvalidPurchaseAmount(purchaseAmount)) {
      throw new Error(
        '[ERROR] 구입 금액은 1,000으로 나누어 떨어지는 숫자여야 합니다.',
      );
    }
  }

  isInvalidPurchaseAmount(purchaseAmount) {
    return (
      !/^\d+$/g.test(purchaseAmount) ||
      parseInt(purchaseAmount, 10) % 1000 !== 0
    );
  }

  issueLottos(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;
    /**
     * TODO: 랜덤 번호 6개 생성하여 lottoCount 만큼의 로또 발행
     */
    for (let i = 0; i < lottoCount; i++) {
      this.lottos.push(new Lotto([1, 2, 3, 4, 5, 6]));
    }
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
