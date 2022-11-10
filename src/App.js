const { Console, Random } = require("@woowacourse/mission-utils");
const {
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  UNIT,
  RESULT_MEESAGE,
} = require("./constant/constant");
const Lotto = require("./Lotto");

class App {
  play() {
    this.getMoney();
  }

  getMoney() {
    Console.readLine(INPUT_MESSAGE.MONEY, (money) => {
      this.validateMoney(money);
      this.lottos = this.exchangeLotto(+money / UNIT.MONEY);
      this.printLottos(this.lottos);
      this.getWinningNumbers();
    });
  }

  validateMoney(money) {
    if (+money % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.WRONG_MONEY);
    }
  }

  exchangeLotto(quantity) {
    const lottos = [];
    for (let i = 0; i < quantity; i++) {
      lottos.push(new Lotto(this.generateRandomNumbers()));
    }
    return lottos;
  }

  generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printLottos(lottos) {
    const numbers = lottos.map((lotto) => `[${lotto.numbers}]`);
    Console.print(RESULT_MEESAGE.PURCHASE.replace("N", numbers.length));
    Console.print(numbers.join("\n"));
  }

  getWinningNumbers() {
    Console.readLine(INPUT_MESSAGE.WINNING_NUMBER, (numbers) => {
      this.winningNumbers = numbers.split(",");
      this.validateWinningNumbers(winningNumbers);
      this.getBonusNumber();
    });
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.WRONG_QUANTITY);
    }

    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.HAS_REPEAT);
    }
  }

  getBonusNumber() {
    Console.readLine(INPUT_MESSAGE.BONUS_NUMBER, (number) => {
      this.validateBonusNumber(number);
      this.bonusNumber = number;
    });
  }

  validateBonusNumber(number) {
    if (number < 1 || number > 45) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }
  }
}

new App().play();
module.exports = App;
