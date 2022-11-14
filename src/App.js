const { Console } = require("@woowacourse/mission-utils");
const { LOTTO_PRICE, MESSAGE } = require("./constants/index");
const { formatArray } = require("./utils/index");

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
      this.state.count = money / LOTTO_PRICE;

      this.generate();
    });
  }

  generate() {
    Console.print(`${this.state.count + MESSAGE.COUNT_LOTTO}`);

    this.state.allNumbers = this.generator.getAllNumbers(this.state.count);

    this.state.allNumbers.forEach((numbers) => {
      Console.print(formatArray(numbers));
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

    this.printCount();
  }

  printCount() {
    const { threeCount, fourCount, fiveCount, fiveBonusCount, sixCount } =
      this.state.allCount;

    Console.print(this.generator.getThreeCountMessage(threeCount));
    Console.print(this.generator.getFourCountMessage(fourCount));
    Console.print(this.generator.getFiveCountMessage(fiveCount));
    Console.print(this.generator.getFiveBonusCountMessage(fiveBonusCount));
    Console.print(this.generator.getSixCountMessage(sixCount));

    this.printRate();
  }

  printRate() {
    const revenue = this.lotto.getRevenue(this.state.allCount);
    const rate = ((revenue / this.state.money) * 100).toFixed(1);

    Console.print(this.generator.getRateMessage(rate));

    this.exit();
  }

  exit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
