const MissionUtils = require("@woowacourse/mission-utils");
const {
  MESSAGES,
  LOTTOREQUIREMENT,
  LOTTOPRIZE,
} = require("./constant/Constant");
const { printNumber, printLotto, printResult } = require("./LottoView");
const { validateLotto, validateBonus } = require("./LottoValidation");
const Lotto = require("./Lotto");

class App {
  #purchaseLotto;
  #publishedLottos = [];
  #winningNumber;
  #bonusNumber;
  #profitRate;

  play() {
    this.getLotto();
  }

  getLotto() {
    MissionUtils.Console.readLine(MESSAGES.PURCHASEPRICE, (input) => {
      validateLotto(input);
      this.#purchaseLotto = Number(input);

      return this.publishLottos();
    });
  }

  getWinningNumber() {
    MissionUtils.Console.readLine(MESSAGES.WINNINGNUMBER, (input) => {
      const winningNumber = input.split(",");
      this.#winningNumber = Array.from(winningNumber, (x) => Number(x));
      new Lotto(this.#winningNumber);

      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    MissionUtils.Console.readLine(MESSAGES.BONUSNUMBER, (input) => {
      validateBonus(input, this.#winningNumber);
      this.#bonusNumber = Number(input);

      this.getResult();
    });
  }

  publishLottos() {
    const myLotto = ~~(this.#purchaseLotto / LOTTOREQUIREMENT.LOTTOPRICE);
    printNumber(myLotto);

    for (let i = 0; i < myLotto; i++) {
      const publishLotto = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTOREQUIREMENT.MIN,
        LOTTOREQUIREMENT.MAX,
        LOTTOREQUIREMENT.LENGTH
      ).sort((a, b) => a - b);
      printLotto(publishLotto);
      this.#publishedLottos.push(publishLotto);
    }

    this.getWinningNumber();
  }

  getResult() {
    const lotto = new Lotto(this.#winningNumber);
    const { three, four, five, bonus, six } = lotto.comparisonNumbers(
      this.#publishedLottos,
      this.#bonusNumber
    );
    this.#profitRate =
      Math.round(
        ((LOTTOPRIZE.THREEMATCHES * three +
          LOTTOPRIZE.FOURMATCHES * four +
          LOTTOPRIZE.FIVEMATCHES * five +
          LOTTOPRIZE.BONUSMATCHES * bonus +
          LOTTOPRIZE.SIXMATCHES * six) /
          this.#purchaseLotto) *
          10000
      ) / 100;
    printResult({ three, four, five, bonus, six }, this.#profitRate);
  }
}

const app = new App();
app.play();

module.exports = App;
