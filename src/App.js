const Calculator = require("./Calculator");
const MyNumberGenerator = require("./Generator");
const Lotto = require("./Lotto");
const { readLine } = require("./Missionutils");

class App {
  #winningNumbers;
  #numberGenerator = new MyNumberGenerator();

  play() {
    this.inputMoneyFromUser();
  }

  inputMoneyFromUser() {
    readLine("구입 금액을 입력해주세요.", (moneyInput) => {
      const myLottoNumbers = this.#numberGenerator.generateMyLottoNumber(moneyInput);
      this.getWinningNumbersFromUser(myLottoNumbers);
    });
  }

  getWinningNumbersFromUser(myLottoNumbers) {
    readLine("당첨 번호를 입력해 주세요.", (winningNumber) => {
      this.getBonusWinningNumberFromUser(myLottoNumbers, winningNumber);
    });
  }

  getBonusWinningNumberFromUser(myLottoNumbers, winningNumber) {
    readLine("보너스 번호를 입력해 주세요.", (bonusNumber) => {
      const lotto = new Lotto({ winningNumber, bonus: +bonusNumber });
      this.#winningNumbers = lotto.getConvertedLottoNumber();
      this.getResult(myLottoNumbers);
    });
  }

  getResult(myLottoNumbers) {
    this.calculateWinningCount(myLottoNumbers);
  }

  calculateWinningCount(myLottoNumbers) {
    new Calculator(myLottoNumbers, this.#winningNumbers);
  }
}
const a = new App();
a.play();
module.exports = App;
