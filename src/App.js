const Console = require("@woowacourse/mission-utils").Console;

class App {
  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (amount) => {
      if (amount % 1000 !== 0) {
        throw new Error("[ERROR] 1,000원 단위로만 구매 가능합니다.");
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
