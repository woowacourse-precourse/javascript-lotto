const { Console } = require("@woowacourse/mission-utils");
const Budget = require("./Budget");
const Lotto = require("./Lotto");
const LottoBonus = require("./LottoBonus");
const LottoMachine = require("./LottoMachine");
const { INPUT_QUESTION } = require("./constants");

class App {
  $Lotto;
  $LottoBonus;
  $Budget;

  printNewLine() {
    console.log("");
  }
  lottoBunusNumberInputCb = (input) => {
    this.validateIsNotNumber(...input);
    this.$LottoBonus = new LottoBonus(Number(input));
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
    this.validateIsNotNumber(...numbers);
    const numbersStringToNumber = numbers.map(Number);
    this.$Lotto = new Lotto(numbersStringToNumber);
    this.printNewLine();
    this.getInput(
      INPUT_QUESTION.LOTTO_BONUS_NUMBER,
      this.lottoBunusNumberInputCb
    );
  };

  budgetInputCb = (input) => {
    this.validateIsNotNumber(...input);
    this.$Budget = new Budget(Number(input));
    this.printNewLine();
    this.$LottoMachine = new LottoMachine(this.$Budget.budget);
    this.printNewLine();
    this.getInput(INPUT_QUESTION.LOTTO_NUMBER, this.lottoNumberInputCb);
  };

  validateIsNotNumber(...numbers) {
    if (numbers.some((number) => /\D/.test(number))) {
      Console.close();
      throw new Error("[ERROR] 숫자만 입력해야 합니다.");
    }
  }

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
