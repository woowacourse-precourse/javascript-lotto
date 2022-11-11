const Lotto = require("./Lotto");
const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  #lottos = [];

  play() {
    this.startGame();
  }

  startGame() {
    Console.readLine("구입 금액을 입력해주세요.\n", (price) => {
      this.findPriceError(price);

      this.issueLotto(price);
    });
  }

  issueLotto(price) {
    const countOfLotto = price / 1000;

    Console.print(`\n${countOfLotto}개를 구매했습니다.`);
    Array.from({ length: countOfLotto }).forEach(() => {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );

      this.#lottos = [...this.#lottos, lotto];
      Console.print(lotto);
    });
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
