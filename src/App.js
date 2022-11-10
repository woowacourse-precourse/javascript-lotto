const Lotto = require("./Lotto");
const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  startGame() {
    Console.readLine("구입 금액을 입력해주세요.\n", (price) => {
      this.findPriceError(price);

      Console.print(price);
      this.issueLotto(price);
    });
  }

  play() {}
}

module.exports = App;
