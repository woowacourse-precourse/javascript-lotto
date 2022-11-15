const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const {
  createUserInput,
  createUserLotto,
  createLottoNumber,
  calculateLottoResult,
  createLottoResult,
  printResult,
} = require("./utils/handler");

class App {
  play() {
    const [amount, money] = createUserInput();
    validateInputMoney(money);
    const userLotto = createUserLotto(amount);
    const [winningNumbers, bonusNumber] = createLottoNumber();
    const result = calculateLottoResult(userLotto, winningNumbers, bonusNumber);
    const LottoResult = createLottoResult(result);
    printResult(LottoResult, money);
  }
}
module.exports = App;
