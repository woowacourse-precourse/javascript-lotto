const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/index");
const { throwError } = require("./utils/index");

const Validator = require("./Validator");
const Generator = require("./Generator");
const Lotto = require("./Lotto");

const initialState = {
  money: 0,
  count: 0,
  numbers: [],
  bonusNumber: 0,
};

class App {
  constructor() {
    this.state = initialState;

    this.validator = new Validator();
    this.generator = new Generator();
    this.lotto;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(MESSAGE.INPUT_MONEY, (money) => {
      this.validator.checkMoneyValid(money);

      this.state.money = money;
      this.state.count = money / 1000;

      this.generate();
    });
  }

  generate() {
    Console.print(`${this.state.count + MESSAGE.COUNT_LOTTO}`);

    this.state.numbers = this.generator.getNumbers(this.state.count);

    this.state.numbers.forEach((number) => {
      Console.print(number);
    });

    this.inputNumber();
  }

  inputNumber() {
    Console.readLine(MESSAGE.INPUT_NUMBER, (number) => {
      number = number.split(",").map(Number);

      this.validator.checkNumberValid(number);

      this.lotto = new Lotto(number);

      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      bonusNumber = Number(bonusNumber);

      this.validator.checkBonusNumberValid(bonusNumber);

      this.state.bonusNumber = bonusNumber;
    });
  }

  error(message) {
    throwError(message);
  }
}

const app = new App();
app.play();

module.exports = App;
