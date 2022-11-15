const {
  createUserInput,
  createUserLotto,
  createLottoNumber,
  calculateLottoResult,
  createLottoResult,
  printResult,
} = require("./utils/handler");
const {
  validateInputMoney,
  validateLottoNumber,
} = require("./validation/validator");

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
