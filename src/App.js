const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/index");
const { throwError } = require("./utils/index");

const Validator = require("./Validator");
const Generator = require("./Generator");
const Lotto = require("./Lotto");

const initialState = {
  money: 0,
  count: 0,
  allNumbers: [],
  bonusNumber: 0,
};

class App {
  constructor() {
    this.validator = new Validator();
    this.generator = new Generator();
    this.lotto;

    this.state = initialState;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(MESSAGE.INPUT_MONEY, (money) => {
      money = Number(money);

      this.validator.checkMoneyValid(money);

      this.state.money = money;
      this.state.count = money / 1000;

      this.generate();
    });
  }

  generate() {
    Console.print(`${this.state.count + MESSAGE.COUNT_LOTTO}`);

    this.state.allNumbers = this.generator.getAllNumbers(this.state.count);

    this.state.allNumbers.forEach((numbers) => {
      Console.print(numbers);
    });

    this.inputNumber();
  }

  inputNumber() {
    Console.readLine(MESSAGE.INPUT_NUMBER, (numbers) => {
      numbers = numbers.split(",").map(Number);

      this.lotto = new Lotto(numbers);

      this.inputBonusNumber(numbers);
    });
  }

  inputBonusNumber(numbers) {
    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      bonusNumber = Number(bonusNumber);

      this.validator.checkBonusNumberValid(bonusNumber, numbers);

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
