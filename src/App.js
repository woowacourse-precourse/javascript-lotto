const { Console } = require("@woowacourse/mission-utils");
const {
  caculateLottoAmount,
  caculateTotalPrize,
  caculateProfitRatio,
} = require("./Caculator");
const { UNIT, INITIAL_RESULT } = require("./constant/constant");
const InputView = require("./InputView");
const Lotto = require("./Lotto");
const {
  print,
  printPurchaseNumber,
  printResult,
  printProfitRatio,
} = require("./OutputView");
const { generateRandomNumbers } = require("./RandomNumberGenerator");
const { validateMoney } = require("./Validation");
const Validation = require("./Validation");

class App {
  #lottos;
  #winningNumbers;
  #bonusNumber;
  #result;

  play() {
    InputView.getMoney(this.actWithMoney.bind(this));
  }

  actWithMoney(moneyInput) {
    const money = Number(moneyInput);
    try {
      validateMoney(money);
      const lottoAmount = caculateLottoAmount(money);
      this.setLottos(lottoAmount);
      this.printLottos(this.#lottos);
      this.getWinningNumbers();
    } catch (e) {
      print(e);
    }
  }

  setLottos(quantity) {
    this.#lottos = [...Array(quantity)].map(
      () => new Lotto(generateRandomNumbers())
    );
  }

  printLottos(lottos) {
    printPurchaseNumber(lottos.length);
    lottos.forEach((lotto) => {
      print(lotto.getLottoString());
    });
  }

  getWinningNumbers() {
    InputView.getWinningNumber(this.actWithWinningNumbers.bind(this));
  }

  actWithWinningNumbers(numbersInput) {
    const numbers = numbersInput.split(",").map((num) => Number(num));
    try {
      Validation.validateNumbers(numbers);
      this.#winningNumbers = numbers;
      this.getBonusNumber();
    } catch (e) {
      print(e);
    }
  }

  getBonusNumber() {
    InputView.getBonusNumber(this.actWithBonusNumber.bind(this));
  }

  actWithBonusNumber(number) {
    const bonusNumber = Number(number);
    try {
      Validation.validateBonusNumber(this.#winningNumbers, bonusNumber);
      this.#bonusNumber = bonusNumber;
      this.setResult(this.#lottos, this.#winningNumbers, this.#bonusNumber);
      this.endGame();
    } catch (e) {
      print(e);
    }
  }

  setResult(lottos, winningNumbers, bonusNumber) {
    this.#result = lottos.reduce((result, lotto) => {
      const match = lotto.matchCount(winningNumbers, bonusNumber);
      result[match] += 1;
      return result;
    }, INITIAL_RESULT);
  }

  getProfitRatio() {
    const totalPrize = caculateTotalPrize(this.#result);
    const money =
      Object.values(this.#result).reduce((sum, each) => sum + each, 0) *
      UNIT.money;
    return caculateProfitRatio(money, totalPrize);
  }

  endGame() {
    printResult(this.#result);
    printProfitRatio(this.getProfitRatio());
    Console.close();
  }
}

new App().play();

module.exports = App;
