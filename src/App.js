const { Console } = require("@woowacourse/mission-utils");
const Budget = require("./Budget");
const Lotto = require("./Lotto");
const LottoBonus = require("./LottoBonus");
const LottoMachine = require("./LottoMachine");
const Validation = require("./Validation");
const { INPUT_QUESTION } = require("./constants");

class App {
  $Lotto;
  $LottoBonus;
  $Budget;

  printNewLine() {
    console.log("");
  }

  lottoBunusNumberInputCb = (input) => {
    Validation.validateIsNotNumber(...input);
    this.$LottoBonus = new LottoBonus(Number(input));
    this.$Lotto.checkIsDuplicated(this.$LottoBonus.number);
    this.printNewLine();
    this.$Lotto.printWinningStat(
      this.$LottoMachine.tickets,
      this.$LottoBonus.number,
      this.$Budget.budget
    );
    Console.close();
  };

  lottoNumberInputCb = (input) => {
    const numbers = input.split(",");
    Validation.validateIsNotNumber(...numbers);
    const numbersStringToNumber = numbers.map(Number);
    this.$Lotto = new Lotto(numbersStringToNumber);
    this.printNewLine();
    this.getInput(
      INPUT_QUESTION.LOTTO_BONUS_NUMBER,
      this.lottoBunusNumberInputCb
    );
  };

  budgetInputCb = (input) => {
    Validation.validateIsNotNumber(...input);
    this.$Budget = new Budget(Number(input));
    this.printNewLine();
    this.$LottoMachine = new LottoMachine(this.$Budget.budget);
    this.printNewLine();
    this.getInput(INPUT_QUESTION.LOTTO_NUMBER, this.lottoNumberInputCb);
  };

  getInput = (message, cb) => {
    Console.readLine(message, cb);
  };

  play() {
    this.getInput(INPUT_QUESTION.BUDGET, this.budgetInputCb);
  }
}

const app = new App();
app.play();

module.exports = App;
