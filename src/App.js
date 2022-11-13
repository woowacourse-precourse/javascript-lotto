const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    this.salesLotto();
  }

  salesLotto() {
    Console.readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) => {
      this.isValidatePurchaseAmount(purchaseAmount);
    });
  }

  isValidatePurchaseAmount(purchaseAmount) {
    const numberRegex = /^[0-9]+$/g;

    if (!purchaseAmount.match(numberRegex)) throw new Error('[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.');
    if (purchaseAmount % 1000 !== 0) throw new Error('[ERROR] 구입금액은 1000 단위 입니다.');
    if (purchaseAmount === '0') throw new Error('[ERROR] 최소금액은 1000원입니다.');
    this.purchaseAmount = purchaseAmount;
  }
}

const app = new App();
app.play();

module.exports = App;
