const {
  GUIDE_MESSAGES,
  LOTTO_PRICE,
  RANGE_OF_LOTTO_NUMBER,
  TOTAL_COUNTS,
  ERROR_MESSAGES,
} = require("./utils/constants");

const Lotto = require("./Lotto");
const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  #issuedLottos = [];
  #Lotto;

  play() {
    this.startGame();
  }

  startGame() {
    Console.readLine(GUIDE_MESSAGES.PURCHASE, (price) => {
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

      this.printLotto(newLotto);
    });

    this.getWinningNums();
  }

  issueLotto() {
    const { MIN, MAX } = RANGE_OF_LOTTO_NUMBER;

    return Random.pickUniqueNumbersInRange(MIN, MAX, TOTAL_COUNTS).sort(
      (a, b) => a - b
    );
  }

  printLotto(newLotto) {
    Console.print(JSON.stringify(newLotto).replace(/,/g, ", "));
  }

  getWinningNums() {
    Console.readLine(GUIDE_MESSAGES.WINNING_NUMS, (userInput) => {
      const winningNums = userInput.split(",");

      this.#Lotto = new Lotto(winningNums);

      this.getBonusNum();
    });
  }

  getBonusNum() {
    Console.readLine(GUIDE_MESSAGES.BONUS_NUM, (userInput) => {
      this.#Lotto.validateBonusNum(+userInput);

      const bonusNumber = +userInput;

      this.printResults(this.getResults(bonusNumber));
    });
  }

  getResults(bonusNumber) {
    return this.#Lotto.calculateStatics(this.#issuedLottos, bonusNumber);
  }

  printResults(results) {
    const { statics, earningsRate } = results;

    const resultMessage = `
당첨 통계
---
3개 일치 (5,000원) - ${statics[3]}개
4개 일치 (50,000원) - ${statics[4]}개
5개 일치 (1,500,000원) - ${statics[5]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${statics["5andBonus"]}개
6개 일치 (2,000,000,000원) - ${statics[6]}개
총 수익률은 ${earningsRate}입니다.
`;

    this.endGame(resultMessage);
  }

  endGame(resultMessage) {
    Console.print(resultMessage);
    Console.close();
  }

  validatePrice(price) {
    if (
      typeof +price !== "number" ||
      Number.isNaN(+price) ||
      price % LOTTO_PRICE !== 0
    ) {
      throw new Error(ERROR_MESSAGES.PRICE);
    }
  }
}

module.exports = App;
