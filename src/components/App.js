const {
  LOTTO_PRICE,
  RANGE_OF_LOTTO_NUMBER,
  TOTAL_COUNTS,
  ERROR_MESSAGES,
} = require("../utils/constants");

const Lotto = require("./Lotto");
const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  #issuedLottos = [];
  #Lotto;

  play() {
    this.startGame();
  }

  startGame() {
    Console.readLine("구입 금액을 입력해주세요.\n", (price) => {
      this.validatePrice(price);

      this.buyLotto(price);
    });
  }

  buyLotto(price) {
    const numOfLotto = price / LOTTO_PRICE;

    Console.print(`\n${numOfLotto}개를 구매했습니다.`);

    Array.from({ length: numOfLotto }).forEach(() => {
      const newLotto = this.issueLotto();

      this.#issuedLottos = [...this.#issuedLottos, newLotto];

      Console.print(JSON.stringify(newLotto).replaceAll(",", ", "));
    });

    this.getWinningNumber();
  }

  issueLotto() {
    const { MIN, MAX } = RANGE_OF_LOTTO_NUMBER;

    return Random.pickUniqueNumbersInRange(MIN, MAX, TOTAL_COUNTS).sort(
      (a, b) => a - b
    );
  }

  getWinningNumber() {
    Console.readLine(`\n당첨 번호를 입력해 주세요.\n`, (userInput) => {
      const winningNums = userInput.split(",");

      this.#Lotto = new Lotto(winningNums);

      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(`\n보너스 번호를 입력해 주세요.\n`, (userInput) => {
      this.#Lotto.validateBonusNumber(+userInput);

      const bonusNumber = +userInput;

      this.#Lotto.calculateStatics(this.#issuedLottos, bonusNumber);
    });
  }

  validatePrice(price) {
    if (
      Number.isNaN(+price) ||
      typeof +price !== "number" ||
      price % LOTTO_PRICE !== 0
    ) {
      throw new Error(ERROR_MESSAGES.PRICE);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
