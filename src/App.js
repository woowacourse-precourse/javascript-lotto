const Lotto = require("./Lotto");
const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  startGame() {
    Console.readLine("구입 금액을 입력해주세요.\n", (price) => {
      this.findPriceError(price);

      // Console.print(price);
      // this.issueLotto(price);
    });
  }

  play() {
    this.startGame();
  }

  findPriceError(price) {
    if (
      Number.isNaN(+price) ||
      typeof +price !== "number" ||
      price % 1000 !== 0
    ) {
      throw new Error(
        "[ERROR] 구입 금액은 1000원 단위의 숫자로 입력해야 합니다."
      );
    }
  }
}

const app = new App();
app.play();

module.exports = App;
