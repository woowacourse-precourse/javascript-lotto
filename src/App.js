const Console = require("@woowacourse/mission-utils").Console;

class App {
  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (amount) => {
      this.checkPurchaseAmount(amount);

      const numberOfLotto = amount / 1000;

      this.showNumberOfPurchasedLotto(numberOfLotto);
    });
  }

  checkPurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로만 구매 가능합니다.");
    }

    return true;
  }

  showNumberOfPurchasedLotto(amount) {
    Console.print(`\n${amount}개를 구매했습니다.`);
  }
}

const app = new App();
app.play();

module.exports = App;
