const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, PRIZE } = require("./constants/index");

const Validator = require("./Validator");
const Generator = require("./Generator");

const Lotto = require("./Lotto");

const initialState = {
  money: 0,
  count: 0,
  allNumbers: [],
  bonusNumber: 0,
  allCount: {
    threeCount: 0,
    fourCount: 0,
    fiveCount: 0,
    fiveBonusCount: 0,
    sixCount: 0,
  },
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
      Console.print(`[${String(numbers).replace(/,/g, ", ")}]`);
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

      this.match();
    });
  }

  match() {
    Console.print(MESSAGE.MATCH_TITLE);
    Console.print(MESSAGE.MATCH_DIVIDER);

    this.state.allCount = this.lotto.getAllCount(
      this.state.allNumbers,
      this.state.bonusNumber
    );

    this.result();
  }

  result() {
    const { threeCount, fourCount, fiveCount, fiveBonusCount, sixCount } =
      this.state.allCount;

    Console.print(
      MESSAGE.MATCH_THREE +
        PRIZE.THREE.toLocaleString() +
        MESSAGE.MATCH_PRIZE +
        String(threeCount) +
        MESSAGE.MATCH_COUNT
    );

    Console.print(
      MESSAGE.MATCH_FOUR +
        PRIZE.FOUR.toLocaleString() +
        MESSAGE.MATCH_PRIZE +
        String(fourCount) +
        MESSAGE.MATCH_COUNT
    );

    Console.print(
      MESSAGE.MATCH_FIVE +
        PRIZE.FIVE.toLocaleString() +
        MESSAGE.MATCH_PRIZE +
        String(fiveCount) +
        MESSAGE.MATCH_COUNT
    );

    Console.print(
      MESSAGE.MATCH_FIVE_BONUS +
        PRIZE.FIVE_BONUS.toLocaleString() +
        MESSAGE.MATCH_PRIZE +
        String(fiveBonusCount) +
        MESSAGE.MATCH_COUNT
    );

    Console.print(
      MESSAGE.MATCH_SIX +
        PRIZE.SIX.toLocaleString() +
        MESSAGE.MATCH_PRIZE +
        String(sixCount) +
        MESSAGE.MATCH_COUNT
    );

    this.calculate();
  }

  calculate() {
    const revenue = this.lotto.getRevenue(this.state.allCount);
    const rate = ((revenue / this.state.money) * 100).toFixed(1);

    Console.print(MESSAGE.CALCULATE_RATE + rate + MESSAGE.CALCULATE_PERCENT);

    this.exit();
  }

  exit() {
    Console.close();
  }

  error(message) {
    throw new Error(message);
  }
}

const app = new App();
app.play();

module.exports = App;
