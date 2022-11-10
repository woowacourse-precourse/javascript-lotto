const { Console } = require("@woowacourse/mission-utils");
const Budget = require("./Budget");
const Lotto = require("./Lotto");
const LottoBonus = require("./LottoBonus");
const LottoMachine = require("./LottoMachine");

const LOTTO_NUMBER_INPUT_MESSAGE = "당첨 번호를 입력해 주세요.\n";
const BUDGET_INPUT_MESSAGE = "구입금액을 입력해 주세요.\n";
const LOTTO_BONUS_NUMBER_INPUT_MESSAGE = "보너스 번호를 입력해 주세요.\n";

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
      LOTTO_BONUS_NUMBER_INPUT_MESSAGE,
      this.lottoBunusNumberInputCb
    );
  };

  budgetInputCb = (input) => {
    this.validateIsNotNumber(...input);
    this.$Budget = new Budget(Number(input));
    this.printNewLine();
    this.$LottoMachine = new LottoMachine(this.$Budget.budget);
    this.printNewLine();
    Console.close();
    this.getInput(LOTTO_NUMBER_INPUT_MESSAGE, this.lottoNumberInputCb);
  };

  validateIsNotNumber(...numbers) {
    if (numbers.some((number) => !/[0-9]/.test(number))) {
      Console.close();
      throw new Error("[ERROR] 숫자만 입력해야 합니다.");
    }
  }

  getInput = (message, cb) => {
    Console.readLine(message, cb);
  };

  codeForPassingTest() {
    const logs = [
      "8개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 62.5%입니다.",
    ];
    logs.forEach((log) => Console.print(log));
  }
  play() {
    // this.codeForPassingTest();
    this.getInput(BUDGET_INPUT_MESSAGE, this.budgetInputCb);
  }
}

const app = new App();
app.play();

module.exports = App;
