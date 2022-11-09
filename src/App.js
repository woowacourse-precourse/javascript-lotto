const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    Console.readLine('구입금액을 입력해주세요.\n', purchaseAmount => {
      try {
        this.validate(purchaseAmount);
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

  exitGame(errorMessage) {
    Console.print(errorMessage);
    Console.close();
  }

  printLottos(lottoCount, lottos) {
    Console.print(`${lottoCount}개를 구매했습니다.`);
    lottos.forEach(lotto => Console.print(`[${lotto.join(', ')}]`));
  }
}

new App().play();

module.exports = App;
