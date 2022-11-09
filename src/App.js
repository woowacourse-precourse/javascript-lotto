const { Console } = require("@woowacourse/mission-utils");
const Budget = require("./Budget");
const Lotto = require("./Lotto");

const LOTTO_NUMBER_INPUT_MESSAGE = "당첨 번호를 입력해 주세요.\n";
const BUDGET_INPUT_MESSAGE = "구입금액을 입력해 주세요.\n";

class App {
  $Lotto;
  $LottoBonus;
  $Budget;

  constructor() {}

  lottoNumberInputCb = (input) => {
    const numbers = input.split(",");
    this.validateIsNotNumber(...numbers);
    const numbersStringToNumber = numbers.map(Number);
    this.$Lotto = new Lotto(numbersStringToNumber);
    Console.close();
  };

  budgetInputCb = (input) => {
    this.validateIsNotNumber(...input);
    this.$Budget = new Budget(Number(input));
    console.log("");
    Console.close();
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
  play() {
    this.getInput(BUDGET_INPUT_MESSAGE, this.budgetInputCb);
  }
}

const app = new App();
app.play();

module.exports = App;
